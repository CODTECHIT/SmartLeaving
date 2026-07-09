import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Insurance Solutions | investindiasmart",
  description: "Protect individuals, assets, and organizations with our reliable group health, property, and life insurance solutions.",
  keywords: ["Group Health Insurance", "Property Insurance", "Corporate Insurance Solutions", "Life Insurance Plans", "Risk Management"],
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
