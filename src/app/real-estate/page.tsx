"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trees, Landmark, Map, Home, Building, RefreshCw, Send, Phone as PhoneIcon, User, Layers, IndianRupee, MapPin as MapPinIcon, MessageSquare } from "lucide-react";

export default function RealEstatePage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    landType: "",
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
    const message = `*Real Estate Requirement Inquiry*
--------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Type of Land:* ${formData.landType}
*Approximate Cost:* ${formData.cost}
*Location:* ${formData.location}
*Additional Notes:* ${formData.message || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const categories = [
    { title: "Farmlands", description: "Premium agricultural lands suitable for long-term investment and sustainable returns.", Icon: Trees },
    { title: "Commercial Lands", description: "Strategically located commercial plots ideal for business development and high ROI.", Icon: Landmark },
    { title: "Open Plots", description: "Clear-title open plots in developing regions with strong future appreciation potential.", Icon: Map },
    { title: "Villa Plots", description: "Exclusive villa plots in gated layouts designed for premium residential living.", Icon: Home },
    { title: "New Apartment Flats", description: "Modern residential apartments with contemporary amenities and prime locations.", Icon: Building },
    { title: "Resale Flats", description: "Well-maintained resale properties offering value-driven investment opportunities.", Icon: RefreshCw },
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
          <span className="subheading">Exclusive Portfolio</span>
          <h1 className="text-4xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-[1.1] md:leading-none">Real Estate <br /><span className="text-gradient-accent">Opportunities</span></h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Curating a diversified portfolio of high-value properties selected specifically to meet modern investment goals and premium lifestyle requirements.
          </p>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-black mb-6 tracking-tighter text-premium-900 border-b border-slate-100 pb-4">Real Estate Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                <cat.Icon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{cat.title}</h3>
               <p className="text-premium-600 leading-relaxed font-medium text-lg">{cat.description}</p>
            </motion.div>
          ))}
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
              <span className="subheading mx-auto">Custom Property</span>
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
                    <Layers size={14} className="text-accent" /> Type of Land
                  </label>
                  <input 
                    type="text" 
                    name="landType"
                    required
                    value={formData.landType}
                    onChange={handleInputChange}
                    placeholder="e.g. Farmland, Open Plot" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <IndianRupee size={14} className="text-accent" /> Approximate Cost
                  </label>
                  <input 
                    type="text" 
                    name="cost"
                    required
                    value={formData.cost}
                    onChange={handleInputChange}
                    placeholder="Estimated budget" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-medium"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-premium-400 flex items-center gap-2">
                    <MapPinIcon size={14} className="text-accent" /> Location of Property
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

        {/* Removed CTA Section */}

      </section>
    </main>
  );
}