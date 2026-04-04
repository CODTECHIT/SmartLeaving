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
      className="glass-card group flex flex-col h-full"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-steel-900/40 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-accent/20 backdrop-blur-md border border-white/10 text-white transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-accent-light transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6 flex-grow font-light text-sm">{description}</p>
      
      <Link href={href} className="inline-flex items-center gap-3 text-sm font-bold text-slate-300 group-hover:gap-5 transition-all uppercase tracking-[0.2em] group/link">
        Learn More 
        <span className="text-accent-light group-hover/link:translate-x-1 transition-transform">→</span>
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
      className="p-8 rounded-3xl bg-steel-800/30 border border-white/5 hover:border-accent/30 transition-all text-left flex flex-col items-start group"
    >
      <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-bold mb-3 text-white tracking-tight">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};