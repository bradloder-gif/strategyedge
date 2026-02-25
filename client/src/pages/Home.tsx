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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.975 0.006 85)" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Profile />
        <Testimonials />
        <ProjectImpact />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
