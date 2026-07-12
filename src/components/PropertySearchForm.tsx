"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Layers,
  IndianRupee,
  MapPin as MapPinIcon,
  MessageSquare,
  Send,
  Phone as PhoneIcon,
} from "lucide-react";

export default function PropertySearchForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    landType: "",
    cost: "",
    location: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div className="pt-16 border-t border-stone-200">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="subheading mx-auto !text-amber-700">
            Property Search
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-950 tracking-tighter mb-6">
            Share Your{" "}
            <span className="font-serif italic font-light text-stone-400">
              Vision
            </span>
          </h2>
          <p className="text-stone-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Finding the perfect match for your portfolio. Tell us your
            requirements and we will unlock the exclusive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.05)] relative overflow-hidden border border-stone-100"
        >
          <div className="absolute top-0 left-0 w-3 h-full bg-amber-600" />

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <User size={14} className="text-amber-600" /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full bg-stone-50 border border-stone-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium text-stone-900"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <PhoneIcon size={14} className="text-amber-600" /> Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
                className="w-full bg-stone-50 border border-stone-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium text-stone-900"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <Layers size={14} className="text-amber-600" /> Type of Land
              </label>
              <input
                type="text"
                name="landType"
                required
                value={formData.landType}
                onChange={handleInputChange}
                placeholder="e.g. Farmland, Open Plot"
                className="w-full bg-stone-50 border border-stone-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium text-stone-900"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <IndianRupee size={14} className="text-amber-600" /> Approximate Cost
              </label>
              <input
                type="text"
                name="cost"
                required
                value={formData.cost}
                onChange={handleInputChange}
                placeholder="Estimated budget"
                className="w-full bg-stone-50 border border-stone-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium text-stone-900"
              />
            </div>

            <div className="md:col-span-2 space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <MapPinIcon size={14} className="text-amber-600" /> Location of Property
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City or region"
                className="w-full bg-stone-50 border border-stone-100 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium text-stone-900"
              />
            </div>

            <div className="md:col-span-2 space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 flex items-center gap-3">
                <MessageSquare size={14} className="text-amber-600" /> Write us if any
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any specific requirements or notes..."
                className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500 transition-all font-medium resize-none text-stone-900"
              />
            </div>

            <div className="md:col-span-2 pt-8">
              <button
                type="submit"
                className="w-full btn-premium !bg-amber-700 py-6 text-xl flex items-center justify-center gap-6 group rounded-xl shadow-2xl hover:!bg-amber-800 transition-colors"
              >
                Send to WhatsApp
                <Send
                  size={28}
                  className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500"
                />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
