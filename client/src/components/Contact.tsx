/* ============================================================
   CONTACT — StrategyEdge Executive Edge Design
   CTA + contact form on dark navy background
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/gVybYq4Vjpdbw9fgkcKQlM/sandbox/JYS0Dl54xMrj7DyIEQOcMa-img-4_1771894483000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1Z5YllxNFZqcGRidzlmZ2tjS1FsTS9zYW5kYm94L0pZUzBEbDU0eE1yajdEeUlFUU9jTWEtaW1nLTRfMTc3MTg5NDQ4MzAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZHSBfs-xJ8mpcShKEMKCEweJjABX2g2a7WhU9357kJFnEL6g8L0AxAbDbxKPD98oZqjISTHDSoDFIZs2WISApJp6UHnQarIBoXiW4mjod0dUDe~kqMNl~8oOKvQDKiD2hdbnYdv5Ae48pI4IB7lAD7PcBAPfw6D14uxnfsoJ8uQIXQAqs0EyrN3EQcDzqP7wrHrNJfgBuZ6UhM-8ZTC-GS-11klmecbVmUOm2nSWFCnMoznAqHmEBVVGocNwxLGsr1WbkoabCufvwuA1QF4asC26KRHyNK86MOsW276HiDSXmeE0jcH2cKvs31VWQ~VeMU1VZJ6rhN0sS0W-85UcgA__";

function RevealEl({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", organisation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.55)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: `url(${CTA_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)",
        marginTop: "-3rem",
        paddingTop: "8rem",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(26,43,94,0.97) 0%, rgba(26,43,94,0.92) 100%)" }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA copy */}
          <RevealEl>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.62 0.13 258)" }} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.13 258)",
                }}
              >
                Get in Touch
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Ready to sharpen your strategic edge?
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
              }}
            >
              Whether you're navigating a complex strategic challenge, evaluating an acquisition, or leading a transformation, StrategyEdge brings the experience and independence to help you succeed.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:brad@strategyedge.com.au"
                className="flex items-center gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                >
                  <Mail size={16} color="white" />
                </div>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-white"
                >
                  brad@strategyedge.com.au
                </span>
              </a>

              <a
                href="https://www.linkedin.com/company/strategyedge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                >
                  <Linkedin size={16} color="white" />
                </div>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-white"
                >
                  Connect on LinkedIn
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                "Brad combines consulting experience, with industry exposure to deliver practical and actionable recommendations."
              </p>
            </div>
          </RevealEl>

          {/* Right: Contact form */}
          <RevealEl delay={150}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full text-center p-12"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                >
                  <ArrowRight size={24} color="white" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank you for reaching out
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                  }}
                >
                  We'll be in touch shortly to discuss how StrategyEdge can help your organisation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Send an Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.13 258)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.13 258)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Organisation</label>
                  <input
                    type="text"
                    placeholder="Your company or organisation"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.13 258)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>How Can We Help?</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your strategic challenge or enquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.13 258)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ marginTop: "0.5rem" }}
                >
                  <span>Send Enquiry</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </RevealEl>
        </div>
      </div>
    </section>
  );
}
