import { useRef, useEffect, useState } from "react";
import { Briefcase, Building2, Award } from "lucide-react";

const BRAD_PHOTO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378470694/ihYSkUcwtIbwtuHq.jpg";

const consultingBackground = [
  "Over 20+ years of strategy and execution experience, with responsibility for strategic consulting engagements with public and private sector clients, delivering high-impact solutions to critical problems, generating $700m+ in value creation.",
  "Designed and implemented multiple business transformation initiatives, creating, delivering and capturing new sources of value across multiple industries, overcoming challenges of legacy structures, processes and cultures.",
  "Conducted 40+ market reviews, target identification and due diligence projects for leading private equity and advisory firms, conducting critical analysis and delivering within high pressure timelines.",
  "Delivered 50+ acquisitions both onshore and offshore, accountable for opportunity sourcing, deal structure and integration.",
  "Experience managing stakeholder expectations throughout the lifecycle of projects in organisations ranging from 5 to 20,000+ employees.",
];

const currentPositions = ["Partner — OnetoOne Corporate Finance", "Management Consultant / MD — Strategy Edge"];
const priorConsulting = ["Management Consultant, Pacific Strategy Partners", "Management Consultant, Crescendo Partners"];
const industryExperience = ["Chief Operating Officer, TTI (interim)", "Chief Strategy & Corporate Development Officer, Ovato", "GM Transformation, Ventia", "Head of Innov8 Venture Capital, Optus / Singtel", "Head of Strategy, Innovation and M&A, Optus", "General Manager / MD, Montpelier Asia Pacific", "Operations Director, Medical Legal", "Regional Manager, Sony UK"];
const boardSeats = ["Non-Executive Director - ASX-listed Industrial Services", "Board Advisor - Private Equity Portfolio Company", "Advisory Board Member - Growth-Stage Technology Firm", "Non-Executive Director - Private Services Company"];

const supportingPoints = [
  "Delivers practical, actionable recommendations",
  "Excellent CEO and Board level communication",
  "Combines challenge with hands-on involvement",
];

