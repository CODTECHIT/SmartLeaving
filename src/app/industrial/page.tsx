"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ChevronDown, BarChart3, TrendingUp, Check, Download, Send, Phone as PhoneIcon, User, Briefcase, IndianRupee, MapPin as MapPinIcon, MessageSquare } from "lucide-react";
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
    <main className="bg-background pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="subheading">Facilitating Growth</span>
          <h1 className="text-4xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-[1.1] md:leading-none">Industrial <br /><span className="text-gradient-accent">Infrastructure</span></h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Connecting investors and enterprises with high-value industrial projects, specializing in pharmaceutical and strategic manufacturing sectors.
          </p>
        </motion.div>

        {/* Industrial Properties Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-black mb-6 tracking-tighter text-premium-900 border-b border-slate-100 pb-4">Industrial Properties</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-20">
          {projectData.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              <div className="relative w-full lg:w-[500px] aspect-video overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-2xl">
                <Image src="/industrial.png" alt={project.title} fill className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-premium-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-premium-600 mb-10 text-lg md:text-xl font-medium leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium py-5 px-10 text-lg flex items-center gap-4 w-fit"
                >
                  <Download size={22} strokeWidth={2.5} />
                  Download Project Report
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Funding Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-black mb-6 tracking-tighter text-premium-900 border-b border-slate-100 pb-4">Funding Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card group">
            <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
              <BarChart3 size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">Private Funding</h3>
            <p className="text-premium-600 mb-8 text-lg md:text-xl font-medium leading-relaxed">
              We provide structured financial support to industries with funding solutions up to <span className="text-accent font-black">₹500 Crores</span>, designed to accelerate business growth.
            </p>
            <p className="text-slate-400 text-sm mb-10 font-bold uppercase tracking-widest italic">*No Collateral Required</p>
            <div className="space-y-6">
              {["No collateral required*", "Fast-track processing", "Tailored financial structuring"].map((item) => (
                <div key={item} className="flex gap-5 items-center text-premium-600 font-bold">
                  <div className="w-8 h-8 rounded-xl bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Check className="text-accent" size={20} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card group">
            <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
              <TrendingUp size={40} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">Equity Funding</h3>
            <p className="text-premium-600 mb-10 text-lg md:text-xl font-medium leading-relaxed">
              We facilitate equity-based funding solutions by connecting businesses with strategic investors and long-term capital support.
            </p>
            <div className="space-y-6">
              {["Growth capital support", "Long-term partnership approach", "Focus on scalable industries"].map((item) => (
                <div key={item} className="flex gap-5 items-center text-premium-600 font-bold">
                  <div className="w-8 h-8 rounded-xl bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Check className="text-accent" size={20} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements Form Section */}
        <div className="mb-16 pt-16 border-t border-slate-100">
          <div className="max-w-[900px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="subheading mx-auto">Get Started</span>
              <h2 className="text-4xl md:text-6xl font-black text-premium-900 tracking-tighter mb-4">Share Your Requirements</h2>
              <p className="text-premium-600 text-lg md:text-xl font-medium">
                Share your requirements here, and we’ll get back to you with the best solution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card !p-8 md:!p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <User size={14} className="text-accent" /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <PhoneIcon size={14} className="text-accent" /> Mobile Number
                  </label>
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <Briefcase size={14} className="text-accent" /> Industry Type
                  </label>
                  <input 
                    type="text" 
                    name="industryType"
                    required
                    value={formData.industryType}
                    onChange={handleInputChange}
                    placeholder="e.g. Pharmaceutical, Manufacturing" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <IndianRupee size={14} className="text-accent" /> Cost of Industry
                  </label>
                  <input 
                    type="text" 
                    name="cost"
                    required
                    value={formData.cost}
                    onChange={handleInputChange}
                    placeholder="Estimated budget or cost" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <MapPinIcon size={14} className="text-accent" /> Location of Industry
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City or region" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <MessageSquare size={14} className="text-accent" /> Write us if any
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or notes..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit"
                    className="w-full btn-premium py-6 text-xl flex items-center justify-center gap-4 group"
                  >
                    Send to WhatsApp
                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="max-w-[1000px] mx-auto pt-16 border-t border-slate-100">
          <div className="mb-12">
            <span className="subheading text-center">Direct Answers</span>
            <h2 className="text-4xl md:text-6xl font-black text-premium-900 tracking-tighter mb-4 text-center">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card !p-0 overflow-hidden border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-10 flex justify-between items-center text-left font-black text-xl md:text-2xl text-premium-900 hover:text-accent transition-all group"
                >
                  {faq.question}
                  <div className={`w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center group-hover:border-accent transition-all ${openFaq === idx ? "rotate-180 bg-accent border-accent text-white" : ""}`}>
                    <ChevronDown size={24} strokeWidth={2.5} />
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
                      <p className="px-10 pb-10 text-premium-600 leading-relaxed text-lg md:text-xl font-medium">
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