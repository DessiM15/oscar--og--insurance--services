import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OG Insurance Services | Oscar Garcia — Medicare & Life Insurance",
  description:
    "OG Insurance Services helps families in the Rio Grande Valley navigate Medicare, life insurance, annuities, and more. Free consultations with Oscar Garcia, licensed Financial Educator.",
  keywords: [
    "Medicare",
    "life insurance",
    "annuities",
    "final expense",
    "IUL",
    "Rio Grande Valley",
    "San Juan TX",
    "Oscar Garcia",
    "OG Insurance Services",
  ],
  openGraph: {
    title: "OG Insurance Services | Oscar Garcia",
    description:
      "Medicare & Life Insurance solutions for families. Free consultations available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
