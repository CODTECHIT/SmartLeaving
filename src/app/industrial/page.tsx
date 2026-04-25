"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, X, ChevronDown, BarChart3, TrendingUp, Check, 
  Download, Send, Phone as PhoneIcon, User, Briefcase, 
  IndianRupee, MapPin as MapPinIcon, MessageSquare 
} from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    industryType: "",
    cost: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "919123456789"; // Replace with actual number
    const message = `*Industry Requirement Inquiry*
--------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Industry Type:* ${formData.industryType}
*Cost of Industry:* ${formData.cost}
*Location:* ${formData.location}
*Additional Notes:* ${formData.message || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

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
    <main className="bg-slate-50 pt-24">
      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <Image src="/industrial.png" alt="Industrial Growth" fill className="object-cover opacity-30 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-emerald-500" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-emerald-500">Industrial Scale-Up</span>
              <div className="w-12 h-[1px] bg-emerald-500" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              Connecting <span className="font-serif italic capitalize font-light text-slate-300 tracking-normal">Global</span> <br />
              <span className="text-emerald-500">Strategic</span> Investments
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-[800px] mx-auto font-medium leading-relaxed tracking-tight">
              Connecting investors and enterprises with high-value industrial projects, specializing in pharmaceutical and strategic manufacturing sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container -mt-16 relative z-20 pb-16">
        {/* Industrial Assets Section */}
        <div className="mb-12 pt-10">
          <h2 className="text-3xl md:text-6xl font-black mb-12 tracking-tighter text-slate-950 leading-tight">
            Strategic Industrial <span className="serif-emphasis text-slate-400">Assets</span>
          </h2>
          
          <div className="grid grid-cols-1 gap-16">
            {projectData.map((project, idx) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-1000"
              >
                <div className="relative w-full lg:w-[550px] aspect-[16/10] overflow-hidden rounded-[3rem] bg-slate-100">
                  <Image src="/industrial.png" alt={project.title} fill className="object-cover opacity-95 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-600 mb-6 block">Project Insight</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-12 text-lg md:text-xl font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <a 
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium !bg-slate-900 hover:!bg-emerald-800 transition-colors py-6 px-12 flex items-center gap-4 w-fit shadow-2xl"
                  >
                    <Download size={22} strokeWidth={2.5} />
                    Download Project Report
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Funding Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-6xl font-black mb-12 tracking-tighter text-slate-950 leading-tight text-center">
            Capital <span className="font-serif italic font-light text-slate-400">Solutions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-12 rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.02)] group hover:-translate-y-4 transition-all duration-700 border border-slate-50">
              <div className="w-20 h-20 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                <BarChart3 size={40} strokeWidth={2.2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">Private Funding</h3>
              <p className="text-slate-600 mb-8 text-lg md:text-xl font-medium leading-relaxed">
                We provide structured financial support to industries with funding solutions up to <span className="text-emerald-600 font-black">₹500 Crores</span>, designed to accelerate business growth.
              </p>
              <p className="text-emerald-600/50 text-[10px] mb-10 font-black uppercase tracking-[0.3em] italic">No Collateral Required</p>
              <div className="space-y-6">
                {["Strategic Capital Access", "Fast-track processing", "Bespoke financial structuring"].map((item) => (
                  <div key={item} className="flex gap-5 items-center text-slate-700 font-bold">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                      <Check className="text-emerald-600" size={18} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.05)] group hover:-translate-y-4 transition-all duration-700 text-white">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 text-emerald-400 flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                <TrendingUp size={40} strokeWidth={2.2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight group-hover:text-emerald-400 transition-colors">Equity Funding</h3>
              <p className="text-slate-400 mb-10 text-lg md:text-xl font-medium leading-relaxed">
                We facilitate equity-based funding solutions by connecting businesses with strategic investors and long-term capital support.
              </p>
              <div className="space-y-6">
                {["Growth capital support", "Long-term partnership approach", "Focus on scalable industries"].map((item) => (
                  <div key={item} className="flex gap-5 items-center text-slate-300 font-bold">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <Check className="text-emerald-400" size={18} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Form Section */}
        <div className="mb-12 pt-12 border-t border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="subheading mx-auto !text-emerald-600">Strategic Inquiry</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-6">Share Your <span className="font-serif italic font-light text-slate-400">Requirements</span></h2>
              <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
                Connecting visions with execution. Share your requirements and our experts will craft a solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative overflow-hidden border border-slate-50"
            >
              <div className="absolute top-0 left-0 w-3 h-full bg-emerald-600" />
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <User size={14} className="text-emerald-600" /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium text-slate-900"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <PhoneIcon size={14} className="text-emerald-600" /> Mobile Number
                  </label>
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium text-slate-900"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <Briefcase size={14} className="text-emerald-600" /> Industry Type
                  </label>
                  <input 
                    type="text" 
                    name="industryType"
                    required
                    value={formData.industryType}
                    onChange={handleInputChange}
                    placeholder="e.g. Pharmaceutical, Manufacturing" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium text-slate-900"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <IndianRupee size={14} className="text-emerald-600" /> Cost of Industry
                  </label>
                  <input 
                    type="text" 
                    name="cost"
                    required
                    value={formData.cost}
                    onChange={handleInputChange}
                    placeholder="Estimated budget or cost" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium text-slate-900"
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <MapPinIcon size={14} className="text-emerald-600" /> Location of Industry
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City or region" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium text-slate-900"
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <MessageSquare size={14} className="text-emerald-600" /> Write us if any
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or notes..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium resize-none text-slate-900"
                  />
                </div>

                <div className="md:col-span-2 pt-8">
                  <button 
                    type="submit"
                    className="w-full btn-premium !bg-emerald-600 py-6 text-xl flex items-center justify-center gap-6 group rounded-xl shadow-2xl hover:!bg-emerald-700 transition-colors"
                  >
                    Send to WhatsApp
                    <Send size={28} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-[1100px] mx-auto pt-20 pb-16"
        >
          <div className="mb-12 text-center">
            <span className="subheading !text-emerald-600 mx-auto">Direct Answers</span>
            <h2 className="text-3xl md:text-7xl font-black text-slate-950 tracking-tighter mb-6">Frequently Asked <span className="serif-emphasis text-slate-400">Questions</span></h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 md:p-14 flex justify-between items-center text-left font-black text-lg md:text-3xl text-slate-900 hover:text-emerald-700 transition-all group"
                >
                  {faq.question}
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-slate-100 flex items-center justify-center group-hover:border-emerald-500 transition-all ${openFaq === idx ? "rotate-180 bg-emerald-600 border-emerald-600 text-white" : ""}`}>
                    <ChevronDown size={20} className="md:w-7 md:h-7" strokeWidth={2.5} />
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
                      <p className="px-6 md:px-14 pb-8 md:pb-14 text-slate-600 leading-relaxed text-base md:text-2xl font-medium max-w-4xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}