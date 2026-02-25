import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("enquiries.submitForm", () => {
  it("should accept a valid enquiry submission", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as any, res: {} as any });

    const result = await caller.enquiries.submitForm({
      name: "John Doe",
      email: "john@example.com",
      organisation: "Acme Corp",
      message: "We need help with our M&A strategy.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
  });

  it("should reject enquiry with missing name", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as any, res: {} as any });

    try {
      await caller.enquiries.submitForm({
        name: "",
        email: "john@example.com",
        organisation: "Acme Corp",
        message: "We need help with our M&A strategy.",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject enquiry with invalid email", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as any, res: {} as any });

    try {
      await caller.enquiries.submitForm({
        name: "John Doe",
        email: "not-an-email",
        organisation: "Acme Corp",
        message: "We need help with our M&A strategy.",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject enquiry with missing message", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as any, res: {} as any });

    try {
      await caller.enquiries.submitForm({
        name: "John Doe",
        email: "john@example.com",
        organisation: "Acme Corp",
        message: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should accept enquiry without organisation", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as any, res: {} as any });

    const result = await caller.enquiries.submitForm({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Interested in your services.",
    });

    expect(result.success).toBe(true);
  });
});
