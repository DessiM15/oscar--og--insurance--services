"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.medicare, href: "#medicare" },
    { label: t.nav.insurance, href: "#insurance" },
    { label: t.nav.dental, href: "#dental" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <Image
              src="/insurance-solutions-logo.png"
              alt="OG Insurance Solutions"
              width={130}
              height={130}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#1B2A4A] leading-tight">
                OG Insurance
              </p>
              <p className="text-xs text-gray-500 leading-tight">Solutions</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1B2A4A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-gray-500 hover:text-[#1B2A4A] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              {t.language.toggle}
            </button>
            <a
              href="tel:9563350488"
              className="text-sm font-medium text-[#1B2A4A] hover:text-[#2a3f6e] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.contact.directContact.phone}
            </a>
            <a
              href="#contact"
              className="bg-[#1B2A4A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2a3f6e] transition-colors shadow-md"
            >
              {t.nav.getQuote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-[#1B2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#1B2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-[#1B2A4A] py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2" />
              <button
                onClick={() => { toggleLanguage(); setMobileOpen(false); }}
                className="text-base font-medium text-gray-500 hover:text-[#1B2A4A] py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                {t.language.toggle}
              </button>
              <a
                href="tel:9563350488"
                className="text-base font-medium text-[#1B2A4A] py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.contact.directContact.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#1B2A4A] text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-[#2a3f6e] transition-colors text-center shadow-md"
              >
                {t.nav.getQuote}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
