"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  image?: string;
}

export const ServiceCard = ({ title, description, Icon, href }: ServiceCardProps) => {
  const imageMap: Record<string, string> = {
    "Industrial Growth": "/industrial.png",
    "Real Estate Advisory": "/real-estate.png",
    "Financial Structuring": "/insurance.png",
  };

  const imageUrl = imageMap[title] || "/hero.png";

  return (
    <Link href={href} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card flex flex-col h-full bg-white border border-slate-100 transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_100px_rgba(15,23,42,0.12)] !p-0 overflow-hidden"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-95 group-hover:opacity-100" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
          <div className="absolute top-8 left-8 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/50 text-accent transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white shadow-2xl group-hover:-translate-y-2">
            <Icon size={28} strokeWidth={2.5} />
          </div>
        </div>
        
        <div className="p-6 md:p-10 flex flex-col flex-grow">
          <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-premium-900 tracking-tight group-hover:text-black transition-colors">{title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6 md:mb-10 flex-grow font-medium text-base md:text-lg">{description}</p>
          
          <div className="inline-flex items-center gap-4 text-[11px] font-black text-slate-400 group-hover:text-black group-hover:gap-6 transition-all uppercase tracking-[0.5em] group/link">
            Explore Strategy 
            <span className="text-slate-300 group-hover/link:text-black group-hover/link:translate-x-2 transition-all">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

interface PillarProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const Pillar = ({ title, description, Icon }: PillarProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 md:p-12 rounded-[3rem] bg-white border border-slate-50 shadow-[0_20px_60px_rgba(0,0,0,0.01)] transition-all duration-700 text-left flex flex-col items-start group hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-slate-200"
    >
      <div className="w-20 h-20 rounded-[2rem] bg-slate-50 text-slate-900 flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
        <Icon size={36} strokeWidth={2.2} />
      </div>
      <h4 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-premium-900 tracking-tight group-hover:text-black transition-colors">{title}</h4>
      <p className="text-slate-500 text-lg leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
};