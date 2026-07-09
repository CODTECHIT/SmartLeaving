import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | investindiasmart - Strategic Advisory & Capital Solutions",
  description: "Learn about investindiasmart's core values, leadership team, and our commitment to delivering strategic industrial and real estate solutions with global perspective.",
  keywords: ["About investindiasmart", "Investment Advisory Team", "Real Estate Experts", "Industrial Finance Leaders", "Corporate Strategy"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
