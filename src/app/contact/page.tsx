"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-steel-900 pt-20">
      <section className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <span className="subheading">Get In Touch</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white">Let's Build <br /><span className="text-gradient-accent">Something Great</span></h1>
          <p className="text-slate-300 max-w-[700px] text-xl font-light leading-relaxed">
            Connect with our team of experts to explore high-value industrial projects, discuss strategic investments, or learn more about our tailored solutions.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              alert("Message sent! Our team will contact you soon.");
            }}
            className="glass-card space-y-8"
          >
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full p-4 bg-steel-800 border border-white/10 focus:border-accent transition-all rounded-2xl outline-none text-white font-light" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-steel-800 border border-white/10 focus:border-accent transition-all rounded-2xl outline-none text-white font-light" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Service of Interest</label>
              <select required className="w-full p-4 bg-steel-800 border border-white/10 focus:border-accent transition-all rounded-2xl outline-none text-slate-300 font-light appearance-none">
                <option value="" className="bg-steel-900">Select a service</option>
                <option value="industrial" className="bg-steel-900">Industrial Projects</option>
                <option value="funding" className="bg-steel-900">Industrial Funding</option>
                <option value="realestate" className="bg-steel-900">Real Estate Investment</option>
                <option value="insurance" className="bg-steel-900">Insurance Solutions</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Message</label>
              <textarea rows={4} required placeholder="How can we help you?" className="w-full p-4 bg-steel-800 border border-white/10 focus:border-accent transition-all rounded-2xl outline-none text-white font-light" />
            </div>
            <button type="submit" className="btn-premium w-full py-5 text-lg">Send Message</button>
          </motion.form>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="subheading mb-6">Our Location</h3>
              <p className="text-3xl font-bold text-white tracking-tight">Hyderabad, Telangana, India</p>
            </div>
            <div>
              <h3 className="subheading mb-6">Email Us</h3>
              <p className="text-3xl font-bold text-white tracking-tight hover:text-accent-light transition-colors cursor-pointer">excellence@smartleaving.com</p>
            </div>
            <div>
              <h3 className="subheading mb-6">Call Us</h3>
              <p className="text-3xl font-bold text-white tracking-tight hover:text-accent-light transition-colors cursor-pointer">+91 91234 56789</p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-slate-300 font-light leading-relaxed italic border-l-4 border-accent pl-6 text-xl">
                "We are ready to assist you with professional guidance and reliable solutions tailored to your unique requirements."
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
