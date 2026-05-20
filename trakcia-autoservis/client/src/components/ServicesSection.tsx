/**
 * TRAKCIA s.r.o. — Services Section
 * Design: Industrial Brutalism / Automotive Precision
 * 9 service cards with icons, hover reveal, staggered entrance
 */
import {
  Cpu, Droplets, Disc, CircleDot, Wind, ClipboardCheck,
  Wrench, Zap, Car
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Cpu, title: "Diagnostika vozidiel", desc: "Moderná počítačová diagnostika chybových kódov a stavu celého vozidla. Rýchle a presné výsledky.", highlight: true },
  { icon: Droplets, title: "Výmena oleja a filtrov", desc: "Pravidelná výmena motorového oleja, vzduchového, olejového a palivového filtra podľa predpisov výrobcu.", highlight: false },
  { icon: Disc, title: "Brzdy a podvozok", desc: "Kontrola, oprava a výmena brzdových platničiek, kotúčov, tlmičov a celého podvozku vozidla.", highlight: false },
  { icon: CircleDot, title: "Pneuservis", desc: "Prezúvanie, vyvažovanie, oprava defektov a skladovanie pneumatík. Letné aj zimné pneumatiky.", highlight: true },
  { icon: Wind, title: "Klimatizácia", desc: "Plnenie, dezinfekcia a servis klimatizácie. Kontrola tesnosti a výmena filtrov kabíny.", highlight: false },
  { icon: ClipboardCheck, title: "Príprava na STK/EK", desc: "Komplexná príprava vozidla na technickú a emisnú kontrolu. Odstraňujeme závady pred STK.", highlight: false },
  { icon: Wrench, title: "Opravy motorov", desc: "Generálne opravy, výmena rozvodov, hlavy valcov, tesnení a ďalších komponentov motora.", highlight: false },
  { icon: Zap, title: "Elektronika vozidiel", desc: "Oprava a programovanie riadiacich jednotiek, opravy elektrickej inštalácie a senzorov.", highlight: false },
  { icon: Car, title: "Servis všetkých značiek", desc: "Opravujeme vozidlá všetkých európskych, ázijských aj amerických značiek bez obmedzenia.", highlight: true },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-green-600" />
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">Naše služby</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="trakcia-heading text-4xl md:text-5xl text-white max-w-lg">
              Komplexný servis<br />
              <span className="text-green-600">pre vaše vozidlo</span>
            </h2>
            <p className="text-gray-600 max-w-sm text-sm">
              Poskytujeme kompletný servis vozidiel — od pravidelnej údržby až po náročné opravy.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-gray-100 border border-gray-200 p-6 hover:border-[oklch(0.48 0.18 140)/0.6] hover:bg-[oklch(0.17_0.005_260)] transition-all duration-300 cursor-default overflow-hidden
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${service.highlight ? "ring-1 ring-[oklch(0.48 0.18 140)/0.3]" : ""}
                `}
                style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
              >
                {/* Red corner accent on hover */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-green-600 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[oklch(0.48 0.18 140)/0.1] border border-[oklch(0.48 0.18 140)/0.3] mb-4 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                  <Icon size={22} className="text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="trakcia-heading text-xl text-white mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-600 group-hover:w-full transition-all duration-400" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
          >
            Nezáväzná konzultácia
          </a>
        </div>
      </div>
    </section>
  );
}
