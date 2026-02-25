import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { insertLeadSubmission, insertEnquiry } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    submitForm: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await insertLeadSubmission({
            name: input.name,
            email: input.email,
          });

          await notifyOwner({
            title: "New Lead Submission",
            content: `${input.name} (${input.email}) submitted the Strategy Framework download form.`,
          });

          return {
            success: true,
            message: "Thank you! We have received your submission.",
          };
        } catch (error) {
          console.error("[Lead Submission] Error:", error);
          throw error;
        }
      }),
  }),

  enquiries: router({
    submitForm: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          organisation: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await insertEnquiry({
            name: input.name,
            email: input.email,
            organisation: input.organisation || null,
            message: input.message,
          });

          const orgDisplay = input.organisation || "Unknown Organisation";
          const messagePreview = input.message.substring(0, 100);

          await notifyOwner({
            title: "New Enquiry Received",
            content: `${input.name} from ${orgDisplay} (${input.email}) sent an enquiry: "${messagePreview}..."`,
          });

          return {
            success: true,
            message: "Thank you for reaching out. We will be in touch shortly.",
          };
        } catch (error) {
          console.error("[Enquiry Submission] Error:", error);
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
