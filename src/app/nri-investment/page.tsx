import React from "react";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldAlert, Globe, MapPin, Building, LandPlot, ExternalLink } from "lucide-react";
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "NRI & Foreign Investor's Guide to Buying Property in India (2026) | investindiasmart",
  description: "Complete guide for NRIs and foreign nationals on legally buying residential, commercial, and industrial property in India. FEMA rules, documentation, and state-specific advice.",
};

export default function NriInvestmentPage() {
  const faqs = [
    {
      question: "Can a foreign national buy agricultural land in India?",
      answer: "No. Foreign nationals of non-Indian origin cannot buy agricultural land, plantation property, or farmhouses in India. Even NRIs/OCIs cannot purchase them directly, though they can inherit such land."
    },
    {
      question: "Do NRIs need RBI approval to buy property in India?",
      answer: "No, NRIs and OCIs do not need prior approval from the Reserve Bank of India (RBI) to purchase residential or commercial properties in India."
    },
    {
      question: "Which Indian state is best for NRI real estate investment?",
      answer: "Telangana (Hyderabad) and Karnataka (Bengaluru) are currently top choices due to robust IT infrastructure, transparent registration systems, and high capital appreciation. Andhra Pradesh is also emerging strongly with its port-led development."
    },
    {
      question: "Can OCI cardholders buy commercial property in Hyderabad?",
      answer: "Yes, OCI cardholders are legally permitted to buy commercial and residential properties in Hyderabad (and across India) without RBI approval."
    }
  ];

  const buyerRules = [
    {
      type: "NRI / OCI",
      residential: "✅ Allowed, no RBI approval needed",
      agricultural: "❌ Not allowed (only via inheritance/gift)",
    },
    {
      type: "Foreign national (non-Indian origin, non-resident)",
      residential: "❌ Needs RBI approval",
      agricultural: "❌ Not allowed",
    },
    {
      type: "Foreign national living in India on work/business visa",
      residential: "✅ Generally allowed like a resident",
      agricultural: "❌ Still restricted in most cases",
    },
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/30 text-amber-500 font-semibold text-sm mb-8 border border-amber-500/20">
            <Globe size={16} /> 2026 Legal & Investment Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Buying Property in India as an <br className="hidden md:block" />
            <span className="text-amber-500">NRI or Foreign Investor</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Navigate the complexities of Indian real estate with confidence. From FEMA rules to repatriation limits, here is your complete guide to legally buying residential, commercial, and industrial assets.
          </p>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl flex gap-4 items-start shadow-sm">
          <ShieldAlert className="text-amber-600 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Important Compliance Note</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              Agricultural land purchase is subject to strict FEMA restrictions. NRIs and foreign nationals cannot purchase agricultural land or farm houses directly. For NRIs and foreign investors, we recommend focusing on <strong>Commercial Lands, Industrial Lands, Open Plots (non-agri), Villa Plots, and Apartments</strong>. Please consult our advisory team for eligible property types.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Who can buy what */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Who Can Buy What?</h2>
          <p className="text-stone-600">The rules for buying property in India vary significantly depending on your residency and citizenship status. Here is a clear breakdown:</p>
          
          <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                  <th className="p-4 font-bold">Buyer Type</th>
                  <th className="p-4 font-bold">Residential / Commercial</th>
                  <th className="p-4 font-bold">Agricultural / Farm Land</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {buyerRules.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-semibold text-stone-900">{rule.type}</td>
                    <td className="p-4 text-stone-700">{rule.residential}</td>
                    <td className="p-4 text-stone-700">{rule.agricultural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-step Process */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Step-by-Step Purchase Process</h2>
          <div className="grid gap-6">
            {[
              { title: "Documentation Readiness", desc: "Ensure you have a valid PAN card (mandatory), Passport, OCI/PIO card (if applicable), and an NRE/NRO bank account." },
              { title: "Power of Attorney (PoA)", desc: "If you cannot travel to India, you can grant a Specific Power of Attorney to a trusted relative or associate to execute documents on your behalf. This must be attested by the Indian embassy/consulate in your country of residence." },
              { title: "Property Verification", desc: "Our legal team conducts rigorous title searches, checks for encumbrances, and ensures RERA compliance (for new projects) or clear legacy titles (for open lands)." },
              { title: "Execution & Registration", desc: "Payment must be routed through your NRE/NRO account. Stamp duty and registration charges apply as per state laws." }
            ].map((step, i) => (
              <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 bg-stone-100 text-stone-900 font-black rounded-full flex items-center justify-center text-xl">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-stone-900">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Repatriation */}
        <div className="space-y-6 bg-stone-900 text-white p-8 md:p-10 rounded-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Payment & Repatriation Rules</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
              <span className="text-stone-300"><strong>Inward Remittance:</strong> Payments must be made via inward remittance through normal banking channels or out of funds held in NRE/FCNR(B)/NRO accounts.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
              <span className="text-stone-300"><strong>Repatriation Limit:</strong> NRIs and PIOs can remit up to <strong>USD 1 million</strong> per financial year out of balances held in their NRO accounts, subject to tax compliance.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
              <span className="text-stone-300"><strong>Capital Gains:</strong> Sale of property attracts capital gains tax, and the buyer is required to deduct TDS. Proper chartered accountant certification (Form 15CB) is needed for repatriation.</span>
            </li>
          </ul>
        </div>

        {/* Why South India */}
        <div className="space-y-8 pt-8">
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Why Invest in Telangana, AP, & Karnataka?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/real-estate/telangana" className="group p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all">
              <Building className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">Telangana</h3>
              <p className="text-stone-600 text-sm mb-4">Hyderabad's booming IT corridor, ORR developments, and proactive government policies.</p>
              <span className="text-amber-600 text-sm font-bold flex items-center gap-2">View Properties <ArrowRight size={14} /></span>
            </Link>
            <Link href="/real-estate/andhra-pradesh" className="group p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all">
              <LandPlot className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">Andhra Pradesh</h3>
              <p className="text-stone-600 text-sm mb-4">Emerging capital region, massive port infrastructure, and industrial corridors.</p>
              <span className="text-amber-600 text-sm font-bold flex items-center gap-2">View Properties <ArrowRight size={14} /></span>
            </Link>
            <Link href="/real-estate/karnataka" className="group p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all">
              <MapPin className="text-amber-600 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2 text-stone-900 group-hover:text-amber-700 transition-colors">Karnataka</h3>
              <p className="text-stone-600 text-sm mb-4">Bengaluru's unparalleled tech growth and relaxed post-2020 land ownership laws.</p>
              <span className="text-amber-600 text-sm font-bold flex items-center gap-2">View Properties <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>

        {/* Value Prop */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-stone-900">How investindiasmart Helps You</h2>
          <p className="text-stone-600 leading-relaxed">
            Investing from abroad carries risks if not managed by trusted professionals. We provide an end-to-end umbrella of services specifically tailored for NRIs:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {["Verified, high-ROI property listings", "Strict legal vetting & title checks", "Assistance with PoA & documentation", "Dedicated post-purchase asset management"].map((item, i) => (
              <li key={i} className="flex gap-2 items-center text-stone-700 font-medium">
                <CheckCircle2 className="text-green-600" size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lead Form */}
      <PropertySearchForm />

      {/* FAQs (Schema ready content) */}
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
