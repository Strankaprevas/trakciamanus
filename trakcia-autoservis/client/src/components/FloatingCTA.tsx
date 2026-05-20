/**
 * TRAKCIA s.r.o. — Floating CTA
 * Design: Industrial Brutalism / Automotive Precision
 * Mobile floating call button + appointment popup modal
 */
import { useState, useEffect } from "react";
import { Phone, X, Calendar, MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Show popup banner after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBanner(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating call button (mobile) */}
      <a
        href="tel:+421514525207"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-[0_4px_24px_oklch(0.45_0.22_25/0.5)] active:scale-95 transition-all duration-200"
        aria-label="Zavolať"
      >
        <Phone size={22} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.48 0.18 140)/0.4]" />
      </a>

      {/* Desktop floating action button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-sm shadow-[0_4px_24px_oklch(0.45_0.22_25/0.4)] active:scale-95 transition-all duration-200"
        aria-label="Objednať servis"
      >
        <Calendar size={18} />
        Objednať servis
      </button>

      {/* Delayed banner (bottom) */}
      {showBanner && !showPopup && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-50 border-t border-[oklch(0.48 0.18 140)/0.4] p-4 shadow-2xl flex items-center justify-between gap-4 md:hidden">
          <div className="flex items-center gap-3">
            <MessageSquare size={20} className="text-green-600 shrink-0" />
            <span className="text-sm text-white font-medium">Potrebujete servis? Zavolajte nám!</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+421514525207"
              className="px-4 py-2 bg-green-600 text-white text-xs font-bold uppercase tracking-wide"
            >
              Zavolať
            </a>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-600 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Appointment popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[100] bg-[oklch(0_0_0/0.7)] backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-gray-50 border border-gray-200 p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="trakcia-heading text-2xl text-white">Rýchly kontakt</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-600 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Kontaktujte nás telefonicky alebo nás navštívte priamo v dielni na adrese Jilemnického 1, Prešov.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+421514525207"
                className="flex items-center justify-center gap-3 py-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
              >
                <Phone size={18} />
                +421 51 452 5207
              </a>
              <button
                onClick={() => {
                  setShowPopup(false);
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-3 py-4 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold uppercase tracking-wide text-sm transition-all duration-200 active:scale-95"
              >
                <Calendar size={18} />
                Online objednávka
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-[oklch(0.60 0.01 140)]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Pracovná doba: Po–Pia 08:00–16:30
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
