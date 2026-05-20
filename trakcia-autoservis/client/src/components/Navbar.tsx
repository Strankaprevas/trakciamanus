/**
 * TRAKCIA s.r.o. — Navbar Component
 * Design: White & Green / Modern Professional
 * Sticky white nav, green accent, mobile hamburger
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Domov", href: "#hero" },
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Prečo my", href: "#why-us" },
  { label: "Recenzie", href: "#reviews" },
  { label: "Galéria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100"
            : "bg-white/80 backdrop-blur-sm border-b border-green-50"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center gap-1">
              <div className="w-1 h-8 bg-green-600 rounded-full" />
              <div className="w-1 h-6 bg-green-600/60 rounded-full" />
            </div>
            <div>
              <span className="trakcia-heading text-2xl text-green-700 tracking-wider">TRAKCIA</span>
              <span className="block text-[10px] text-green-600 tracking-[0.2em] uppercase font-medium -mt-1">
                s.r.o. · Autoservis
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-600 uppercase tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+421514525207"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold uppercase tracking-wide transition-all duration-200 active:scale-95"
            >
              <Phone size={14} />
              <span>Zavolať</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-green-100">
            <span className="trakcia-heading text-xl text-green-700">MENU</span>
            <button onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-600">
              <X size={20} />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 uppercase text-sm font-semibold tracking-wide transition-all duration-150 group"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 group-hover:scale-150 transition-transform" />
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-6 border-t border-green-100">
            <a
              href="tel:+421514525207"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-sm"
            >
              <Phone size={16} />
              +421 51 452 5207
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
