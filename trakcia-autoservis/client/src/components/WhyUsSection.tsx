/**
 * TRAKCIA s.r.o. — Why Choose Us Section
 * Design: Industrial Brutalism / Automotive Precision
 * Feature cards with icons, diagonal layout, diagnostic image
 */
import {
  UserCheck, Users, ScanLine, Timer, BadgeEuro, Heart
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DIAG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/diagnostics-5f5VmoNwaJZc4Tsgk8CADC.webp";

const reasons = [
  {
    icon: UserCheck,
    title: "Profesionálny prístup",
    desc: "Každé vozidlo berieme vážne. Pracujeme dôkladne, poctivo a s plnou zodpovednosťou za každú opravu.",
  },
  {
    icon: Users,
    title: "Skúsený tím",
    desc: "Náš tím tvoria certifikovaní technici s dlhoročnou praxou na vozidlách všetkých značiek.",
  },
  {
    icon: ScanLine,
    title: "Moderná diagnostika",
    desc: "Využívame najnovšie diagnostické prístroje pre presné a rýchle odhalenie každej závady.",
  },
  {
    icon: Timer,
    title: "Rýchly servis",
    desc: "Vážime si váš čas. Väčšinu opráv zvládneme v dohodnutom termíne bez zbytočného čakania.",
  },
  {
    icon: BadgeEuro,
    title: "Transparentné ceny",
    desc: "Pred každou opravou dostanete jasnú cenovú ponuku. Žiadne skryté poplatky, žiadne prekvapenia.",
  },
  {
    icon: Heart,
    title: "Individuálny prístup",
    desc: "Každý zákazník je pre nás dôležitý. Počúvame vaše potreby a hľadáme najlepšie riešenie.",
  },
];

export default function WhyUsSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="why-us" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "150ms" }}>
            <div className="relative overflow-hidden">
              <img
                src={DIAG_IMG}
                alt="Moderná diagnostika TRAKCIA"
                className="w-full h-[500px] object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.11_0.005_260/0.5)] to-transparent" />
              {/* Red vertical accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gray-50 border border-[oklch(0.48 0.18 140)/0.4] p-6 shadow-xl">
              <div className="trakcia-heading text-5xl text-green-600">01</div>
              <div className="text-xs text-gray-600 uppercase tracking-widest mt-1">Prešov</div>
              <div className="text-sm text-white font-semibold">Najlepší autoservis</div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div>
            <div className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-green-600" />
                <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">Prečo my</span>
              </div>
              <h2 className="trakcia-heading text-4xl md:text-5xl text-white">
                6 dôvodov, prečo si<br />
                <span className="text-green-600">vybrať TRAKCIA</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className={`group p-4 border border-gray-200 hover:border-[oklch(0.48 0.18 140)/0.5] hover:bg-gray-100 transition-all duration-300
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    `}
                    style={{ transitionDelay: visible ? `${200 + i * 80}ms` : "0ms" }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-[oklch(0.48 0.18 140)/0.1] border border-[oklch(0.48 0.18 140)/0.3] shrink-0 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                        <Icon size={16} className="text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="trakcia-heading text-base text-white mb-1">{reason.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
