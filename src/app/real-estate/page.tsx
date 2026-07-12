"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trees,
  Landmark,
  Map,
  Home,
  Building,
  RefreshCw,
  Download,
} from "lucide-react";
import Image from "next/image";
import PropertySearchForm from "@/components/PropertySearchForm";

export default function RealEstatePage() {

  const categories = [
    {
      title: "Farmlands",
      description:
        "Premium agricultural lands suitable for long-term investment and sustainable returns.",
      Icon: Trees,
      downloads: [
        { label: "Brochure 1", url: "/brochures/farmland-1.pptx" },
        { label: "Brochure 2", url: "/brochures/farmland-2.pptx" },
        { label: "Brochure 3", url: "/brochures/farmland-3.pptx" },
      ],
    },
    {
      title: "Commercial Lands",
      description:
        "Strategically located commercial plots ideal for business development and high ROI.",
      Icon: Landmark,
      downloads: [
        { label: "Brochure 1", url: "/brochures/commercial-1.pptx" },
        { label: "Brochure 2", url: "/brochures/commercial-2.pptx" },
        { label: "Brochure 3", url: "/brochures/commercial-3.pptx" },
        { label: "Brochure 4", url: "/brochures/commercial-4.pptx" },
      ],
    },
    {
      title: "Open Plots (development plots)",
      description:
        "Clear-title open plots in developing regions with strong future appreciation potential.",
      Icon: Map,
    },
    {
      title: "Villa Plots",
      description:
        "Exclusive villa plots in gated layouts designed for premium residential living.",
      Icon: Home,
      downloads: [
        { label: "Brochure 1", url: "/brochures/villa-1.pptx" },
        { label: "Brochure 2", url: "/brochures/villa-2.pptx" },
      ],
    },
    {
      title: "New Apartment Flats",
      description:
        "Modern residential apartments with contemporary amenities and prime locations.",
      Icon: Building,
      downloads: [
        { label: "Brochure 1", url: "/brochures/apartment-1.pptx" },
        { label: "Brochure 2", url: "/brochures/apartment-2.pptx" },
      ],
    },
    {
      title: "Resale Flats",
      description:
        "Well-maintained resale properties offering value-driven investment opportunities.",
      Icon: RefreshCw,
    },
  ];

  return (
    <main className="bg-[#FAF9F6] pt-24">
      {/* Cinematic Hero Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-stone-950">
        <Image
          src="/real-estate.png"
          alt="Luxury Residential and Commercial Land Portfolios across Telangana, Andhra Pradesh, and Karnataka"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-amber-600" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-amber-500">
                Curated Portfolio
              </span>
              <div className="w-12 h-[1px] bg-amber-600" />
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              Luxury{" "}
              <span className="serif-emphasis text-stone-300">Residential</span>{" "}
              & <br />
              Commercial{" "}
              <span className="text-amber-500 serif-emphasis">Assets</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 max-w-[900px] mx-auto font-medium leading-relaxed tracking-tight">
              Curating a diversified portfolio of high-value properties selected
              specifically to meet modern investment goals and premium lifestyle
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pt-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-stone-50 group hover:-translate-y-4 transition-all duration-700"
            >
              <div className="w-20 h-20 rounded-[2.5rem] bg-stone-50 text-amber-700 flex items-center justify-center mb-10 group-hover:bg-amber-600 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                <cat.Icon size={36} strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-stone-900 tracking-tight group-hover:text-amber-700 transition-colors leading-tight">
                {cat.title}
              </h3>
              <p className="text-stone-500 leading-relaxed font-medium text-lg md:text-xl mb-6">
                {cat.description}
              </p>

              {cat.downloads && (
                <div className="flex flex-col gap-3">
                  {cat.downloads.map((download, i) => (
                    <a
                      key={i}
                      href={download.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-bold text-sm bg-stone-50 hover:bg-amber-50 px-4 py-3 rounded-xl transition-colors border border-stone-100 group/link"
                    >
                      <Download
                        size={16}
                        className="text-amber-600 group-hover/link:-translate-y-1 transition-transform"
                      />
                      {download.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Requirements Form Section */}
        <PropertySearchForm />
      </section>
    </main>
  );
}
