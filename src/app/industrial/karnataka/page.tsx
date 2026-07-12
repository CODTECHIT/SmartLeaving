import React from "react";
import { Metadata } from "next";
import { Factory, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Industrial Land for Sale in Karnataka | Bengaluru & Dharwad Belt | investindiasmart",
  description: "Manufacturing and industrial plots across Karnataka's key industrial belts. FDI-route advisory for foreign companies entering India.",
};

export default function KarnatakaIndustrialPage() {
  const faqs = [
    {
      question: "What is KIADB?",
      answer: "The Karnataka Industrial Areas Development Board (KIADB) is the nodal agency for industrial development in the state, responsible for acquiring land and developing industrial parks with ready-to-use infrastructure."
    },
    {
      question: "Does Karnataka offer incentives for foreign manufacturers?",
      answer: "Yes, under the Karnataka Industrial Policy, companies are offered various incentives including stamp duty exemption, concessional power tariffs, and investment promotion subsidies based on the zone of investment."
    }
  ];

  const industrialZones = [
    { name: "Bengaluru Aerospace Park", desc: "High-tech manufacturing zone near Devanahalli focusing on aviation and defense." },
    { name: "Tumakuru (NIMZ)", desc: "Massive industrial node part of the Chennai-Bengaluru Industrial Corridor (CBIC)." },
    { name: "Hubballi-Dharwad Belt", desc: "Emerging ecosystem for automobile, engineering, and FMCG manufacturing." }
  ];

  const propertyTypes = [
    { title: "Aerospace & Defense Land", desc: "Specialized zones offering ecosystem support for high-tech manufacturing." },
    { title: "IT/ITeS Parks", desc: "Commercial and industrial plots tailored for software and electronics hardware." },
    { title: "General Manufacturing", desc: "KIADB allotted plots with robust infrastructure for heavy industries." }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <Factory size={16} /> Karnataka Industrial Zones
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Industrial Land for Sale <br className="hidden md:block" />
            <span className="text-amber-500">in Karnataka</span>
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Why Setup Manufacturing in Karnataka?</h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Karnataka is India's knowledge capital and a powerhouse for high-tech manufacturing. Driven by the massive talent pool in Bengaluru, the state is the preferred destination for aerospace, defense, machine tools, and electronics manufacturing.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg">
            With the Karnataka Industrial Areas Development Board (KIADB) aggressively developing new nodes in tier-2 cities like Tumakuru and Hubballi-Dharwad, companies can access premium industrial infrastructure at competitive valuations.
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
              Foreign companies can acquire industrial land in Karnataka under the 100% FDI Automatic Route for manufacturing. We provide end-to-end advisory for KIADB allotments and private industrial land purchases.
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
