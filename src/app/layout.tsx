import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SmartLeaving | Strategic Industrial & Real Estate Solutions",
  description: "High-end corporate services for industrial growth, real estate investments, and reliable insurance solutions. Built on trust and driven by expertise.",
  keywords: ["Industrial Services", "Real Estate Investment", "Industrial Funding", "Pharma Projects", "Insurance Solutions"],
  authors: [{ name: "SmartLeaving Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
