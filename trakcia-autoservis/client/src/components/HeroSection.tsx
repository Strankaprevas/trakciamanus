/**
 * TRAKCIA s.r.o. — Hero Section
 * Design: White & Green / Modern Professional
 * Full-bleed cinematic hero with parallax, bold headings, green CTAs, trust badges
 */
import { useEffect, useRef, useState } from "react";
import { Phone, Calendar, ChevronDown, Shield, Zap, Award } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/hero-workshop-N4tnU2m4V98eHyB3x9TZy4.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_IMG}
          alt="TRAKCIA autoservis dielňa"
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
        />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20" />

      {/* Green accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Section label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-8 h-0.5 bg-green-400" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-[0.3em]">
              Prešov · Jilemnického 1
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`trakcia-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            Profesionálny
            <br />
            <span className="text-green-400">Autoservis</span>
            <br />
            v Prešove
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-white/80 max-w-xl mb-8 font-light transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "350ms" }}
          >
            Spoľahlivé opravy, diagnostika a servis vozidiel všetkých značiek.
            Kvalita, ktorej môžete dôverovať.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="tel:+421514525207"
              className="flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95 shadow-[0_4px_24px_rgba(22,163,74,0.4)]"
            >
              <Phone size={18} />
              Zavolať teraz
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              className="flex items-center gap-3 px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
            >
              <Calendar size={18} />
              Objednať servis
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "650ms" }}
          >
            {[
              { icon: Award, label: "15+ rokov skúseností" },
              { icon: Zap, label: "Rýchla diagnostika" },
              { icon: Shield, label: "Záruka na práce" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center border border-green-400/50 bg-green-600/20">
                  <Icon size={14} className="text-green-300" />
                </div>
                <span className="text-xs text-white/90 font-medium uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </button>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
    </section>
  );
}
