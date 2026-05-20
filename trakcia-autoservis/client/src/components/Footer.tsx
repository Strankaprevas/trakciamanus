/**
 * TRAKCIA s.r.o. — Footer
 * Design: Industrial Brutalism / Automotive Precision
 * Dark footer, quick links, contact info, social icons, copyright
 */
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { label: "Domov", href: "#hero" },
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Prečo my", href: "#why-us" },
  { label: "Recenzie", href: "#reviews" },
  { label: "Galéria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

const services = [
  "Diagnostika vozidiel",
  "Výmena oleja a filtrov",
  "Brzdy a podvozok",
  "Pneuservis",
  "Klimatizácia",
  "Príprava na STK/EK",
  "Opravy motorov",
  "Elektronika vozidiel",
];

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.005_260)] border-t border-gray-200 relative overflow-hidden">
      {/* Carbon texture */}
      <div className="absolute inset-0 carbon-texture opacity-20 pointer-events-none" />
      {/* Red top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-1 h-8 bg-green-600 rounded-full" />
                <div className="w-1 h-6 bg-[oklch(0.48 0.18 140)/0.6] rounded-full" />
              </div>
              <div>
                <span className="trakcia-heading text-2xl text-white tracking-wider">TRAKCIA</span>
                <span className="block text-[10px] text-[oklch(0.60 0.01 140)] tracking-[0.2em] uppercase -mt-1">s.r.o. · Autoservis</span>
              </div>
            </div>
            <p className="text-sm text-[oklch(0.55_0.01_260)] leading-relaxed mb-6">
              Profesionálny autoservis a pneuservis v Prešove. Spoľahlivé opravy a servis vozidiel všetkých značiek od roku 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-200 text-[oklch(0.55_0.01_260)] hover:border-green-600 hover:text-green-600 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-200 text-[oklch(0.55_0.01_260)] hover:border-green-600 hover:text-green-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="trakcia-heading text-sm text-white mb-5 tracking-wider">Navigácia</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="flex items-center gap-2 text-sm text-[oklch(0.55_0.01_260)] hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 group-hover:scale-150 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="trakcia-heading text-sm text-white mb-5 tracking-wider">Služby</h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="flex items-center gap-2 text-sm text-[oklch(0.55_0.01_260)] hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 group-hover:scale-150 transition-transform" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="trakcia-heading text-sm text-white mb-5 tracking-wider">Kontakt</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+421514525207" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-[oklch(0.55_0.01_260)] group-hover:text-white transition-colors">+421 51 452 5207</span>
                </a>
              </li>
              <li>
                <a href="mailto:trakciapresov@gmail.com" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-[oklch(0.55_0.01_260)] group-hover:text-white transition-colors break-all">trakciapresov@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-[oklch(0.55_0.01_260)]">Jilemnického 1<br />Prešov, Slovakia</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-green-600 mt-0.5 shrink-0" />
                  <div className="text-sm text-[oklch(0.55_0.01_260)]">
                    <div>Po–Pia: 08:00–16:30</div>
                    <div>Sobota–Nedeľa: Zatvorené</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.95 0.002 140)] relative z-10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(0.55 0.01 140)]">
            © {new Date().getFullYear()} TRAKCIA s.r.o. Všetky práva vyhradené.
          </p>
          <p className="text-xs text-[oklch(0.55 0.01 140)]">
            Jilemnického 1, Prešov · IČO: TRAKCIA s.r.o.
          </p>
        </div>
      </div>
    </footer>
  );
}
