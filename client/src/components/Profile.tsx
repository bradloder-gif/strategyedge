/* ============================================================
   PROFILE — StrategyEdge Executive Edge Design
   Brad Loder profile on off-white background
   Asymmetric layout: photo left, content right
   ============================================================ */

import { useEffect, useRef } from "react";
import { Briefcase, Building2, Award } from "lucide-react";

// Brad Loder's photo extracted from the company PPT
const BRAD_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378470694/ihYSkUcwtIbwtuHq.jpg";

const consultingBackground = [
  "Over 20+ years of strategy and execution experience, with responsibility for strategic consulting engagements with public and private sector clients, delivering high-impact solutions to critical problems.",
  "Designed and implemented multiple business transformation initiatives, creating, delivering and capturing new sources of value across multiple industries, overcoming challenges of legacy structures, processes and cultures.",
  "Conducted 40+ market reviews, target identification and due diligence projects for leading private equity and advisory firms, conducting critical analysis and delivering within high pressure timelines.",
  "Delivered 50+ acquisitions both onshore and offshore, accountable for opportunity sourcing, deal structure and integration, generating $700m+ in value creation.",
  "Experience managing stakeholder expectations throughout the lifecycle of projects in organisations ranging from 5 to 20,000+ employees.",
];

const currentPositions = [
  "Partner — OnetoOne Corporate Finance",
  "Management Consultant / MD — Strategy Edge",
];

const priorConsulting = [
  "Management Consultant, Pacific Strategy Partners",
  "Management Consultant, Crescendo Partners",
];

const industryExperience = [
  "Chief Operating Officer, TTI (interim)",
  "Chief Strategy & Corporate Development Officer, Ovato",
  "GM Transformation, Ventia",
  "Head of Innov8 Venture Capital, Optus / Singtel",
  "Head of Strategy, Innovation and M&A, Optus",
  "General Manager / MD, Montpelier Asia Pacific",
  "Operations Director, Medical Legal",
  "Regional Manager, Sony UK",
  "$700m+ in value creation across 50+ acquisitions",
];

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

export default function Profile() {
  return (
    <section
      id="profile"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "white", paddingTop: "7rem" }}
    >
      <div className="container">
        {/* Section header */}
        <RevealEl className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="section-label">Leadership Profile</span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.245 0.072 264)",
              lineHeight: 1.2,
              maxWidth: "36rem",
            }}
          >
            Brad combines consulting experience with industry exposure
          </h2>
        </RevealEl>

        {/* Profile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: photo + key attributes */}
          <RevealEl className="lg:col-span-1">
            <div className="sticky top-28">
              {/* Photo */}
              <div className="relative mb-8" style={{ maxWidth: "140px" }}>
                <div
                  className="absolute -top-3 -left-3 w-full h-full"
                  style={{ backgroundColor: "oklch(0.245 0.072 264)", zIndex: 0 }}
                />
                <img
                  src={BRAD_PHOTO}
                  alt="Brad Loder — Managing Director, StrategyEdge"
                  className="relative z-10 object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "center top", width: "130px" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 z-20"
                  style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                />
              </div>

              {/* Name & title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "oklch(0.245 0.072 264)",
                  marginBottom: "0.25rem",
                }}
              >
                Brad Loder
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "oklch(0.52 0.14 258)",
                  marginBottom: "1.5rem",
                }}
              >
                Management Consultant / MD
              </p>

              {/* Key attributes */}
              <div className="space-y-4">
                {[
                  "Delivers practical, actionable recommendations to complex problems",
                  "Provides excellent communication and decision making at CEO and Board level",
                  "Combines objective, independent challenge and advice with hands-on involvement",
                ].map((attr) => (
                  <div key={attr} className="flex gap-3">
                    <div
                      className="w-1 flex-shrink-0 mt-1"
                      style={{ backgroundColor: "oklch(0.52 0.14 258)", height: "auto", minHeight: "1rem" }}
                    />
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        color: "oklch(0.38 0.03 264)",
                        lineHeight: 1.65,
                      }}
                    >
                      {attr}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealEl>

          {/* Right column: detailed experience */}
          <div className="lg:col-span-11 space-y-10">
            {/* Consulting background */}
            <RevealEl delay={100}>
              <div
                className="p-8"
                style={{
                  backgroundColor: "oklch(0.975 0.006 85)",
                  borderLeft: "4px solid oklch(0.52 0.14 258)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Briefcase size={18} style={{ color: "oklch(0.52 0.14 258)" }} />
                  <h4
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "oklch(0.245 0.072 264)",
                    }}
                  >
                    Consulting Background
                  </h4>
                </div>
                <ul className="space-y-3">
                  {consultingBackground.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3"
                    >
                      <span
                        className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                      />
                      <p
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 300,
                          color: "oklch(0.38 0.03 264)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealEl>

            {/* Positions grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevealEl delay={150}>
                <div
                  className="p-6 h-full"
                  style={{
                    backgroundColor: "oklch(0.245 0.072 264)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={16} color="rgba(255,255,255,0.7)" />
                    <h4
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Current Positions
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {currentPositions.map((pos) => (
                      <li
                        key={pos}
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 400,
                          color: "white",
                          lineHeight: 1.6,
                        }}
                      >
                        {pos}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                    <h4
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Prior Consulting
                    </h4>
                    <ul className="space-y-2">
                      {priorConsulting.map((pos) => (
                        <li
                          key={pos}
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 300,
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.6,
                          }}
                        >
                          {pos}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealEl>

              <RevealEl delay={200}>
                <div
                  className="p-6 h-full"
                  style={{
                    border: "1px solid oklch(0.88 0.012 264)",
                    backgroundColor: "white",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Award size={16} style={{ color: "oklch(0.52 0.14 258)" }} />
                    <h4
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "oklch(0.245 0.072 264)",
                      }}
                    >
                      Industry Experience
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {industryExperience.map((pos) => (
                      <li
                        key={pos}
                        className="flex gap-2"
                      >
                        <span
                          className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                          style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: 300,
                            color: "oklch(0.42 0.03 264)",
                            lineHeight: 1.65,
                          }}
                        >
                          {pos}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealEl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
