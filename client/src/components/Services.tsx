/* ============================================================
   SERVICES — StrategyEdge Executive Edge Design
   Dark navy background with diagonal top edge
   ============================================================ */

import { useEffect, useRef } from "react";
import { BarChart2, Search, GitMerge, Zap, Globe, Shield } from "lucide-react";

const TEXTURE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/gVybYq4Vjpdbw9fgkcKQlM/sandbox/JYS0Dl54xMrj7DyIEQOcMa-img-3_1771894477000_na1fn_YWJvdXQtdGV4dHVyZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1Z5YllxNFZqcGRidzlmZ2tjS1FsTS9zYW5kYm94L0pZUzBEbDU0eE1yajdEeUlFUU9jTWEtaW1nLTNfMTc3MTg5NDQ3NzAwMF9uYTFmbl9ZV0p2ZFhRdGRHVjRkSFZ5WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=akKn5oHeQFSfLUWVunjPDfOqRWhsrbptn2oNfpYDYWztp3Kl8CiShUaUabc3dZYllr-qNiAAYFAJrapqNY1UTB25p4x0pY0FXTEigSRg6H7pvcxcWFl7Mr~QWr1putyFxeIeZGEoKkNGyn62cPXD89iw64iFAE-aGwwug2L--ku7XuTx~ygttGHK8ZTjbzBLLUBbkG40Fih-Xhes7s0Lp~lfKsTABA5n1xRSOJ0Mfueg4CdEs3YYORqGWxI58kuystN77MOYpQtDkmcnHpagg2YABEidF7PY-B~h2AHMRpWZ9O9iCUtkAykj07RBNdxnnCq~Iw6dOs0Nr2UtOq6Qyw__"; // dark navy texture

const services = [
  {
    icon: BarChart2,
    title: "Corporate Strategy",
    body: "Developing and refining corporate strategy, identifying growth opportunities, and defining the strategic direction for organisations at critical inflection points.",
  },
  {
    icon: GitMerge,
    title: "Mergers & Acquisitions",
    body: "End-to-end M&A support including target identification, due diligence, deal structuring, and post-acquisition integration. 40+ transactions delivered.",
  },
  {
    icon: Search,
    title: "Market Reviews & Due Diligence",
    body: "Rigorous market analysis and commercial due diligence for private equity and corporate clients, delivering critical insights under demanding timelines.",
  },
  {
    icon: Zap,
    title: "Business Transformation",
    body: "Designing and implementing transformation programmes that create and capture new sources of value, overcoming legacy structures, processes, and cultures.",
  },
  {
    icon: Globe,
    title: "Growth & Innovation",
    body: "Identifying and pursuing growth opportunities through innovation, new market entry, and strategic partnerships across domestic and international markets.",
  },
  {
    icon: Shield,
    title: "Interim Executive Advisory",
    body: "Providing experienced interim executive leadership and advisory support at COO, CSO, and MD level during periods of transition or accelerated change.",
  },
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
  return <div ref={ref} className="fade-up">{children}</div>;
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: `url(${TEXTURE_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        marginTop: "-3rem",
        marginBottom: "-3rem",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(26,43,94,0.97) 0%, rgba(26,43,94,0.93) 100%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="fade-up mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.62 0.13 258)" }} />
              <span
                className="section-label"
                style={{ color: "oklch(0.72 0.13 258)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.2em", fontSize: "0.7rem" }}
              >
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Services & Capabilities
            </h2>
          </div>
          <p
            className="max-w-sm"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            Flexible engagement models tailored to your organisation's needs — from discrete advisory to embedded execution.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          {services.map((service, i) => (
            <RevealCard key={service.title} delay={i * 80}>
              <div
                className="p-8 h-full group transition-colors duration-300"
                style={{ backgroundColor: "rgba(26,43,94,0.6)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(58,107,196,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(26,43,94,0.6)")}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(0.52 0.14 258)" }}
                  >
                    <service.icon size={17} color="white" />
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "white",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h4>
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.75,
                  }}
                >
                  {service.body}
                </p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
