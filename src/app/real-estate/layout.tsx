import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Real Estate Advisory & Investments | investindiasmart",
  description: "Curated real estate opportunities across farmlands, commercial properties, open plots, and premium residential developments tailored for high ROI.",
  keywords: ["Real Estate Investment", "Commercial Lands", "Farmland Investment", "Premium Villa Plots", "Property Advisory"],
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
