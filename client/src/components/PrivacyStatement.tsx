/* ============================================================
   PRIVACY STATEMENT — StrategyEdge
   Short, plain-English statement covering the enquiry form and
   the Umami analytics. Lives on the page as #privacy because the
   site is statically hosted and a /privacy route would 404 here.
   ============================================================ */

const CONTACT_EMAIL = "brad.loder@strategyedge.com.au";

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  lineHeight: 1.8,
  color: "rgba(26,43,94,0.78)",
  marginBottom: "1rem",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "oklch(0.52 0.14 258)",
  marginBottom: "0.35rem",
};

export default function PrivacyStatement() {
  return (
    <section
      id="privacy"
      className="py-20 lg:py-24"
      style={{
        backgroundColor: "oklch(0.975 0.006 85)",
        borderTop: "1px solid rgba(26,43,94,0.1)",
      }}
    >
      <div className="container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.62 0.13 258)" }} />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "oklch(0.52 0.14 258)",
              }}
            >
              Privacy Statement
            </span>
          </div>

          <h2
            className="mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
              fontWeight: 700,
              color: "oklch(0.245 0.072 264)",
              lineHeight: 1.25,
            }}
          >
            What we collect, and how we handle it
          </h2>

          <h3 style={headingStyle}>Enquiry form</h3>
          <p style={bodyStyle}>
            When you send an enquiry through this site we receive your name, email address,
            organisation (if you provide it) and your message. We use these details only to reply
            to you and to follow up on your enquiry. We don't add you to a mailing list, and we
            don't sell or share your details. The form is delivered to our inbox by FormSubmit, a
            form relay service, so your message passes through that provider on its way to us.
          </p>

          <h3 style={headingStyle}>Analytics</h3>
          <p style={bodyStyle}>
            We use Umami to understand how the site is used and how many enquiries are submitted.
            It sets no cookies, stores no IP addresses, and doesn't follow you to other sites. What
            we see is aggregate only: pages viewed, how you arrived, country, and how many times
            the enquiry form was submitted. None of it identifies you personally.
          </p>

          <h3 style={headingStyle}>Where your information goes</h3>
          <p style={bodyStyle}>
            FormSubmit and Umami are operated outside Australia, so your details may be processed
            overseas. Our hosting provider, GitHub Pages, may keep standard server logs of
            requests.
          </p>

          <h3 style={headingStyle}>Your choices</h3>
          <p style={{ ...bodyStyle, marginBottom: 0 }}>
            You can ask what personal information we hold about you, ask us to correct or delete
            it, or ask a question about this statement by emailing{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: "oklch(0.52 0.14 258)", textDecoration: "underline" }}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 300,
              color: "rgba(26,43,94,0.45)",
              marginTop: "2rem",
            }}
          >
            Last updated: November 2026
          </p>
        </div>
      </div>
    </section>
  );
}
