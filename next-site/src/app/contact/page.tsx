"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 pt-32">
      {/* Cinematic Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-30 grayscale" />
        <div className="section-container relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-slate-500" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Global Connectivity</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              Build Wealth Through <br /><span className="font-serif italic capitalize font-light text-slate-300 tracking-normal">Strategic Ownership</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-container -mt-16 relative z-30 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              alert("Message sent! Our team will contact you soon.");
            }}
            className="bg-white p-12 md:p-20 rounded-[4rem] shadow-[0_50px_150px_rgba(0,0,0,0.06)] border border-slate-50 space-y-10"
          >
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full p-6 bg-slate-50 border border-slate-100 focus:border-slate-900 focus:bg-white transition-all rounded-2xl outline-none text-slate-900 font-bold placeholder:text-slate-300" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full p-6 bg-slate-50 border border-slate-100 focus:border-slate-900 focus:bg-white transition-all rounded-2xl outline-none text-slate-900 font-bold placeholder:text-slate-300" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Service of Interest</label>
              <select required className="w-full p-6 bg-slate-50 border border-slate-100 focus:border-slate-900 focus:bg-white transition-all rounded-2xl outline-none text-slate-900 font-bold appearance-none">
                <option value="" className="bg-white">Select a service</option>
                <option value="industrial" className="bg-white">Industrial Projects</option>
                <option value="funding" className="bg-white">Industrial Funding</option>
                <option value="realestate" className="bg-white">Real Estate Investment</option>
                <option value="insurance" className="bg-white">Insurance Solutions</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">Message</label>
              <textarea rows={4} required placeholder="How can we help you?" className="w-full p-6 bg-slate-50 border border-slate-100 focus:border-slate-900 focus:bg-white transition-all rounded-2xl outline-none text-slate-900 font-bold placeholder:text-slate-300 resize-none" />
            </div>
            <button type="submit" className="btn-premium !bg-slate-900 w-full py-8 text-2xl shadow-2xl rounded-[2rem] hover:!bg-black transition-colors">Send Inquiry</button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-20 pt-12"
          >
            <div>
              <h3 className="subheading !text-slate-400 mb-8">Our Location</h3>
              <p className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">Hyderabad, <br />Telangana, India</p>
            </div>
            <div>
              <h3 className="subheading !text-slate-400 mb-8">Direct Email</h3>
              <p className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter hover:text-slate-600 transition-colors cursor-pointer underline decoration-slate-200 underline-offset-12">excellence@smartliving.com</p>
            </div>
            <div>
              <h3 className="subheading !text-slate-400 mb-8">Strategic Support</h3>
              <p className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter hover:text-slate-600 transition-colors cursor-pointer">+91 91234 56789</p>
            </div>

            <div className="pt-20 border-t border-slate-200">
              <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-200 pl-10 text-2xl md:text-3xl max-w-lg">
                "We are ready to assist you with professional guidance and reliable solutions tailored to your unique requirements."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
