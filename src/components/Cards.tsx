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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card group flex flex-col h-full bg-white border-slate-100 hover:border-accent/20 transition-all duration-700"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 shadow-2xl">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-premium-900/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white shadow-2xl group-hover:-translate-y-1">
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>
      
      <h3 className="text-2xl font-black mb-4 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-premium-600 leading-relaxed mb-8 flex-grow font-medium text-sm md:text-base">{description}</p>
      
      <Link href={href} className="inline-flex items-center gap-3 text-[10px] font-black text-premium-400 group-hover:text-accent group-hover:gap-5 transition-all uppercase tracking-[0.4em] group/link">
        Explore Strategy 
        <span className="text-accent group-hover/link:translate-x-1 transition-transform">→</span>
      </Link>
    </motion.div>
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
      className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,98,255,0.05)] hover:border-accent/20 transition-all duration-700 text-left flex flex-col items-start group"
    >
      <div className="w-16 h-16 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <h4 className="text-2xl font-black mb-4 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{title}</h4>
      <p className="text-premium-600 text-base leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
};