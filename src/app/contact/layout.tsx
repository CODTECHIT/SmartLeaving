import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact investindiasmart | Get in Touch for Strategic Solutions",
  description: "Connect with the investindiasmart team to explore investment opportunities, discuss real estate advisory, or secure industrial funding.",
  keywords: ["Contact investindiasmart", "Investment Consultation", "Real Estate Inquiry", "Industrial Funding Contact"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
