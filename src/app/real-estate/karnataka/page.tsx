import React from "react";
import { Metadata } from "next";
import { MapPin, ArrowRight, ShieldAlert, FileText } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Buy Land in Karnataka - Bengaluru Commercial Plots for NRIs | investindiasmart",
  description: "Karnataka's relaxed land ownership rules make it a top choice for NRI investors. Explore commercial and industrial plots in Bengaluru and beyond.",
};

export default function KarnatakaRealEstatePage() {
  const faqs = [
    {
      question: "Did the 2020 Karnataka Land Reforms allow NRIs to buy farm land?",
      answer: "No. While the Karnataka government removed the income limit and non-agriculturist restrictions, FEMA rules (which are central government laws) still prohibit NRIs and foreign nationals from purchasing agricultural land."
    },
    {
      question: "Is North Bengaluru a good investment?",
      answer: "Yes, North Bengaluru (Devanahalli, Yelahanka) is one of the fastest-growing micro-markets due to the airport, upcoming metro lines, and massive commercial park developments."
    }
  ];

  const microMarkets = [
    { name: "North Bengaluru (Airport Corridor)", desc: "Prime commercial and residential plots near Kempegowda International Airport." },
    { name: "Electronic City & Hosur Road", desc: "Established IT hubs with steady commercial rental yields." },
    { name: "Mysuru Highway Corridor", desc: "Rapidly appreciating open plots driven by the new expressway." }
  ];

  const propertyTypes = [
    { title: "Commercial Land", desc: "High-value plots in Bengaluru's tech corridors.", brochure: "/brochures/commercial-3.pptx" },
    { title: "Open Plots", desc: "Investment-grade lands on city outskirts." },
    { title: "Villa Plots", desc: "Exclusive gated community plots in North and East Bengaluru.", brochure: "/brochures/villa-2.pptx" }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <MapPin size={16} /> Karnataka Real Estate
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Karnataka Real Estate <br className="hidden md:block" />
            <span className="text-amber-500">Investment for NRIs</span>
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Why Invest in Karnataka?</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Karnataka, driven by Bengaluru's status as India's Silicon Valley, remains one of the most robust real estate markets in Asia. Beyond tech, the 2020 amendments to the Karnataka Land Reforms Act have significantly relaxed property ownership rules, opening up massive new opportunities for investors.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg">
            Whether you're looking for high-yield commercial spaces in North Bengaluru or rapidly appreciating open plots along the Mysuru corridor, Karnataka offers stable and lucrative returns for NRIs.
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
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Key Micro-Markets in Karnataka</h2>
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
              Despite the 2020 Land Reforms relaxing rules for residents, NRIs are still restricted from buying agricultural land under FEMA rules. However, you can freely invest in commercial and residential properties.
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
