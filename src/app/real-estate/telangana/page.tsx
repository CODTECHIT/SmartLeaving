import React from "react";
import { Metadata } from "next";
import { MapPin, ArrowRight, ShieldAlert, FileText } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Buy Land & Plots in Telangana for NRIs and Investors | investindiasmart",
  description: "Explore verified commercial plots, open plots, and villa land for sale across Telangana including Hyderabad. Advisory support for NRI and foreign buyers.",
};

export default function TelanganaRealEstatePage() {
  const faqs = [
    {
      question: "What is the registration process for land in Telangana?",
      answer: "Telangana uses the CARD system for seamless property registration. Buyers must pay stamp duty and registration fees at the sub-registrar office. For NRIs, this can be executed via a registered Power of Attorney."
    },
    {
      question: "Are there restrictions on agricultural land for NRIs in Telangana?",
      answer: "Yes. As per FEMA guidelines, NRIs cannot purchase agricultural land in Telangana or anywhere in India. They may only inherit agricultural property."
    }
  ];

  const microMarkets = [
    { name: "Hyderabad IT Corridor", desc: "Premium commercial and villa plots near Gachibowli and HITEC City." },
    { name: "Shamshabad & ORR", desc: "High-growth logistics and residential zones near the International Airport." },
    { name: "Ibrahimpatnam", desc: "Emerging hub for affordable open plots with strong appreciation potential." }
  ];

  const propertyTypes = [
    { title: "Commercial Land", desc: "High ROI potential in growing business districts.", brochure: "/brochures/commercial-1.pptx" },
    { title: "Open Plots", desc: "Clear-title lands for long-term capital appreciation." },
    { title: "Villa Plots", desc: "Gated community plots for premium residential living.", brochure: "/brochures/villa-1.pptx" }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <MapPin size={16} /> Telangana Real Estate
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Telangana Real Estate Investment <br className="hidden md:block" />
            <span className="text-amber-500">for NRIs & Domestic Buyers</span>
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Why Invest in Telangana?</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Telangana, spearheaded by the phenomenal growth of Hyderabad, has become India's prime destination for real estate investment. With its rapidly expanding IT corridors, robust infrastructure like the Outer Ring Road (ORR), and proactive government policies, property values have seen consistent double-digit appreciation.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg">
            For NRIs, the state offers transparent registration systems, a cosmopolitan lifestyle, and high rental yields in commercial spaces, making it a safe and lucrative market.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Property Types Available</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {propertyTypes.map((prop, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-stone-900">{prop.title}</h3>
                  <p className="text-stone-600 text-sm mb-6">{prop.desc}</p>
                </div>
                {prop.brochure && (
                  <a href={prop.brochure} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg transition-colors w-max">
                    <FileText size={16} /> Download Brochure
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Key Micro-Markets in Telangana</h2>
          <div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                  <th className="p-4 font-bold w-1/3">Micro-Market</th>
                  <th className="p-4 font-bold">Investment Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {microMarkets.map((market, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900">{market.name}</td>
                    <td className="p-4 text-stone-700">{market.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4 items-start">
          <ShieldAlert className="text-amber-600 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-amber-900 mb-2">NRI Buyer Notice</h4>
            <p className="text-amber-800 text-sm leading-relaxed mb-4">
              NRIs and OCIs can freely purchase commercial and residential properties in Telangana. However, agricultural land purchases are restricted under FEMA rules.
            </p>
            <Link href="/nri-investment" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-900">
              Read our full NRI Legal Guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PropertySearchForm />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white p-6 rounded-2xl border border-stone-100 cursor-pointer">
              <summary className="font-bold text-lg text-stone-900 outline-none select-none flex justify-between items-center">
                {faq.question}
                <span className="group-open:rotate-45 transition-transform text-amber-600 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-stone-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FaqJsonLd faqs={faqs} />
    </main>
  );
}
