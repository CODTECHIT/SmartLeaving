"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Shield, Heart, UserCheck, Send, Phone as PhoneIcon, User, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function InsurancePage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    insuranceType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "919123456789"; // Replace with actual number
    const message = `*Insurance Requirement Inquiry*
--------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Type of Insurance:* ${formData.insuranceType}
*Additional Notes:* ${formData.message || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const insurancePlans = [
    { title: "Group Health Insurance", description: "Comprehensive health coverage solutions for organizations to safeguard employee well-being.", Icon: Users },
    { title: "Property Insurance", description: "Protection plans designed to secure residential and commercial properties against unforeseen risks.", Icon: Shield },
    { title: "Personal Health Insurance", description: "Flexible health insurance policies ensuring financial security during medical emergencies.", Icon: Heart },
    { title: "Life Insurance", description: "Long-term financial protection plans that secure the future of your loved ones.", Icon: UserCheck },
  ];

  return (
    <main className="bg-slate-50 pt-24">
      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-blue-950">
        <Image src="/insurance.png" alt="Insurance Solutions" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-cyan-400">Reliability First</span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              Strategic <span className="serif-emphasis text-blue-200">Coverage</span> <br />
              & Risk <span className="text-cyan-400 serif-emphasis">Mitigation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/70 max-w-[800px] font-medium leading-relaxed tracking-tight border-l border-white/10 pl-8">
              Protecting what matters most through reliable, transparent, and comprehensive insurance offerings built for individuals and organizations alike.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pt-10">
          {insurancePlans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-blue-50 group hover:-translate-y-4 transition-all duration-700"
            >
              <div className="w-24 h-24 rounded-[2.5rem] bg-blue-50 text-blue-900 flex items-center justify-center mb-12 group-hover:bg-blue-900 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                <plan.Icon size={44} strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-blue-950 tracking-tight group-hover:text-blue-700 transition-colors leading-tight">{plan.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-lg md:text-2xl">{plan.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Requirements Form Section */}
        <div className="pt-16 border-t border-blue-100">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="subheading mx-auto !text-blue-900">Custom Coverage</span>
              <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-6">Share Your <span className="font-serif italic font-light text-slate-400">Needs</span></h2>
              <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
                Tailoring protection to your unique profile. Share your requirements and we will build your safety net.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.05)] relative overflow-hidden border border-blue-50"
            >
              <div className="absolute top-0 left-0 w-3 h-full bg-blue-900" />
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <User size={14} className="text-blue-900" /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium text-blue-950"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <PhoneIcon size={14} className="text-blue-900" /> Mobile Number
                  </label>
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium text-blue-950"
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <ShieldCheck size={14} className="text-blue-900" /> Type of Insurance
                  </label>
                  <input 
                    type="text" 
                    name="insuranceType"
                    required
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    placeholder="e.g. Health, Life, Property" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium text-blue-950"
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <MessageSquare size={14} className="text-blue-900" /> Write us if any
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific coverage needs or notes..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all font-medium resize-none text-blue-950"
                  />
                </div>

                <div className="md:col-span-2 pt-8">
                  <button 
                    type="submit"
                    className="w-full btn-premium !bg-blue-900 py-6 text-xl flex items-center justify-center gap-6 group rounded-xl shadow-2xl hover:!bg-blue-950 transition-colors"
                  >
                    Send to WhatsApp
                    <Send size={28} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}