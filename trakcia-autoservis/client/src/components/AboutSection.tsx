/**
 * TRAKCIA s.r.o. — About Section
 * Design: Industrial Brutalism / Automotive Precision
 * Asymmetric image-text split, stat counters, Slovak copy
 */
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/about-team-f8eB6mYzC629TLJumzAWqo.webp";

const stats = [
  { value: 15, suffix: "+", label: "Rokov skúseností" },
  { value: 5000, suffix: "+", label: "Spokojných zákazníkov" },
  { value: 98, suffix: "%", label: "Spokojnosť zákazníkov" },
  { value: 2, suffix: "", label: "Certifikovaní technici" },
];

function useCounter(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, 1800, active);
  return (
    <div className="text-center">
      <div className="trakcia-heading text-4xl md:text-5xl text-green-600">
        {count.toLocaleString("sk-SK")}{suffix}
      </div>
      <div className="text-xs text-gray-600 uppercase tracking-widest mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, visible, animated } = useScrollReveal(0.05);

  const highlights = [
    "Profesionálny prístup ku každému vozidlu",
    "Moderné diagnostické vybavenie",
    "Transparentné ceny bez skrytých poplatkov",
    "Servis všetkých značiek vozidiel",
    "Rýchle a spoľahlivé opravy",
    "Individuálny prístup ku každému zákazníkovi",
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-texture opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-green-600" />
          <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">O nás</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative">
              {/* Red accent border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-green-600 z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-green-600 z-10" />
              <img
                src={ABOUT_IMG}
                alt="Tím TRAKCIA autoservis"
                className="w-full h-[420px] object-cover object-center"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-green-600 px-5 py-3 z-20">
                <div className="trakcia-heading text-3xl text-white">15+</div>
                <div className="text-xs text-white/80 uppercase tracking-widest">Rokov v odbore</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <h2 className="trakcia-heading text-4xl md:text-5xl text-white mb-6">
              Váš spoľahlivý<br />
              <span className="text-green-600">partner</span> pre servis
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Spoločnosť <strong className="text-white">TRAKCIA s.r.o.</strong> pôsobí na trhu autoservisu v Prešove
              viac ako 15 rokov. Naším cieľom je poskytovať profesionálne a spoľahlivé
              opravy vozidiel všetkých značiek — od bežnej údržby až po komplexné opravy motorov
              a elektroniky.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Zakladáme si na <strong className="text-white">poctivej práci, modernej diagnostike</strong> a
              otvorenom prístupe k zákazníkovi. Každý zákazník dostane jasné informácie o stave
              svojho vozidla a reálnu cenovú ponuku — bez prekvapení, bez skrytých poplatkov.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-800">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "500ms" }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={animated} />
          ))}
        </div>
      </div>
    </section>
  );
}
