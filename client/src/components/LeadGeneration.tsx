/* ============================================================
   LEAD GENERATION — StrategyEdge Executive Edge Design
   Strategy Framework download section with email capture
   Navy background with accent blue CTA
   ============================================================ */

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadGeneration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setLoading(true);
    // Simulate form submission (in production, this would send to your backend or email service)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("");
        setName("");
        setSubmitted(false);
      }, 3000);
    }, 800);
  };

  return (
    <section
      style={{
        backgroundColor: "oklch(0.245 0.072 264)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CTA Copy */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Get Our Strategy Framework
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "28rem",
              }}
            >
              Download our proven framework for developing high-impact corporate strategy. Learn the approach we use with leading organisations to identify opportunities, structure initiatives, and drive measurable value creation.
            </p>

            {/* Key benefits */}
            <ul className="space-y-3 mb-8">
              {[
                "Strategic assessment framework",
                "Opportunity identification process",
                "Implementation roadmap template",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "oklch(0.62 0.13 258)", marginTop: "0.25rem", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Email Capture Form */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "2.5rem",
              borderRadius: "0.65rem",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {!submitted ? (
              <>
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.62 0.13 258)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Download Now
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "0.5rem",
                        color: "white",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "0.5rem",
                        color: "white",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading || !email || !name}
                    style={{
                      width: "100%",
                      padding: "0.875rem 1.5rem",
                      marginTop: "1.5rem",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      backgroundColor: loading ? "oklch(0.52 0.14 258 / 0.7)" : "oklch(0.52 0.14 258)",
                      color: "white",
                      border: "none",
                      borderRadius: "0.5rem",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      opacity: loading ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = "oklch(0.62 0.13 258)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.backgroundColor = "oklch(0.52 0.14 258)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            display: "inline-block",
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "white",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Download Framework
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "1rem",
                    textAlign: "center",
                  }}
                >
                  We respect your privacy. No spam, ever.
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 size={48} style={{ color: "oklch(0.62 0.13 258)" }} />
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  Thank you!
                </h4>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Check your email for the Strategy Framework.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
