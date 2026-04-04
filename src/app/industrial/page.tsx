"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ChevronDown, BarChart3, TrendingUp, Check, Download } from "lucide-react";
import Image from "next/image";

const projectData = [
  {
    id: "project1",
    title: "Project 1 – Active Pharmaceutical Company",
    description: "Operational pharmaceutical unit with 15+ years of market presence. Specializes in API manufacturing with WHO-GMP certification.",
    pdfUrl: "/projects/project1.pdf",
  },
  {
    id: "project2",
    title: "Project 2 – Active Pharmaceutical Company",
    description: "Large-scale liquid injection and tablet production facility. Features state-of-the-art HVAC systems and automated packaging units.",
    pdfUrl: "/projects/project2.pdf",
  },
  {
    id: "project3",
    title: "Project 3 – Pharmaceutical Formulation Company",
    description: "Focused on generic drug formulations with strong portfolio of patented delivery mechanisms and high scalability potential.",
    pdfUrl: "/projects/project3.pdf",
  },
];

export default function IndustrialPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of industrial projects do you facilitate?",
      answer: "We primarily focus on pharmaceutical manufacturing units, formulation companies, and active pharmaceutical ingredient (API) facilities. We also handle large-scale manufacturing infrastructure projects."
    },
    {
      question: "How does the non-collateral funding work?",
      answer: "Our funding solutions up to ₹500 Crores are based on project viability, company financials, and strategic growth potential. Terms and conditions apply based on the specific industry and scale of operation."
    }
  ];

  return (
    <main className="bg-steel-900 pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="subheading">Facilitating Growth</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white">Industrial <br /><span className="text-gradient-accent">Infrastructure</span></h1>
          <p className="text-slate-300 max-w-[700px] text-xl font-light leading-relaxed">
            Connecting investors and enterprises with high-value industrial projects, specializing in pharmaceutical and strategic manufacturing sectors.
          </p>
        </motion.div>

        {/* Industrial Properties Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white border-b border-white/10 pb-4">Industrial Properties</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 mb-32">
          {projectData.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="relative w-full md:w-[400px] aspect-video overflow-hidden rounded-2xl">
                <Image src="/industrial.png" alt={project.title} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-steel-900/80 to-transparent" />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">{project.title}</h3>
                <p className="text-slate-400 mb-8 text-lg font-light leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-bold text-white bg-industrial-rust hover:bg-industrial-rustLight px-6 py-3 rounded-full transition-all"
                >
                  <Download size={18} />
                  View Project Report (PPT/PDF)
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Funding Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white border-b border-white/10 pb-4">Funding Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <div className="glass-card">
            <BarChart3 className="text-industrial-rust mb-8" size={50} />
            <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">Private Funding</h3>
            <p className="text-slate-400 mb-6 text-lg font-light leading-relaxed">
              We provide structured financial support to industries with funding solutions up to <span className="text-industrial-rust font-bold">₹500 Crores</span>, designed to accelerate business growth.
            </p>
            <p className="text-slate-500 text-sm mb-8 italic">*Without collateral - Terms and conditions apply</p>
            <div className="space-y-6">
              {["No collateral required*", "Fast-track processing", "Tailored financial structuring"].map((item) => (
                <div key={item} className="flex gap-4 items-center text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-industrial-rust/20 flex items-center justify-center">
                    <Check className="text-industrial-rust" size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card">
            <TrendingUp className="text-industrial-rust mb-8" size={50} />
            <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">Equity Funding</h3>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              We facilitate equity-based funding solutions by connecting businesses with strategic investors and long-term capital support.
            </p>
            <div className="space-y-6">
              {["Growth capital support", "Long-term partnership approach", "Focus on scalable industries"].map((item) => (
                <div key={item} className="flex gap-4 items-center text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-industrial-rust/20 flex items-center justify-center">
                    <Check className="text-industrial-rust" size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[900px] mx-auto pt-24 border-t border-white/10">
          <div className="mb-16">
            <span className="subheading">Direct Answers</span>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4 text-center">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card !p-0 overflow-hidden border-white/10">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-8 flex justify-between items-center text-left font-bold text-xl text-white hover:text-industrial-rust transition-all group"
                >
                  {faq.question}
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-industrial-rust transition-all ${openFaq === idx ? "rotate-180 bg-industrial-rust border-industrial-rust text-white" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-8 text-slate-400 leading-relaxed text-lg font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}