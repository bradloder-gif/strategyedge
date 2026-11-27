/* ============================================================
   HOME PAGE — StrategyEdge Executive Edge Design
   Assembles all sections in order
   ============================================================ */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import ProjectImpact from "@/components/ProjectImpact";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import PrivacyStatement from "@/components/PrivacyStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.975 0.006 85)" }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold"
        style={{
          fontFamily: "'Barlow', sans-serif",
          backgroundColor: "white",
          color: "oklch(0.245 0.072 264)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Profile />
        <Testimonials />
        <ProjectImpact />
        <Clients />
        <Contact />
        <PrivacyStatement />
      </main>
      <Footer />
    </div>
  );
}
