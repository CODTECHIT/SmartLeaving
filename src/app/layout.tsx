import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://investindiasmarat.com'),
  title: "investindiasmart | Strategic Industrial & Real Estate Solutions",
  description: "High-end corporate services for industrial growth, real estate investments, and reliable insurance solutions. Built on trust and driven by expertise.",
  keywords: ["Industrial Services", "Real Estate Investment", "Industrial Funding", "Pharma Projects", "Insurance Solutions"],
  authors: [{ name: "investindiasmart Team" }],
  verification: {
    google: "gVugs9gH-unEiP9hBGuku5kSNKVqEAqiWCQrGWP5vSI",
  },
};

import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-500 antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-GLGS0CD1FF`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GLGS0CD1FF');
          `}
        </Script>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
