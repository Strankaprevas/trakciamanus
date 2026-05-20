/**
 * TRAKCIA s.r.o. — Contact Section
 * Design: Industrial Brutalism / Automotive Precision
 * Google Maps, contact form, click-to-call, opening hours
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Navigation, Send, CheckCircle } from "lucide-react";
import { MapView } from "@/components/Map";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal(0.05);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-600 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-green-600" />
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em]">Kontakt</span>
          </div>
          <h2 className="trakcia-heading text-4xl md:text-5xl text-white">
            Kontaktujte nás<br />
            <span className="text-green-600">alebo navštívte</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info + map */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "150ms" }}>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:+421514525207"
                className="flex items-start gap-4 p-4 bg-gray-100 border border-gray-200 hover:border-[oklch(0.48 0.18 140)/0.5] hover:bg-[oklch(0.48 0.18 140)/0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-600 shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Telefón</div>
                  <div className="text-white font-semibold group-hover:text-green-600 transition-colors">+421 51 452 5207</div>
                </div>
              </a>

              <a
                href="mailto:trakciapresov@gmail.com"
                className="flex items-start gap-4 p-4 bg-gray-100 border border-gray-200 hover:border-[oklch(0.48 0.18 140)/0.5] hover:bg-[oklch(0.48 0.18 140)/0.05] transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-600 shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-white font-semibold text-sm group-hover:text-green-600 transition-colors break-all">trakciapresov@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-gray-100 border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-green-600 shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Adresa</div>
                  <div className="text-white font-semibold">Jilemnického 1</div>
                  <div className="text-gray-600 text-sm">Prešov, Slovakia</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-100 border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-green-600 shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-1">Pracovná doba</div>
                  <div className="text-white font-semibold text-sm">Po–Pia: 08:00–16:30</div>
                  <div className="text-gray-600 text-sm">Sobota–Nedeľa: Zatvorené</div>
                </div>
              </div>
            </div>

            {/* Navigation CTA */}
            <a
              href="https://maps.google.com/?q=Jilemnického+1,+Prešov,+Slovakia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 mb-6 w-fit"
            >
              <Navigation size={16} />
              Navigovať k nám
            </a>

            {/* Map */}
            <div className="h-64 border border-gray-200 overflow-hidden">
              <MapView
                initialCenter={{ lat: 48.9985, lng: 21.2392 }}
                initialZoom={16}
                className="h-64"
                onMapReady={(map) => {
                  const pos = { lat: 48.9985, lng: 21.2392 };
                  map.setOptions({
                    styles: [
                      { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
                      { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
                      { elementType: "labels.text.fill", stylers: [{ color: "#9ba3ae" }] },
                      { featureType: "road", elementType: "geometry", stylers: [{ color: "#2d2d44" }] },
                      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212136" }] },
                      { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3d3d5c" }] },
                      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d0d1a" }] },
                      { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1e1e30" }] },
                    ],
                  });
                  new google.maps.Marker({
                    position: pos,
                    map,
                    title: "TRAKCIA s.r.o.",
                  });
                }}
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "300ms" }}>
            <div className="bg-gray-100 border border-gray-200 p-8">
              <h3 className="trakcia-heading text-2xl text-white mb-6">Objednajte sa online</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-green-600 mb-4" />
                  <h4 className="trakcia-heading text-2xl text-white mb-2">Správa odoslaná!</h4>
                  <p className="text-gray-600">Ozveme sa vám čo najskôr. Ďakujeme za dôveru!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1.5">Meno *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 focus:border-green-600 text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[oklch(0.55 0.01 140)]"
                        placeholder="Vaše meno"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1.5">Telefón *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 focus:border-green-600 text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[oklch(0.55 0.01 140)]"
                        placeholder="+421 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 focus:border-green-600 text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[oklch(0.55 0.01 140)]"
                      placeholder="vas@email.sk"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1.5">Typ servisu</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 focus:border-green-600 text-white px-4 py-3 text-sm outline-none transition-colors"
                    >
                      <option value="">Vyberte službu...</option>
                      <option value="diagnostika">Diagnostika vozidiel</option>
                      <option value="olej">Výmena oleja a filtrov</option>
                      <option value="brzdy">Brzdy a podvozok</option>
                      <option value="pneuservis">Pneuservis</option>
                      <option value="klima">Klimatizácia</option>
                      <option value="stk">Príprava na STK/EK</option>
                      <option value="motor">Opravy motorov</option>
                      <option value="elektronika">Elektronika vozidiel</option>
                      <option value="ine">Iné</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 uppercase tracking-widest mb-1.5">Správa</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white border border-gray-200 focus:border-green-600 text-white px-4 py-3 text-sm outline-none transition-colors resize-none placeholder:text-[oklch(0.55 0.01 140)]"
                      placeholder="Popíšte problém alebo požiadavku..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
                  >
                    {submitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {submitting ? "Odosielam..." : "Odoslať správu"}
                  </button>

                  <p className="text-xs text-[oklch(0.60 0.01 140)] text-center">
                    Odpovieme do 24 hodín v pracovné dni.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
