"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-32 pb-20">
      {/* Cinematic Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Strategic Industrial & Real Estate Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Advanced Multi-layered Overlay for Depth with Navy Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950 z-10" />
        {/* Deep atmospheric navy glow */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full z-10" />
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30 z-10" />
      </div>
      
      <div className="section-container relative z-20">
        <div className="max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-slate-500" 
              />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Strategic Capital & Advisory</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.05] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                Global Investment
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="serif-emphasis text-slate-300 inline-block"
              >
                Advisory
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                for
              </motion.span> <br className="hidden lg:block" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                Industrial Properties,
              </motion.span> <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-block"
              >
                Real Assets &
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="serif-emphasis text-slate-300 inline-block"
              >
                Financial Solutions
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 mb-14 max-w-[800px] font-medium leading-relaxed tracking-tight border-l border-white/10 pl-8"
          >
            We specialize in facilitating high-value industrial properties, real estate transactions, and financial solutions between buyers and sellers across domestic and international markets. We ensure every deal is handled with integrity, strategic matching, and dedicated support.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-8 items-center"
          >
            <Link href="/contact" className="btn-premium w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform">
              Get Started Now
            </Link>
            <Link href="/industrial" className="btn-outline-dark w-full sm:w-auto hover:bg-white hover:text-black transition-all">
              View Our Expertise
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8 md:gap-16 mt-12 md:mt-20 pt-10 border-t border-white/5"
          >
            <div className="group cursor-default">
              <div className="text-3xl font-black text-white mb-1">100+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Global Leaders Trusted</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-black text-white mb-1">$500M+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Capital Facilitated</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dramatic Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-5"
      >
        <span className="text-[11px] uppercase tracking-[0.5em] font-black text-white/40">Discover More</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;