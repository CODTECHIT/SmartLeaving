import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/FaqJsonLd";
import PropertySearchForm from "@/components/PropertySearchForm";

export const metadata: Metadata = {
  title: "Can Foreign Nationals Buy Agricultural Land in India? FEMA Rules Explained | investindiasmart",
  description: "A clear, honest breakdown of what FEMA actually allows foreign nationals, NRIs, and OCI holders to buy in India — and what's off-limits, including agricultural land.",
};

export default function FemaRulesBlog() {
  const faqs = [
    {
      question: "Can a foreign national buy agricultural land in India?",
      answer: "No. This restriction applies to foreign nationals, NRIs, and OCI cardholders alike, with no direct-purchase exceptions."
    },
    {
      question: "Can NRIs inherit agricultural land in India?",
      answer: "Yes. Inheritance is one of the legitimate ways NRIs can come to hold agricultural land, along with gifts from resident relatives and land owned prior to becoming an NRI."
    },
    {
      question: "What happens if someone buys agricultural land illegally through a benami arrangement?",
      answer: "It can be treated as a void transaction, expose the buyer to penalties of up to three times the transaction value, and in serious cases lead to criminal prosecution under the Benami Transactions (Prohibition) Act."
    },
    {
      question: "Is there any legal way for a foreign company to acquire land for agriculture-linked business in India?",
      answer: "This is a separate and more specialized area (for example, contract farming or agri-processing structures) and would need dedicated legal advice — it's distinct from a straightforward land purchase."
    },
    {
      question: "What should foreign investors focus on instead of agricultural land?",
      answer: "Commercial and residential property (for NRI/OCI individuals) and industrial land through the FDI route (for foreign companies) are the two legally straightforward paths available today."
    }
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24 pb-20">
      <section className="bg-stone-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            Can Foreign Nationals Buy Agricultural Land in India? The Real Answer
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-stone-700 text-lg leading-relaxed">
        <p>This is one of the most commonly asked — and most commonly misunderstood — questions we get from prospective investors. The short answer is <strong>no</strong>, but the full picture is more nuanced depending on who you are and what "buying" actually means. Here's the honest breakdown.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">The short answer</h2>
        <p>Agricultural land, plantation property, and farmhouses <strong>cannot be directly purchased</strong> by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>NRIs (Non-Resident Indians)</li>
          <li>OCI cardholders (Overseas Citizens of India)</li>
          <li>Foreign nationals of any nationality</li>
        </ul>
        <p>This rule is set out under the Foreign Exchange Management Act (FEMA), 1999, and enforced by the Reserve Bank of India. It applies regardless of how the purchase is funded, what the stated purpose is, or how the deal is structured.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Why this restriction exists</h2>
        <p>The rule is designed to protect India's agricultural land base from speculative or non-agricultural investment, and to ensure farmland stays connected to people actively engaged in farming or living in India. It's a policy choice that predates most of the current NRI investment boom, and it hasn't shown signs of changing at the central level — although a couple of states have discussed relaxing rules for NRIs specifically, nothing has been finalized as of 2026.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">What's actually allowed</h2>
        <p>There are a small number of legitimate ways agricultural land can end up in the hands of an NRI or OCI holder:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Inheritance</strong> — if you inherit agricultural land from a resident Indian relative, you can hold it.</li>
          <li><strong>Gift from a resident relative</strong> — agricultural land can be gifted to you, but only by someone who qualifies as a "relative" under the relevant legal definition, and only from a resident Indian.</li>
          <li><strong>Land you owned before becoming an NRI</strong> — if you bought the land while you were still a resident Indian, you can retain it after your status changes.</li>
          <li><strong>Special RBI permission</strong> — technically possible, but rare in practice. Applications require a genuine agricultural link or public-interest justification, and most are not approved.</li>
        </ol>
        <p>None of these routes function as a workaround for someone who simply wants to invest in farmland from abroad. If you're looking at a scheme that promises to help you "buy" agricultural land as a foreign national or NRI through informal arrangements, be cautious — buying in someone else's name to bypass this rule falls under the Benami Transactions (Prohibition) Act, and the consequences (fines up to 3x the transaction value, potential confiscation, and in serious cases criminal prosecution) are not proportional to any savings you might think you're getting.</p>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">What foreign nationals specifically face</h2>
        <p>For foreign nationals with no Indian origin (not NRI, not OCI), the restrictions extend further:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A non-resident foreign national generally <strong>cannot buy any property in India</strong> — residential, commercial, or agricultural — without specific prior approval from the RBI.</li>
          <li>If a foreign national qualifies as a <strong>resident under FEMA</strong> (broadly, living in India over 182 days a year with intent to reside, typically on an employment or business visa), they're treated closer to a resident Indian buyer for non-agricultural property — but agricultural land restrictions still generally apply.</li>
          <li>Citizens of certain countries (including Pakistan, Bangladesh, Sri Lanka, Afghanistan, China, Nepal, Bhutan) face additional restrictions and require RBI approval even for non-agricultural property.</li>
          <li>A tourist visa does not qualify someone to purchase property in India at all — this is treated as a violation, not just a technicality.</li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">So what should a genuine foreign investor actually look at?</h2>
        <p>If your interest is in the underlying opportunity — India's growing land value, its industrial corridors, its infrastructure development — agricultural land was probably never going to be the right vehicle anyway. The two paths that are actually open to you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Commercial and residential property</strong>, if you're an NRI or OCI holder — no RBI approval needed, straightforward process. <Link href="/nri-investment" className="text-amber-600 font-bold hover:underline">Read our NRI guide.</Link></li>
          <li><strong>Industrial land through the FDI route</strong>, if you're representing a company looking to set up manufacturing, pharma, or logistics operations in India. This is a completely different legal framework — governed by FDI policy rather than individual FEMA property rules — and in most sectors it's a clean, government-encouraged process with 100% automatic-route approval. <Link href="/industrial/foreign-direct-investment" className="text-amber-600 font-bold hover:underline">We've covered this in detail here.</Link></li>
        </ul>

        <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">How investindiasmart can help</h2>
        <p>We work with both individual NRI/OCI investors and foreign companies looking to establish operations in India, across Telangana, Andhra Pradesh, and Karnataka. Our first conversation with any new client always starts with the same thing: making sure you understand exactly what you're legally able to buy, before we show you a single listing.</p>
        
        <p><Link href="/contact" className="text-amber-600 font-bold hover:underline">Book a Strategy Call</Link> to get a clear picture of your options.</p>
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