function RevealEl({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function Profile() {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const boxStyle = (boxId: string) => ({
    backgroundColor: hoveredBox === boxId ? "oklch(0.245 0.072 264)" : "white",
    borderTop: `3px solid ${hoveredBox === boxId ? "oklch(0.62 0.13 258)" : "oklch(0.52 0.14 258)"}`,
    boxShadow: hoveredBox === boxId ? "0 12px 32px rgba(26,43,94,0.2)" : "0 2px 12px rgba(26,43,94,0.06)",
  });

  const textColor = (boxId: string, darkColor: string, lightColor: string) => hoveredBox === boxId ? lightColor : darkColor;

  return (
    <section id="profile" className="py-24 lg:py-32" style={{ backgroundColor: "white", paddingTop: "7rem" }}>
      <div className="container">
        <RevealEl className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="section-label">Leadership Profile</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "oklch(0.245 0.072 264)", lineHeight: 1.2, maxWidth: "36rem" }}>Brad combines consulting experience with industry exposure</h2>
        </RevealEl>

        {/* Main layout: Left sidebar + Right content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* LEFT SIDEBAR: Photo + Name + Supporting Points */}
          <RevealEl className="lg:col-span-1">
            <div className="sticky top-28">
              {/* Photo with frame */}
              <div className="relative mb-8" style={{ maxWidth: "140px" }}>
                <div className="absolute -top-3 -left-3 w-full h-full" style={{ backgroundColor: "oklch(0.245 0.072 264)", zIndex: 0 }} />
                <img src={BRAD_PHOTO} alt="Brad Loder" className="relative z-10 object-cover" style={{ aspectRatio: "3/4", objectPosition: "center top", width: "130px" }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 z-20" style={{ backgroundColor: "oklch(0.52 0.14 258)" }} />
              </div>

              {/* Name and Title */}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "oklch(0.245 0.072 264)", marginBottom: "0.25rem" }}>Brad Loder</h3>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.52 0.14 258)", marginBottom: "1.5rem" }}>Management Consultant / MD</p>

              {/* Three Supporting Points */}
              <div className="space-y-4">
                {supportingPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <div className="w-1 flex-shrink-0 mt-1" style={{ backgroundColor: "oklch(0.52 0.14 258)", minHeight: "1rem" }} />
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", fontWeight: 400, color: "oklch(0.38 0.03 264)", lineHeight: 1.65 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealEl>

          {/* RIGHT CONTENT: Consulting Background + Three Boxes */}
          <div className="lg:col-span-3 space-y-10">
            {/* Consulting Background Section */}
            <RevealEl delay={100}>
              <div className="p-8" style={{ backgroundColor: "oklch(0.975 0.006 85)", borderLeft: "4px solid oklch(0.52 0.14 258)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <Briefcase size={18} style={{ color: "oklch(0.52 0.14 258)" }} />
                  <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.245 0.072 264)" }}>Consulting Background</h4>
                </div>
                <ul className="space-y-3">
                  {consultingBackground.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "oklch(0.52 0.14 258)" }} />
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "oklch(0.38 0.03 264)", lineHeight: 1.7 }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealEl>

            {/* Three Boxes: Current Positions, Industry Experience, Board Seats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Current Positions */}
              <RevealEl delay={150}>
                <div className="p-6 h-full transition-all duration-300 cursor-pointer" style={boxStyle("current")} onMouseEnter={() => setHoveredBox("current")} onMouseLeave={() => setHoveredBox(null)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={16} color={textColor("current", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)")} />
                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: textColor("current", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), transition: "color 0.3s" }}>Current Positions</h4>
                  </div>
                  <ul className="space-y-2">
                    {currentPositions.map((pos, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full" style={{ backgroundColor: textColor("current", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), marginTop: "0.4rem" }} />
                        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: textColor("current", "oklch(0.38 0.03 264)", "rgba(255,255,255,0.85)"), transition: "color 0.3s", lineHeight: 1.5 }}>{pos}</p>
                      </li>
                    ))}
                  </ul>
                  {priorConsulting.length > 0 && (
                    <>
                      <h5 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: textColor("current", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), marginTop: "1rem", marginBottom: "0.5rem", transition: "color 0.3s" }}>Prior Consulting</h5>
                      <ul className="space-y-2">
                        {priorConsulting.map((pos, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full" style={{ backgroundColor: textColor("current", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), marginTop: "0.4rem" }} />
                            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: textColor("current", "oklch(0.38 0.03 264)", "rgba(255,255,255,0.85)"), transition: "color 0.3s", lineHeight: 1.5 }}>{pos}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </RevealEl>

              {/* Industry Experience */}
              <RevealEl delay={200}>
                <div className="p-6 h-full transition-all duration-300 cursor-pointer" style={boxStyle("industry")} onMouseEnter={() => setHoveredBox("industry")} onMouseLeave={() => setHoveredBox(null)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 size={16} color={textColor("industry", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)")} />
                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: textColor("industry", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), transition: "color 0.3s" }}>Industry Experience</h4>
                  </div>
                  <ul className="space-y-2">
                    {industryExperience.map((exp, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full" style={{ backgroundColor: textColor("industry", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), marginTop: "0.4rem" }} />
                        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: textColor("industry", "oklch(0.38 0.03 264)", "rgba(255,255,255,0.85)"), transition: "color 0.3s", lineHeight: 1.5 }}>{exp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealEl>

              {/* Board Seats */}
              <RevealEl delay={250}>
                <div className="p-6 h-full transition-all duration-300 cursor-pointer" style={boxStyle("board")} onMouseEnter={() => setHoveredBox("board")} onMouseLeave={() => setHoveredBox(null)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Award size={16} color={textColor("board", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)")} />
                    <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: textColor("board", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), transition: "color 0.3s" }}>Board Seats</h4>
                  </div>
                  <ul className="space-y-2">
                    {boardSeats.map((seat, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full" style={{ backgroundColor: textColor("board", "oklch(0.52 0.14 258)", "rgba(255,255,255,0.7)"), marginTop: "0.4rem" }} />
                        <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: textColor("board", "oklch(0.38 0.03 264)", "rgba(255,255,255,0.85)"), transition: "color 0.3s", lineHeight: 1.5 }}>{seat}</p>
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
