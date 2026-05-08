"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual Side */}
          <div className="relative">
            <div className="bg-[#1B2A4A] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                {/* Logo */}
                <div className="mb-8">
                  <Image
                    src="/og-logo.png"
                    alt="OG Insurance Services"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-white/20"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-2">{t.about.headline}</h3>
                <p className="text-white/60 text-sm font-medium mb-6">
                  {t.about.title}
                </p>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-white/80">{t.about.location}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <span className="text-sm text-white/80">{t.about.license}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-white/80">{t.contact.directContact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-sm font-semibold text-[#1B2A4A] uppercase tracking-widest">
              {t.about.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mt-3 mb-6">
              {t.about.headline}
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {t.about.bio}
            </p>

            <blockquote className="border-l-4 border-[#1B2A4A] pl-6 py-2 mb-8">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;{t.about.mission}&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-[#1B2A4A]">
                — Oscar Garcia
              </footer>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#1B2A4A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2a3f6e] transition-colors shadow-md"
              >
                {t.nav.getQuote}
              </a>
              <a
                href="tel:9563350488"
                className="inline-flex items-center justify-center border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 rounded-full font-semibold hover:bg-[#1B2A4A]/5 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.nav.callNow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
