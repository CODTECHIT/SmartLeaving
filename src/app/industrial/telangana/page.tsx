import React from "react";
import { Metadata } from "next";
import { Factory, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Industrial Land for Sale in Telangana | Pharma & Manufacturing Plots | investindiasmart",
  description: "Industrial plots and pharma-zone land across Telangana including Genome Valley. End-to-end support for domestic and foreign manufacturers.",
};

export default function TelanganaIndustrialPage() {
  const faqs = [
    {
      question: "What is TS-iPASS?",
      answer: "TS-iPASS (Telangana State Industrial Project Approval and Self-Certification System) is a revolutionary policy that ensures rapid processing of industrial clearances within a legally mandated time limit (usually 15-30 days), based on self-certification."
    },
    {
      question: "Are plots available in Genome Valley?",
      answer: "Yes, we assist life sciences and pharma companies in securing specialized R&D and manufacturing plots within Genome Valley, subject to availability and TSIIC approvals."
    }
  ];

  const industrialZones = [
    { name: "Genome Valley (Shamirpet)", desc: "India's first organized cluster for Life Sciences, R&D, and clean manufacturing." },
    { name: "Hyderabad Pharma City", desc: "Upcoming massive industrial park specifically designed for pharmaceutical manufacturing." },
    { name: "Zaheerabad NIMZ", desc: "National Investment and Manufacturing Zone focusing on automotive and heavy engineering." }
  ];

  const propertyTypes = [
    { title: "Pharma Grade Land", desc: "Zoned specifically for red/orange category pharmaceutical manufacturing." },
    { title: "General Manufacturing Plots", desc: "TSIIC approved plots for electronics, aerospace, and general engineering." },
    { title: "Logistics & Warehousing", desc: "Large land parcels near ORR and highways for supply chain hubs." }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <Factory size={16} /> Telangana Industrial Zones
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Industrial Land for Sale <br className="hidden md:block" />
            <span className="text-amber-500">in Telangana</span>
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Why Setup Manufacturing in Telangana?</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Telangana offers one of the most progressive industrial policies in India (TS-iPASS), guaranteeing clearances within 15 to 30 days. Hyderabad is globally recognized as the vaccine capital of the world and a premier hub for life sciences, IT, and aerospace.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg">
            With world-class infrastructure, abundant power supply, and specialized industrial parks developed by TSIIC, Telangana is the preferred destination for domestic conglomerates and foreign direct investment (FDI).
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Industrial Property Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {propertyTypes.map((prop, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-stone-900">{prop.title}</h3>
                <p className="text-stone-600 text-sm">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Key Industrial Corridors</h2>
          <div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                  <th className="p-4 font-bold w-1/3">Industrial Zone</th>
                  <th className="p-4 font-bold">Focus Sectors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {industrialZones.map((zone, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900">{zone.name}</td>
                    <td className="p-4 text-stone-700">{zone.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl flex gap-4 items-start text-white shadow-xl">
          <Factory className="text-amber-500 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-amber-500 mb-2">Foreign Company FDI Setup</h4>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              Foreign companies can acquire industrial land in Telangana under the 100% FDI Automatic Route for most manufacturing sectors. We facilitate entity setup and TS-iPASS clearances.
            </p>
            <Link href="/industrial/foreign-direct-investment" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400">
              Read our FDI Industrial Guide <ArrowRight size={16} />
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
