"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const medicareIcons = {
  partA: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  partB: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  partC: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  partD: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
};

const insuranceIcons = {
  termLife: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  wholeLife: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  iul: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  finalExpense: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  groupLife: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  guaranteedIssue: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"medicare" | "insurance">("medicare");

  const medicareParts = Object.entries(t.medicare.parts) as [
    keyof typeof t.medicare.parts,
    { title: string; description: string; cost: string }
  ][];

  const insuranceProducts = Object.entries(t.insurance.products) as [
    keyof typeof t.insurance.products,
    { title: string; description: string }
  ][];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#1B2A4A] uppercase tracking-widest">
            {t.services.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mt-3 mb-4">
            {t.services.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subheadline}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab("medicare")}
              className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "medicare"
                  ? "bg-[#1B2A4A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#1B2A4A]"
              }`}
            >
              {t.services.medicareTab}
            </button>
            <button
              onClick={() => setActiveTab("insurance")}
              className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "insurance"
                  ? "bg-[#1B2A4A] text-white shadow-md"
                  : "text-gray-600 hover:text-[#1B2A4A]"
              }`}
            >
              {t.services.insuranceTab}
            </button>
          </div>
        </div>

        {/* Medicare Content */}
        {activeTab === "medicare" && (
          <div id="medicare" className="space-y-16 animate-fadeIn">
            {/* What is Medicare */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
                {t.medicare.whatIs.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.medicare.whatIs.body}
              </p>
            </div>

            {/* Medicare Parts Grid */}
            <div>
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
                {t.medicare.headline}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {medicareParts.map(([key, part]) => (
                  <div
                    key={key}
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1B2A4A]/20 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#1B2A4A]/5 rounded-xl text-[#1B2A4A] group-hover:bg-[#1B2A4A]/10 transition-colors shrink-0">
                        {medicareIcons[key]}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1B2A4A] mb-2">
                          {part.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {part.description}
                        </p>
                        <span className="inline-block bg-[#1B2A4A]/5 text-[#1B2A4A] text-xs font-semibold px-3 py-1 rounded-full">
                          {part.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medigap */}
            <div className="bg-[#1B2A4A] rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">{t.medicare.medigap.title}</h3>
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                {t.medicare.medigap.body}
              </p>
              <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {t.medicare.medigap.popularPlans}
              </span>
            </div>

            {/* Enrollment Periods */}
            <div>
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-8 text-center">
                {t.medicare.enrollment.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.medicare.enrollment.periods.map((period, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="w-12 h-12 bg-[#1B2A4A] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-[#1B2A4A] mb-2">
                      {period.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2 font-medium">{period.when}</p>
                    <p className="text-sm text-gray-600">{period.what}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
                {t.medicare.whyUs.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto mb-6">
                {t.medicare.whyUs.body}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-[#1B2A4A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3f6e] transition-colors shadow-lg"
              >
                {t.medicare.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Insurance Content */}
        {activeTab === "insurance" && (
          <div id="insurance" className="space-y-16 animate-fadeIn">
            {/* Living Benefits Banner */}
            <div className="bg-[#1B2A4A] rounded-2xl p-8 lg:p-12 text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3 block">
                {t.insurance.livingBenefits.label}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t.insurance.livingBenefits.headline}
              </h3>
              <p className="text-white/80 leading-relaxed text-lg mb-6 max-w-2xl">
                {t.insurance.livingBenefits.subheadline}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {t.insurance.livingBenefits.conditions.map((condition) => (
                  <span
                    key={condition}
                    className="bg-red-500/20 text-red-200 text-sm font-medium px-4 py-2 rounded-full border border-red-500/30"
                  >
                    {condition}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {t.insurance.livingBenefits.protects.map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.values(t.insurance.stats).map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-[#1B2A4A] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Insurance Products Grid */}
            <div>
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-2 text-center">
                {t.insurance.headline}
              </h3>
              <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
                {t.insurance.subheadline}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insuranceProducts.map(([key, product]) => (
                  <div
                    key={key}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1B2A4A]/20 transition-all group"
                  >
                    <div className="p-3 bg-[#1B2A4A]/5 rounded-xl text-[#1B2A4A] inline-block mb-4 group-hover:bg-[#1B2A4A]/10 transition-colors">
                      {insuranceIcons[key]}
                    </div>
                    <h4 className="text-lg font-bold text-[#1B2A4A] mb-2">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-2 text-center">
                {t.insurance.howItWorks.headline}
              </h3>
              <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
                {t.insurance.howItWorks.subheadline}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {t.insurance.howItWorks.steps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 bg-[#1B2A4A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">
                      {i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-[#1B2A4A] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center bg-[#1B2A4A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2a3f6e] transition-colors shadow-lg"
              >
                {t.insurance.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
