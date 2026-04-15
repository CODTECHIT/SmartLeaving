"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-20">
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
        {/* Dark Slate Overlay for premium Royal Slate look */}
        <div className="absolute inset-0 bg-gradient-to-b from-premium-900/90 via-premium-900/70 to-premium-900/90 z-10" />
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 z-10" />
      </div>
      
      <div className="section-container relative z-20">
        <div className="max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="subheading text-accent-light">Strategic Capital & Advisory</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1] tracking-tight text-white">
              Elevate Your <span className="text-gradient-accent">Industrial & Real Estate</span> Potential
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-[800px] font-medium leading-relaxed"
          >
            We partner with visionary businesses to deliver structured capital, bespoke advisory, and growth strategies that redefine industry standards.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="/contact" className="btn-premium w-full sm:w-auto text-center py-5 px-10 text-lg">
              Get Started Now
            </Link>
            <Link href="/industrial" className="btn-outline-dark w-full sm:w-auto text-center py-5 px-10 text-lg">
              View Our Expertise
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                <span className="text-accent-light font-black text-lg">✓</span>
              </div>
              <span className="text-slate-300 font-semibold tracking-tight">Trusted by 100+ Global Leaders</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                <span className="text-accent-light font-black text-lg">$</span>
              </div>
              <span className="text-slate-300 font-semibold tracking-tight">$500M+ Capital Facilitated</span>
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Discover</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;