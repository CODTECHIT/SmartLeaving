import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/FaqJsonLd";
import PropertySearchForm from "@/components/PropertySearchForm";

export const metadata: Metadata = {
  title: "NRI's Complete Guide to Buying Property in India (2026) | investindiasmart",
  description: "Everything NRIs need to know before buying residential or commercial property in India — FEMA rules, documentation, repatriation limits, and the best states to invest in.",
};

export default function NriGuideBlog() {
  const faqs = [
    {
      question: "Can an NRI buy agricultural land in India?",
      answer: "No, not through direct purchase. NRIs can only hold agricultural land through inheritance or as a gift from a resident Indian relative."
    },
    {
      question: "Do NRIs need RBI approval to buy residential or commercial property in India?",
      answer: "No. NRIs and OCI holders can buy residential and commercial property freely, without prior RBI approval."
    },
    {
      question: "How much money can an NRI repatriate after selling property in India?",
      answer: "Up to USD 1 million per financial year, after applicable taxes, through proper banking channels."
    },
    {
      question: "Is a Power of Attorney legal for NRIs buying property remotely?",
      answer: "Yes, a Power of Attorney is a standard and legal way for NRIs to complete a property purchase without being physically present, provided it's properly drafted and registered."
    },
    {
      question: "Which state is best for NRI property investment right now?",
      answer: "It depends on your goals, but Telangana, Andhra Pradesh, and Karnataka are all seeing strong infrastructure-driven growth in commercial and residential land — each with different strengths (IT/pharma corridors, capital-region development, and relaxed land ownership rules respectively)."
    }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            NRI's Complete Guide to Buying Property in India (2026)
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-stone-700 text-lg leading-relaxed">
        <p>If you're a Non-Resident Indian looking to invest back home, the good news is straightforward: buying residential or commercial property in India as an NRI is one of the simplest cross-border investments you can make — no RBI approval required, no special permission needed. But there are a few rules worth understanding clearly before you start looking at listings.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Can NRIs buy property in India without approval?</h2>
        <p>Yes. Under the Foreign Exchange Management Act (FEMA), NRIs and OCI (Overseas Citizen of India) cardholders can freely purchase:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Residential property (apartments, villas, independent houses)</li>
          <li>Commercial property (office space, retail units, commercial land)</li>
        </ul>
        <p>There's no cap on how many properties you can own, and no prior RBI approval is needed for these categories.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">What NRIs cannot buy</h2>
        <p>This is where most confusion happens. FEMA draws a firm line around three categories:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Agricultural land</strong></li>
          <li><strong>Plantation property</strong></li>
          <li><strong>Farmhouses</strong></li>
        </ul>
        <p>These cannot be purchased directly by an NRI or OCI holder, regardless of intent or funding source. The only legitimate ways to hold this kind of land are through inheritance or as a gift from a resident Indian relative. Any structure that tries to work around this — buying in someone else's name, informal arrangements, and so on — falls under the Benami Transactions Act and carries serious legal risk, including penalties of up to three times the transaction value and potential confiscation of the property.</p>
        <p>If your goal is genuinely agricultural investment, the cleaner path is to look at converted (non-agricultural) land, or commercial/industrial land in a rural belt that has already gone through legal land-use conversion — not raw farmland.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Documents you'll need</h2>
        <p>Keep these ready before you start the buying process:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Passport</strong> (with valid visa/OCI card)</li>
          <li><strong>PAN card</strong> (mandatory for any property registration or financial transaction in India)</li>
          <li><strong>Proof of NRI/OCI status</strong></li>
          <li><strong>Power of Attorney</strong> (if you can't be physically present for registration — a common and legal route for NRIs buying remotely)</li>
          <li><strong>Bank account details</strong> — payment must come through an NRE, NRO, or FCNR account, or via normal banking channels from abroad. Cash payments or informal transfers are not compliant.</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Payment and repatriation rules</h2>
        <p>Funds used to buy the property must come through proper banking channels — either remitted from abroad or held in an NRE/NRO/FCNR account in India. When you eventually sell:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Repatriation of sale proceeds is allowed up to <strong>USD 1 million per financial year</strong>, after taxes are settled.</li>
          <li>You'll need to file the relevant forms (15CA/15CB) for the outward remittance.</li>
          <li>If the property was originally acquired using local (rupee) funds via an NRO account, repatriation rules are slightly stricter than if it was funded through remittance from abroad — worth clarifying this with your advisor before you buy, not after.</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Where should NRIs be looking right now?</h2>
        <p>Telangana, Andhra Pradesh, and Karnataka are consistently among the more attractive states for NRI investment, for a few practical reasons:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Telangana</strong> — Hyderabad's IT and pharma growth continues to drive demand for both commercial land and residential property, particularly along the Outer Ring Road belt.</li>
          <li><strong>Andhra Pradesh</strong> — the ongoing development of the Amaravati capital region and the Visakhapatnam industrial corridor has created interest in both residential and commercial land ahead of infrastructure completion.</li>
          <li><strong>Karnataka</strong> — beyond Bengaluru's obvious IT-driven demand, Karnataka's 2020 land reform amendments relaxed some ownership restrictions that previously applied even to resident Indian buyers, making the state comparatively more flexible.</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Common mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Buying agricultural land through a relative's name.</strong> Even with good intentions, this is a benami transaction and illegal.</li>
          <li><strong>Skipping title verification.</strong> This applies to every buyer, but NRIs — who often can't visit the site personally before purchase — are more exposed if they don't get independent legal verification done.</li>
          <li><strong>Assuming OCI status equals citizenship for property purposes.</strong> It doesn't. OCI holders follow the same NRI rules, not resident-Indian rules.</li>
          <li><strong>Not planning repatriation in advance.</strong> If you plan to eventually sell and move funds abroad, structure your original purchase (funding source, account type) with that in mind from day one.</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">How investindiasmart helps</h2>
        <p>We work directly with NRI clients to identify verified commercial and residential opportunities across <Link href="/real-estate/telangana" className="text-amber-600 font-bold hover:underline">Telangana</Link>, <Link href="/real-estate/andhra-pradesh" className="text-amber-600 font-bold hover:underline">Andhra Pradesh</Link>, and <Link href="/real-estate/karnataka" className="text-amber-600 font-bold hover:underline">Karnataka</Link> — with legal title verification, documentation support, and remote transaction handling for clients who can't be present in India for the process.</p>
        
        <p><Link href="/contact" className="text-amber-600 font-bold hover:underline">Book a Strategy Call</Link> to discuss your specific requirements, or explore our <Link href="/nri-investment" className="text-amber-600 font-bold hover:underline">state-wise investment guides</Link> for more detail.</p>
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
