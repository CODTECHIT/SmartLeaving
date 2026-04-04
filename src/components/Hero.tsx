"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-steel-900 pt-20">
      {/* Cinematic Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Futuristic Industrial City Background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        {/* Dark Steel Overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-steel-900/85 via-steel-900/70 to-steel-900/90 z-10" />
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-20 z-10" />
      </div>
      
      <div className="section-container relative z-20">
        <div className="max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subheading">Strategic Capital & Advisory</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
              Strategic Capital & Advisory for <span className="text-gradient-accent">Industrial & Real Estate Growth</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-[700px] font-light leading-relaxed"
          >
            We help industrial and real estate businesses scale with structured capital, expert advisory, and execution-driven strategies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <Link href="/contact" className="btn-premium w-full sm:w-auto text-center py-4 px-8 text-base">
              Book a Free Strategy Call
            </Link>
            <Link href="/industrial" className="btn-outline w-full sm:w-auto text-center py-4 px-8 text-base">
              Explore Our Solutions
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent-light font-bold text-sm">✓</span>
              </div>
              <span className="text-slate-300 font-medium">Trusted by 100+ companies</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent-light font-bold text-sm">$</span>
              </div>
              <span className="text-slate-300 font-medium">$500M+ capital facilitated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Accent Elements Removed to Reduce Glare */}
      {/* <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full z-0 animate-pulse-slow" /> */}
      {/* <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-steel-700/20 blur-[100px] rounded-full z-0 animate-pulse-slow" /> */}
      
      {/* Dramatic Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-4 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">Scroll</span>
        <div className="w-[1px] h-16 bg-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;