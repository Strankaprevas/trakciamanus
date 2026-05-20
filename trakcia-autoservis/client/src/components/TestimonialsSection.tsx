/**
 * TRAKCIA s.r.o. — Testimonials Section
 * Design: Industrial Brutalism / Automotive Precision
 * Slovak customer reviews with star ratings, auto-scrolling carousel
 */
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Marek Kováč",
    location: "Prešov",
    rating: 5,
    text: "Výborný servis! Prišiel som s problémom so svetlami, chlapci to diagnostikovali za pol hodinu a opravili ešte v ten deň. Cena bola fér, presne ako povedali. Určite sa vrátim.",
    service: "Diagnostika + oprava",
    date: "Apríl 2024",
  },
  {
    name: "Jana Horváthová",
    location: "Prešov",
    rating: 5,
    text: "Prezúvanie pneumatík vybavené rýchlo a bez čakania. Personál milý, profesionálny. Odporúčam všetkým, kto hľadá spoľahlivý pneuservis v Prešove.",
    service: "Pneuservis",
    date: "Október 2023",
  },
  {
    name: "Tomáš Baláž",
    location: "Sabinov",
    rating: 5,
    text: "Mal som problém s prevodovkou, nikde mi nevedeli povedať čo to je. V TRAKCIA to diagnostikovali presne, vysvetlili mi všetko zrozumiteľne a opravili za rozumnú cenu. Spokojný zákazník!",
    service: "Oprava prevodovky",
    date: "Február 2024",
  },
  {
    name: "Peter Šimko",
    location: "Prešov",
    rating: 5,
    text: "Príprava na STK prebehla bez problémov. Našli závady, ktoré som ani netušil, opravili ich a auto prešlo STK na prvýkrát. Profesionálny prístup, odporúčam.",
    service: "Príprava na STK",
    date: "Január 2024",
  },
  {
    name: "Lucia Marková",
    location: "Prešov",
    rating: 5,
    text: "Výmena oleja a filtrov vybavená rýchlo, za dobrú cenu. Servis je čistý, personál ochotný. Chodím sem pravidelne už 3 roky a nikdy som nebola sklamaná.",
    service: "Výmena oleja",
    date: "Marec 2024",
  },
  {
    name: "Rastislav Novák",
    location: "Lipany",
    rating: 4,
    text: "Dobrý servis, rýchla diagnostika. Mal som problém s klimatizáciou, opravili to za jeden deň. Cena zodpovedá kvalite. Budem sa vracať.",
    service: "Klimatizácia",
    date: "Máj 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? "text-[oklch(0.75_0.18_60)] fill-[oklch(0.75_0.18_60)]" : "text-[oklch(0.50 0.01 140)]"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.05);
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleCount = 3;
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(active + i) % testimonials.length]
  );

  return (
    <section id="reviews" ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 carbon-texture opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-green-600" />
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">Recenzie</span>
            <div className="w-8 h-0.5 bg-green-600" />
          </div>
          <h2 className="trakcia-heading text-4xl md:text-5xl text-white mb-4">
            Čo hovoria naši<br />
            <span className="text-green-600">zákazníci</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-[oklch(0.75_0.18_60)] fill-[oklch(0.75_0.18_60)]" />)}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-gray-600 text-sm">/ 5.0 · 200+ recenzií</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${active}-${i}`}
              className={`bg-gray-100 border border-gray-200 p-6 relative transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[oklch(0.48 0.18 140)/0.3] mb-4" />

              <StarRating rating={t.rating} />

              <p className="text-gray-700 text-sm leading-relaxed my-4 italic">
                "{t.text}"
              </p>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.location} · {t.date}</div>
                </div>
                <div className="text-xs text-green-600 font-medium uppercase tracking-wide">
                  {t.service}
                </div>
              </div>

              {/* Red accent bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[oklch(0.48 0.18 140)/0.3]" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-green-600 w-6" : "bg-[oklch(0.50 0.01 140)] w-2"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
