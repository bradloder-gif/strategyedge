/* ============================================================
   HERO — StrategyEdge Executive Edge Design
   Full-viewport hero with diagonal clip-path bottom edge
   Dark background → white text (high contrast)
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/gVybYq4Vjpdbw9fgkcKQlM/sandbox/JYS0Dl54xMrj7DyIEQOcMa-img-1_1771894483000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1Z5YllxNFZqcGRidzlmZ2tjS1FsTS9zYW5kYm94L0pZUzBEbDU0eE1yajdEeUlFUU9jTWEtaW1nLTFfMTc3MTg5NDQ4MzAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DkRAP9-KxKFkQ8Jpxx6iKF-nTDdDjcMDK2TGG3tPEalE82lSYH3F76Pgg-UPd5aZDqMBJDoVqS0v3m2y2KOHW~edHbPPJhi4TQeP9nUlzf45hFbu2rneQLGY5fZhK5zmEAkOaqvRpbO88AYqAkBKvIwsvRlEdvQTbpbYH5piahq0JSYEbzByr4FlCOSZL6vEATyOdyiwn5uktSNAKSV4f4noIZptX1On1DBTlehWw2PDcLVqSXmjbWsqes0vSXIhT1VCoj5R8BXz7l4~Eui5m~gnIM83SyjmDXj6AV5TlyRMWmeg2hRj~bvgSDg3nDY~wnM0axMC-ihi8DCT62037w__";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
        marginBottom: "-4rem",
        paddingBottom: "8rem",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(26,43,94,0.88) 0%, rgba(26,43,94,0.70) 50%, rgba(26,43,94,0.55) 100%)",
        }}
      />

      {/* Accent corner square (brand motif from PPT) */}
      <div
        className="absolute top-0 right-0 w-16 h-16"
        style={{ backgroundColor: "oklch(0.245 0.072 264)", opacity: 0.9 }}
      />

      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px" style={{ backgroundColor: "oklch(0.62 0.13 258)" }} />
            <span
              className="section-label"
              style={{ color: "oklch(0.72 0.13 258)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.2em", fontSize: "0.7rem" }}
            >
              Consulting · Advisory
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            High-Impact Strategy,
            <br />
            <em style={{ color: "oklch(0.72 0.13 258)", fontStyle: "italic" }}>Delivered Flexibly</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/75 mb-10 max-w-xl"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1.125rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Combining 20+ years of consulting expertise with deep industry experience to deliver practical, actionable recommendations that drive real results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              <span>Engage with Us</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.querySelector("#profile")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-white"
            >
              <span>View Profile</span>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-8 mt-16 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "50+", label: "Acquisitions Delivered" },
              { value: "40+", label: "Market Reviews" },
              { value: "15+", label: "Industry Sectors" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-white font-display"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/50 mt-1"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        style={{ background: "none", border: "none" }}
      >
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
