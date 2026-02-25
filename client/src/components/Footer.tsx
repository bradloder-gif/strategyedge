/* ============================================================
   FOOTER — StrategyEdge Executive Edge Design
   Deep navy with gradient bar at top
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.065 264)" }}>
      {/* Gradient accent bar */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, oklch(0.245 0.072 264) 0%, oklch(0.52 0.14 258) 50%, oklch(0.245 0.072 264) 100%)",
        }}
      />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  letterSpacing: "0.12em",
                  color: "white",
                }}
              >
                STRATEGY<span style={{ color: "oklch(0.62 0.13 258)" }}>EDGE</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Consulting | Advisory
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "18rem",
              }}
            >
              High-impact strategy and advisory services, delivered with the flexibility that modern organisations require.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </h5>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Profile", href: "#profile" },
                { label: "Clients", href: "#clients" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h5>
            <div className="space-y-3">
              <a
                href="mailto:brad.loder@strategyedge.com.au"
                style={{
                  display: "block",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                brad.loder@strategyedge.com.au
              </a>
              <a
                href="tel:+61404442395"
                style={{
                  display: "block",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                +61 404 442 395
              </a>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Sydney, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {year} StrategyEdge Consulting & Advisory. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            ABN · Sydney, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
