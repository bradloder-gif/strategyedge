/* ============================================================
   NAVBAR — StrategyEdge Executive Edge Design
   Transparent on hero, transitions to solid navy on scroll
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Profile", href: "#profile" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "oklch(0.245 0.072 264)" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.25)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-0 group"
          >
            <span
              className="font-label text-white text-xl tracking-widest"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            >
              <span style={{ color: "white" }}>STRATEGY</span>
              <span style={{ color: "oklch(0.62 0.13 258)" }}>EDGE</span>
            </span>
            <span
              className="ml-3 text-xs font-ui text-white/50 hidden sm:block"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, letterSpacing: "0.08em" }}
            >
              Consulting | Advisory
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-white/80 hover:text-white font-ui text-sm font-medium tracking-wide transition-colors duration-200 group"
                style={{ fontFamily: "'Barlow', sans-serif", background: "none", border: "none" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: "oklch(0.62 0.13 258)" }} />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
              style={{ padding: "0.6rem 1.5rem" }}
            >
              <span>Get in Touch</span>
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "oklch(0.245 0.072 264)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-white py-3 px-2 font-ui text-sm font-medium tracking-wide transition-colors border-b"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary mt-3 justify-center"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
