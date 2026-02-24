/* ============================================================
   CLIENTS — StrategyEdge Executive Edge Design
   Industry sectors with client name lists
   Off-white background
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const industries = [
  {
    sector: "Agribusiness",
    clients: ["Elders", "GrainCorp", "AA Co", "HiFert"],
  },
  {
    sector: "Financial Services",
    clients: ["ANZ", "NAB", "Suncorp"],
  },
  {
    sector: "Resources & Energy",
    clients: ["BP", "Hillgrove Resources", "DDH1 Drilling", "Transpacific", "MiKay Drilling", "Pinnacle Drilling", "Traverse Drilling"],
  },
  {
    sector: "Industrial",
    clients: ["Orica", "OneSteel", "Skilled", "EnviroWaste", "CarterHoltHarvey"],
  },
  {
    sector: "Consumer Goods & Services",
    clients: ["Lion Nathan", "Cadbury Schweppes", "P&N Beverages", "Coca-Cola Amatil", "Neverfall", "Goodman Fielder", "GWF", "SCA", "Amart Furniture"],
  },
  {
    sector: "Travel & Transport",
    clients: ["BusVic", "Transonic Travel", "Selectus"],
  },
  {
    sector: "Private Equity",
    clients: ["KKR", "TPG", "Ironbridge", "CPE Capital", "Archer Capital", "Pacific Equity Partners", "Wolseley"],
  },
  {
    sector: "Public Sector",
    clients: ["NSW Health", "Forests NSW", "WSN Environmental Solutions", "NSW Government", "Australian Government"],
  },
  {
    sector: "Technology",
    clients: ["Optus", "Telstra", "Uecomm", "Crazy John's"],
  },
  {
    sector: "Education",
    clients: ["The Tax Institute", "Engineers Australia", "Navitas", "Swinburne University", "Victoria University"],
  },
  {
    sector: "Not For Profit",
    clients: ["AMES Australia", "The Cancer Council NSW", "Crisis Support Services", "Alberts"],
  },
];

function RevealEl({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function Clients() {
  const [activeSector, setActiveSector] = useState<string | null>(null);

  return (
    <section
      id="clients"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.975 0.006 85)", paddingTop: "7rem" }}
    >
      <div className="container">
        {/* Header */}
        <RevealEl className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="section-label">Client Experience</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "oklch(0.245 0.072 264)",
                lineHeight: 1.2,
                maxWidth: "32rem",
              }}
            >
              Significant experience across a large variety of clients and industries
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "oklch(0.48 0.04 264)",
                lineHeight: 1.7,
                maxWidth: "22rem",
              }}
            >
              From ASX-listed corporations to private equity portfolio companies and government agencies.
            </p>
          </div>
        </RevealEl>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <RevealEl key={industry.sector} delay={i * 50}>
              <div
                className="p-6 h-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: activeSector === industry.sector ? "oklch(0.245 0.072 264)" : "white",
                  borderTop: `3px solid ${activeSector === industry.sector ? "oklch(0.62 0.13 258)" : "oklch(0.52 0.14 258)"}`,
                  boxShadow: activeSector === industry.sector
                    ? "0 12px 32px rgba(26,43,94,0.2)"
                    : "0 2px 12px rgba(26,43,94,0.06)",
                }}
                onMouseEnter={() => setActiveSector(industry.sector)}
                onMouseLeave={() => setActiveSector(null)}
              >
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: activeSector === industry.sector ? "oklch(0.72 0.13 258)" : "oklch(0.52 0.14 258)",
                    transition: "color 0.3s",
                  }}
                >
                  {industry.sector}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {industry.clients.map((client) => (
                    <span
                      key={client}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: activeSector === industry.sector ? 400 : 300,
                        color: activeSector === industry.sector ? "rgba(255,255,255,0.85)" : "oklch(0.42 0.03 264)",
                        lineHeight: 1.6,
                        transition: "color 0.3s",
                      }}
                    >
                      {client}{industry.clients.indexOf(client) < industry.clients.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            </RevealEl>
          ))}
        </div>

        {/* Summary stat */}
        <RevealEl delay={200} className="mt-12">
          <div
            className="flex flex-wrap gap-8 justify-center p-8"
            style={{
              backgroundColor: "oklch(0.245 0.072 264)",
            }}
          >
            {[
              { value: "15+", label: "Industry Sectors" },
              { value: "50+", label: "Client Organisations" },
              { value: "Public & Private", label: "Sector Coverage" },
              { value: "5–20,000+", label: "Employee Scale" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "0.4rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealEl>
      </div>
    </section>
  );
}
