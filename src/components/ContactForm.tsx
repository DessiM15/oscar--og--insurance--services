"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CALENDAR_LINK } from "@/lib/constants";

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <span className="text-sm font-semibold text-[#1B2A4A] uppercase tracking-widest">
              {t.contact.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mt-3 mb-4">
              {t.contact.headline}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {t.contact.subheadline}
            </p>

            {/* Direct Contact */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {t.contact.directContact.or}
              </p>

              <a
                href="tel:9563350488"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1B2A4A]/20 transition-all group"
              >
                <div className="p-3 bg-[#1B2A4A]/5 rounded-xl text-[#1B2A4A] group-hover:bg-[#1B2A4A]/10 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-semibold text-[#1B2A4A]">
                    {t.contact.directContact.phone}
                  </p>
                </div>
              </a>

              <a
                href="mailto:ogarcia@tpension.com"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1B2A4A]/20 transition-all group"
              >
                <div className="p-3 bg-[#1B2A4A]/5 rounded-xl text-[#1B2A4A] group-hover:bg-[#1B2A4A]/10 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-[#1B2A4A]">
                    {t.contact.directContact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="p-3 bg-[#1B2A4A]/5 rounded-xl text-[#1B2A4A]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  <p className="text-base font-semibold text-[#1B2A4A]">
                    {t.about.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Calendly Booking Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#1B2A4A]/5 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#1B2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1B2A4A] mb-3">
              {t.contact.success.bookingLabel}
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t.contact.success.scheduleMessage}
            </p>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1B2A4A] text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3f6e] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              {t.contact.success.scheduleButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
