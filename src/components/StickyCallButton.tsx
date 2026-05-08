"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyCallButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop: Bottom-right floating buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 animate-fadeIn">
        <a
          href="#contact"
          className="bg-white text-[#1B2A4A] px-5 py-3 rounded-full font-semibold shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t.stickyCta.quote}
        </a>
        <a
          href="tel:9563350488"
          className="bg-[#1B2A4A] text-white px-5 py-3 rounded-full font-semibold shadow-xl hover:bg-[#2a3f6e] hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t.stickyCta.call}
        </a>
      </div>

      {/* Mobile: Bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-3 flex gap-3 animate-slideUp">
        <a
          href="#contact"
          className="flex-1 bg-white text-[#1B2A4A] py-3 rounded-full font-semibold border-2 border-[#1B2A4A] text-center text-sm hover:bg-[#1B2A4A]/5 transition-colors"
        >
          {t.stickyCta.quote}
        </a>
        <a
          href="tel:9563350488"
          className="flex-1 bg-[#1B2A4A] text-white py-3 rounded-full font-semibold text-center text-sm hover:bg-[#2a3f6e] transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t.stickyCta.call}
        </a>
      </div>
    </>
  );
}
