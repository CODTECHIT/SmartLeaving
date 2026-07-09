import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Services & Funding | investindiasmart",
  description: "End-to-end industrial solutions including project facilitation, operational consulting, and structured private and equity funding up to ₹500 Crores.",
  keywords: ["Industrial Funding", "Pharma Projects", "Private Funding for Industries", "Manufacturing Scale-up", "Industrial Real Estate"],
};

export default function IndustrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
