"use client";

import { useState, useRef, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY_URL = "https://calendly.com/ogarcia-19/new-meeting-with-oscar";

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calendlyParams, setCalendlyParams] = useState("");
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const service = (formData.get("service") as string) || "";
    const message = (formData.get("message") as string) || "";

    // Build mailto link with form data
    const subject = `New Lead: ${service}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Interest: ${service}`,
      message ? `\nMessage:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoLink = `mailto:ogarcia@tpension.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");

    // Build Calendly URL params for pre-filling
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (email) params.set("email", email);
    setCalendlyParams(params.toString());

    setLoading(false);
    setSubmitted(true);

    // Scroll to the booking widget after a short delay
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const calendlySrc = calendlyParams
    ? `${CALENDLY_URL}?${calendlyParams}`
    : CALENDLY_URL;

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

          {/* Right: Form or Success */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1B2A4A] mb-3">
                  {t.contact.success.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{t.contact.success.body}</p>
                <svg className="w-6 h-6 text-[#1B2A4A] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/10 outline-none transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/10 outline-none transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/10 outline-none transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                    {t.contact.form.service}
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/10 outline-none transition-all text-gray-800 bg-white appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {t.contact.form.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A4A] mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1B2A4A] focus:ring-2 focus:ring-[#1B2A4A]/10 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1B2A4A] text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3f6e] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {t.contact.form.finePrint}
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Calendly Booking Widget — appears after form submission */}
        {submitted && (
          <div ref={bookingRef} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-2">
                {t.contact.success.bookingLabel}
              </h3>
              <p className="text-gray-500">
                {t.contact.success.body}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <iframe
                src={calendlySrc}
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a meeting with Oscar"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
