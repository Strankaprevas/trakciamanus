/**
 * TRAKCIA s.r.o. — Gallery Section
 * Design: Industrial Brutalism / Automotive Precision
 * Masonry-style grid with hover overlay and lightbox
 */
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const galleryItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/hero-workshop-N4tnU2m4V98eHyB3x9TZy4.webp",
    alt: "Autoservis dielňa TRAKCIA",
    label: "Naša dielňa",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/diagnostics-5f5VmoNwaJZc4Tsgk8CADC.webp",
    alt: "Diagnostika vozidiel",
    label: "Diagnostika",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/tire-service-NEjDWMuh5Lx2xL2BCryrQU.webp",
    alt: "Pneuservis",
    label: "Pneuservis",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663679410955/kUJBVMAfXMtCaMsHJF5yfr/about-team-f8eB6mYzC629TLJumzAWqo.webp",
    alt: "Tím TRAKCIA",
    label: "Náš tím",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    alt: "Oprava vozidla",
    label: "Opravy",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Motorový priestor",
    label: "Servis motora",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const { ref, visible } = useScrollReveal(0.05);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-green-600" />
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">Galéria</span>
          </div>
          <h2 className="trakcia-heading text-4xl md:text-5xl text-white">
            Pohľad do našej<br />
            <span className="text-green-600">dielne</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.alt}
              className={`relative overflow-hidden group cursor-pointer ${item.span}
                transition-all duration-700
                ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[oklch(0_0_0/0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn size={28} className="text-white mx-auto mb-2" />
                  <span className="text-white text-sm font-bold uppercase tracking-wide">{item.label}</span>
                </div>
              </div>
              {/* Red bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-[oklch(0_0_0/0.95)] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-green-600 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
