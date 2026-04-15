"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-background pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="subheading">Get In Touch</span>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-none">Let's Build <br /><span className="text-gradient-accent">Something Great</span></h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Connect with our team of experts to explore high-value industrial projects and strategic investments.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              alert("Message sent! Our team will contact you soon.");
            }}
            className="glass-card space-y-10 p-12"
          >
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full p-5 bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white transition-all rounded-2xl outline-none text-premium-900 font-bold placeholder:text-slate-300 shadow-sm" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full p-5 bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white transition-all rounded-2xl outline-none text-premium-900 font-bold placeholder:text-slate-300 shadow-sm" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Service of Interest</label>
              <select required className="w-full p-5 bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white transition-all rounded-2xl outline-none text-premium-900 font-bold appearance-none shadow-sm">
                <option value="" className="bg-white">Select a service</option>
                <option value="industrial" className="bg-white">Industrial Projects</option>
                <option value="funding" className="bg-white">Industrial Funding</option>
                <option value="realestate" className="bg-white">Real Estate Investment</option>
                <option value="insurance" className="bg-white">Insurance Solutions</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Message</label>
              <textarea rows={4} required placeholder="How can we help you?" className="w-full p-5 bg-slate-50 border border-slate-100 focus:border-accent focus:bg-white transition-all rounded-2xl outline-none text-premium-900 font-bold placeholder:text-slate-300 shadow-sm" />
            </div>
            <button type="submit" className="btn-premium w-full py-6 text-xl shadow-2xl">Send Message</button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div>
              <h3 className="subheading mb-8">Our Location</h3>
              <p className="text-4xl font-black text-premium-900 tracking-tighter">Hyderabad, Telangana, India</p>
            </div>
            <div>
              <h3 className="subheading mb-8">Email Us</h3>
              <p className="text-4xl font-black text-premium-900 tracking-tighter hover:text-accent transition-colors cursor-pointer underline decoration-accent/30 underline-offset-8">excellence@smartliving.com</p>
            </div>
            <div>
              <h3 className="subheading mb-8">Call Us</h3>
              <p className="text-4xl font-black text-premium-900 tracking-tighter hover:text-accent transition-colors cursor-pointer">+91 91234 56789</p>
            </div>

            <div className="pt-16 border-t border-slate-100">
              <p className="text-premium-600 font-medium leading-relaxed italic border-l-8 border-accent pl-10 text-2xl">
                "We are ready to assist you with professional guidance and reliable solutions tailored to your unique requirements."
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
