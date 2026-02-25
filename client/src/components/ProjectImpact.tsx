/* ============================================================
   PROJECT IMPACT SECTION
   Case studies showcasing real consulting outcomes
   ============================================================ */

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  icon: React.ReactNode;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    category: "M&A ADVISORY",
    categoryLabel: "M&A Advisory",
    title: "Portfolio Consolidation & Value Unlock",
    icon: <TrendingUp className="w-8 h-8" />,
    challenge:
      "Multi-portfolio holding company with fragmented operations across 8 business units, facing margin pressure and limited synergy realisation.",
    solution:
      "Developed comprehensive consolidation strategy, identified cross-portfolio synergies, structured integration roadmap, and led post-acquisition integration across all units.",
    results: [
      "$45M in annualised cost synergies identified and realised",
      "18-month integration completed 6 months ahead of schedule",
      "EBITDA margin improvement of 320 basis points",
    ],
  },
  {
    id: "2",
    category: "BUSINESS TRANSFORMATION",
    categoryLabel: "Business Transformation",
    title: "Operational Excellence & Digital Transformation",
    icon: <Zap className="w-8 h-8" />,
    challenge:
      "Regional manufacturing business with legacy systems, high operational costs, and limited digital capability facing competitive pressure.",
    solution:
      "Led end-to-end transformation including process redesign, supply chain optimisation, digital systems implementation, and organisational restructuring.",
    results: [
      "Operating costs reduced by 28% within 24 months",
      "Production efficiency improved by 35%",
      "Digital adoption across all operational functions",
    ],
  },
  {
    id: "3",
    category: "CORPORATE STRATEGY",
    categoryLabel: "Corporate Strategy",
    title: "Market Entry & Growth Strategy",
    icon: <Users className="w-8 h-8" />,
    challenge:
      "ASX-listed company seeking to enter adjacent markets with unclear competitive positioning and limited growth runway in core business.",
    solution:
      "Conducted comprehensive market analysis, identified high-potential adjacent segments, developed go-to-market strategy, and structured strategic partnerships.",
    results: [
      "Entered 3 new markets with $120M+ revenue potential",
      "Secured strategic partnerships with market leaders",
      "Revenue growth trajectory increased from 5% to 18% CAGR",
    ],
  },
  {
    id: "4",
    category: "PRIVATE EQUITY",
    categoryLabel: "Private Equity",
    title: "Acquisition Integration & Value Creation",
    icon: <TrendingUp className="w-8 h-8" />,
    challenge:
      "PE-backed platform company requiring rapid integration of 3 bolt-on acquisitions while maintaining operational momentum.",
    solution:
      "Structured 100-day integration plan, identified value levers across all acquisitions, implemented operational improvements, and managed stakeholder alignment.",
    results: [
      "Completed 3 acquisitions in parallel with zero operational disruption",
      "$28M in value creation from operational improvements",
      "Platform EBITDA grew 42% over 18 months",
    ],
  },
];

export default function ProjectImpact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      style={{
        backgroundColor: "oklch(0.975 0.006 85)",
        padding: "6rem 2rem",
        position: "relative",
      }}
    >
      {/* Diagonal divider top */}
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: 0,
          right: 0,
          height: "60px",
          background: "oklch(0.15 0.05 258)",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "oklch(0.52 0.14 258)",
              marginBottom: "1rem",
            }}
          >
            PROVEN IMPACT
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "oklch(0.15 0.05 258)",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Real Results from Complex Challenges
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "oklch(0.4 0.05 258)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Every engagement is focused on delivering measurable, sustainable value. Here are examples of transformative outcomes we've achieved.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              style={{
                backgroundColor: "oklch(0.2 0.04 258)",
                borderRadius: "0.5rem",
                overflow: "hidden",
                border: "1px solid oklch(0.3 0.04 258)",
              }}
            >
              {/* Card Header with Category */}
              <div
                style={{
                  padding: "2rem",
                  borderBottom: "1px solid oklch(0.3 0.04 258)",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "oklch(0.52 0.14 258 / 0.15)",
                    borderRadius: "0.5rem",
                    color: "oklch(0.52 0.14 258)",
                    flexShrink: 0,
                  }}
                >
                  {study.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "oklch(0.52 0.14 258)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {study.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.2,
                    }}
                  >
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {/* Left: Challenge & Solution */}
                <div>
                  <div style={{ marginBottom: "2rem" }}>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "oklch(0.52 0.14 258)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      CHALLENGE
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "oklch(0.7 0.04 258)",
                        lineHeight: 1.6,
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "oklch(0.52 0.14 258)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      SOLUTION
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "oklch(0.7 0.04 258)",
                        lineHeight: 1.6,
                      }}
                    >
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Right: Results */}
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "oklch(0.52 0.14 258)",
                      marginBottom: "1rem",
                    }}
                  >
                    RESULTS
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle2
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "oklch(0.52 0.14 258)",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "oklch(0.7 0.04 258)",
                            lineHeight: 1.5,
                          }}
                        >
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Diagonal divider bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: 0,
          right: 0,
          height: "60px",
          background: "oklch(0.15 0.05 258)",
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
