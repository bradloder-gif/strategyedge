/* ============================================================
   ABOUT — StrategyEdge Executive Edge Design
   Value proposition section on off-white background
   ============================================================ */

import { useEffect, useRef } from "react";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Practical & Actionable",
    body: "Recommendations grounded in real-world experience, not theoretical frameworks. Every engagement delivers clear, implementable outcomes.",
  },
  {
    icon: Users,
    title: "CEO & Board Level",
    body: "Excellent communication and decision-making support at the highest levels, with iterative progress reporting throughout.",
  },
  {
    icon: Lightbulb,
    title: "Independent Challenge",
    body: "Objective, independent challenge and advice combined with hands-on involvement — the rare combination of strategic rigour and practical execution.",
  },
  {
    icon: TrendingUp,
    title: "High-Impact Execution",
    body: "From strategy design through to implementation, delivering measurable value across transformation, M&A, and growth initiatives.",
  },
];

function useScrollReveal(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  );
}

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headingRef as React.RefObject<Element>);

  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.975 0.006 85)", paddingTop: "8rem" }}
    >
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="section-label">About StrategyEdge</span>
          </div>
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.245 0.072 264)",
              lineHeight: 1.2,
            }}
          >
            Strategy that bridges consulting rigour with industry reality
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 300,
              color: "oklch(0.38 0.03 264)",
              lineHeight: 1.75,
            }}
          >
            StrategyEdge was founded on a simple conviction: that the best strategic advice combines the analytical depth of top-tier consulting with the practical wisdom of having operated within industries. We deliver high-impact strategy with the flexibility that modern organisations require.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <RevealCard key={pillar.title} delay={i * 100}>
              <div
                className="card-hover p-8 h-full"
                style={{
                  backgroundColor: "white",
                  borderTop: "3px solid oklch(0.52 0.14 258)",
                  boxShadow: "0 4px 24px rgba(26,43,94,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ backgroundColor: "oklch(0.245 0.072 264)" }}
                >
                  <pillar.icon size={20} color="white" />
                </div>
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "oklch(0.245 0.072 264)",
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "oklch(0.42 0.03 264)",
                    lineHeight: 1.7,
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
