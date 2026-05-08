"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <StickyCallButton />
    </LanguageProvider>
  );
}
