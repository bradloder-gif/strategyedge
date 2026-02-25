/* ============================================================
   TESTIMONIALS — StrategyEdge Executive Edge Design
   Client testimonials with specific positive outcomes
   ============================================================ */

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Brad's strategic insight and hands-on approach accelerated our market entry by 12 months. His ability to bridge consulting rigour with practical execution was invaluable.",
      author: "CEO, Growth-Stage Technology",
      outcome: "12-month acceleration",
      icon: "⚡",
    },
    {
      quote: "The acquisition integration programme delivered $28M in value creation through operational improvements and synergy realisation. Brad's leadership kept the team aligned throughout.",
      author: "CFO, Private Equity Portfolio Company",
      outcome: "$28M value creation",
      icon: "📈",
    },
    {
      quote: "Reduced time-to-close on M&A transactions from 8 months to 5 months through streamlined due diligence processes. His frameworks are now embedded in our standard workflow.",
      author: "Head of M&A, ASX-Listed Corporation",
      outcome: "3-month acceleration",
      icon: "⏱️",
    },
    {
      quote: "The transformation programme created a 35% improvement in operational efficiency and fundamentally changed how we approach strategic planning. Exceptional execution.",
      author: "COO, Industrial Services Company",
      outcome: "35% efficiency gain",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32"
      style={{
        backgroundColor: "oklch(0.975 0.006 85)",
        clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
        marginTop: "-3rem",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <RevealEl className="mb-16 lg:mb-20">
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
              Client Outcomes
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.245 0.072 264)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "oklch(0.4 0.05 264)",
              lineHeight: 1.75,
              maxWidth: "42rem",
            }}
          >
            Real feedback from organisations we've partnered with, highlighting the measurable impact of our strategic advisory.
          </p>
        </RevealEl>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <RevealEl key={idx} delay={idx * 100}>
              <div
                className="group relative h-full transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,43,94,0.08)",
                  padding: "2rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "oklch(0.245 0.072 264)";
                  el.style.borderColor = "oklch(0.52 0.14 258)";
                  const quoteEl = el.querySelector("[data-quote]") as HTMLElement;
                  const authorEl = el.querySelector("[data-author]") as HTMLElement;
                  const outcomeEl = el.querySelector("[data-outcome]") as HTMLElement;
                  if (quoteEl) quoteEl.style.color = "white";
                  if (authorEl) authorEl.style.color = "rgba(255,255,255,0.7)";
                  if (outcomeEl) outcomeEl.style.color = "oklch(0.62 0.13 258)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "white";
                  el.style.borderColor = "rgba(26,43,94,0.08)";
                  const quoteEl = el.querySelector("[data-quote]") as HTMLElement;
                  const authorEl = el.querySelector("[data-author]") as HTMLElement;
                  const outcomeEl = el.querySelector("[data-outcome]") as HTMLElement;
                  if (quoteEl) quoteEl.style.color = "oklch(0.4 0.05 264)";
                  if (authorEl) authorEl.style.color = "oklch(0.4 0.05 264)";
                  if (outcomeEl) outcomeEl.style.color = "oklch(0.62 0.13 258)";
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="oklch(0.62 0.13 258)"
                      color="oklch(0.62 0.13 258)"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  data-quote
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    color: "oklch(0.4 0.05 264)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                    transition: "color 0.3s",
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mb-4">
                  <p
                    data-author
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "oklch(0.4 0.05 264)",
                      transition: "color 0.3s",
                    }}
                  >
                    {testimonial.author}
                  </p>
                </div>

                {/* Outcome Badge */}
                <div
                  data-outcome
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "oklch(0.62 0.13 258)",
                    backgroundColor: "rgba(58, 107, 196, 0.08)",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "0.25rem",
                    transition: "color 0.3s",
                  }}
                >
                  {testimonial.icon} {testimonial.outcome}
                </div>
              </div>
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  );
}
