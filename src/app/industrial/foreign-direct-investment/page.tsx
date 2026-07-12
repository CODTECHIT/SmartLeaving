import React from "react";
import { Metadata } from "next";
import { Factory, Globe, CheckCircle2, TrendingUp, Building2, Anchor } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "Industrial Land in India for Foreign Investors | 100% FDI Route | investindiasmart",
  description: "Set up your manufacturing, pharma, or logistics unit in India. investindiasmart facilitates industrial land acquisition for foreign companies under the FDI automatic route across Telangana, Andhra Pradesh, and Karnataka.",
};

export default function ForeignDirectInvestmentPage() {
  const faqs = [
    {
      question: "Can a foreign company buy industrial land in India directly?",
      answer: "A foreign company typically establishes an Indian entity (such as a subsidiary) under the Companies Act. This Indian entity is then completely free to acquire industrial land and property for its business operations."
    },
    {
      question: "Is RBI approval needed for FDI in Indian manufacturing?",
      answer: "For most manufacturing sectors, 100% FDI is allowed under the Automatic Route, meaning no prior approval from the RBI or Government is required. You only need to notify the RBI within 30 days of inward remittance."
    },
    {
      question: "Which Indian state offers the best industrial land for pharma manufacturing?",
      answer: "Telangana is globally recognized as a premier destination for pharma, specifically Genome Valley in Hyderabad. Andhra Pradesh is also highly competitive with specialized pharma zones in Visakhapatnam."
    },
    {
      question: "What's the difference between an NRI buying property and a foreign company acquiring industrial land?",
      answer: "NRIs buying property as individuals are purchasing personal assets subject to FEMA's individual rules. Foreign companies acquiring land through an Indian subsidiary are making business investments under the FDI policy, which strongly encourages and facilitates industrial setup."
    }
  ];

  const fdiSectors = [
    {
      title: "Pharmaceuticals & Biotechnology",
      route: "100% Automatic Route (Greenfield)",
      desc: "Ideal for establishing R&D centers, formulation units, and API manufacturing in specialized zones like Genome Valley."
    },
    {
      title: "Manufacturing & Assembly",
      route: "100% Automatic Route",
      desc: "For electronics, automotive, textiles, and general manufacturing, driving the 'Make in India' initiative."
    },
    {
      title: "Logistics & Warehousing",
      route: "100% Automatic Route",
      desc: "Development of free trade warehousing zones (FTWZ), industrial parks, and supply chain infrastructure."
    }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <Globe size={16} /> FDI Automatic Route
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Industrial Land in India for <br className="hidden md:block" />
            <span className="text-amber-500">Foreign Companies</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Unlike individual property purchases, acquiring industrial land for manufacturing under the Foreign Direct Investment (FDI) route is a government-encouraged, streamlined process. We facilitate end-to-end setup across South India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* What FDI Route Means */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-stone-900 tracking-tight">The 100% Automatic FDI Route</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              For foreign corporations setting up an Indian entity (subsidiary or joint venture), the acquisition of industrial land falls under the <strong>FDI Automatic Route</strong>. This means no prior government or RBI approval is required for the entity to bring in capital and purchase industrial land.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              This route provides a clean, legally robust pathway for establishing factories, pharma units, logistics parks, and warehouses in India.
            </p>
          </div>
          <div className="bg-stone-900 rounded-3xl p-8 shadow-xl text-white">
            <h3 className="text-xl font-bold mb-6 text-amber-500">FDI vs Individual Purchase</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                <span className="text-stone-300"><strong>FDI (Companies):</strong> 100% automatic route for manufacturing. Can freely acquire industrial land. Government supported.</span>
              </li>
              <li className="flex gap-3 opacity-50">
                <CheckCircle2 className="text-stone-500 shrink-0 mt-1" size={20} />
                <span className="text-stone-400"><strong>Individuals (Foreign Nationals):</strong> Highly restricted. Requires RBI approval. Cannot buy agricultural land.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sector Eligibility */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Key Sectors for FDI Investment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fdiSectors.map((sector, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-stone-900">{sector.title}</h3>
                <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-md mb-4 border border-amber-100">
                  {sector.route}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Process */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">The Acquisition Process</h2>
          <div className="relative border-l-2 border-stone-200 ml-3 md:ml-6 space-y-8 pb-4 pt-2">
            {[
              { title: "Entity Setup", desc: "Establishing a wholly-owned subsidiary (WOS), Joint Venture (JV), or Limited Liability Partnership (LLP) in India." },
              { title: "Land Identification", desc: "Sourcing verified industrial plots in SEZs, government industrial parks (TSIIC, APIIC, KIADB), or private industrial zones." },
              { title: "Due Diligence & Acquisition", desc: "Comprehensive legal vetting, execution of sale deeds/lease agreements, and FDI compliance reporting to RBI." },
              { title: "Clearances & Construction", desc: "Securing environmental clearances, building approvals, and commencing facility construction." }
            ].map((step, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute w-6 h-6 bg-amber-600 rounded-full left-[-13px] top-1 border-4 border-[#FAF9F6]" />
                <h3 className="font-bold text-lg mb-1 text-stone-900">Phase {i + 1}: {step.title}</h3>
                <p className="text-stone-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why South India */}
        <div className="space-y-8 pt-8">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight text-center">Prime Industrial Corridors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/industrial/telangana" className="group p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors text-stone-400">
                <Factory size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-stone-900">Telangana</h3>
              <p className="text-stone-600 text-sm mb-6">Home to Genome Valley and Pharma City. Ideal for life sciences and high-tech manufacturing.</p>
              <span className="text-amber-600 font-bold text-sm">Explore Hubs &rarr;</span>
            </Link>
            <Link href="/industrial/andhra-pradesh" className="group p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors text-stone-400">
                <Anchor size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-stone-900">Andhra Pradesh</h3>
              <p className="text-stone-600 text-sm mb-6">Massive port-linked industrial corridors. Perfect for export-oriented manufacturing and logistics.</p>
              <span className="text-amber-600 font-bold text-sm">Explore Hubs &rarr;</span>
            </Link>
            <Link href="/industrial/karnataka" className="group p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors text-stone-400">
                <Building2 size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-stone-900">Karnataka</h3>
              <p className="text-stone-600 text-sm mb-6">Bengaluru-Dharwad industrial belt offering aerospace, defense, and heavy engineering zones.</p>
              <span className="text-amber-600 font-bold text-sm">Explore Hubs &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Existing Offerings Tie-in */}
        <div className="bg-stone-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Beyond Land Acquisition</h2>
              <p className="text-stone-300 mb-6 leading-relaxed">
                investindiasmart offers more than just real estate advisory. We provide comprehensive operational consulting and financial structuring.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={18} /> ₹500 Cr Private Funding Access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={18} /> JV & Equity Funding Structuring</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-amber-500" size={18} /> Turnkey Pharma Project Execution</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center gap-2">
                Discuss Your Project <TrendingUp size={20} />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Lead Form */}
      <PropertySearchForm />

      {/* FAQs */}
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
