"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/og-logo.png"
                alt="OG Insurance Services"
                width={58}
                height={58}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-bold leading-tight">OG Insurance Services</p>
                <p className="text-xs text-white/50">Oscar Garcia</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:9563350488"
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.contact.directContact.phone}
              </a>
              <a
                href="mailto:ogarcia@tpension.com"
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.directContact.email}
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#medicare" className="text-sm text-white/70 hover:text-white transition-colors">
                  Medicare
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.insurance.products.termLife.title}
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.insurance.products.wholeLife.title}
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.insurance.products.iul.title}
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.insurance.products.finalExpense.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t.footer.contactUs}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 max-w-2xl text-center md:text-left">
            {t.footer.disclaimer}
          </p>
          <p className="text-xs text-white/40 shrink-0">
            &copy; {year} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
