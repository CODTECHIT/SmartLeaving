"use client";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Award, Users, TrendingUp, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Strategic Vision", desc: "We identify opportunities others miss and craft pathways to success." },
    { icon: Shield, title: "Trust & Integrity", desc: "Transparency is our foundation. We deliver on every commitment." },
    { icon: TrendingUp, title: "Results Driven", desc: "Measurable outcomes that create lasting value for our clients." },
    { icon: Globe, title: "Global Perspective", desc: "Local expertise with access to international capital networks." },
  ];

  const team = [
    { name: "Leadership Team", role: "Strategic Direction", desc: "Decades of experience in industrial finance and real estate advisory." },
    { name: "Investment Experts", role: "Capital Solutions", desc: "Specialists in structuring deals across multiple asset classes." },
    { name: "Industry Analysts", role: "Market Intelligence", desc: "Deep sector knowledge driving informed investment decisions." },
    { name: "Operations Team", role: "Execution Excellence", desc: "Dedicated professionals ensuring seamless project delivery." },
  ];

  return (
    <main className="bg-slate-50 pt-32">
      {/* Cinematic Header */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-40 grayscale" />
        <div className="section-container relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-slate-500" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">The Firm</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-[-0.03em] text-white uppercase drop-shadow-2xl">
              Building Futures Through <br /><span className="font-serif italic capitalize font-light text-slate-300 tracking-normal">Strategic Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-[800px] font-medium leading-relaxed tracking-tight border-l border-white/10 pl-8">
              investindiasmart is a premier strategic capital and advisory firm specializing in industrial growth, real estate opportunities, and financial structuring.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container -mt-24 relative z-30 pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "$500M+", label: "Capital Facilitated" },
            { value: "100+", label: "Clients Served" },
            { value: "50+", label: "Industries Covered" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="text-center p-12 rounded-[4rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-1000 border border-slate-50 group"
            >
              <div className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="subheading mx-auto">Our Foundation</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter">Core <span className="font-serif italic font-light text-slate-400">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.02)] group hover:-translate-y-4 transition-all duration-700 border border-slate-50"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-2xl">
                  <value.icon size={32} strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-slate-900 transition-colors leading-tight">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="subheading mx-auto">Our Approach</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter">Strategic <span className="font-serif italic font-light text-slate-400">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", icon: Target, title: "Analyze", desc: "We dive deep into your business model, market position, and growth objectives to identify opportunities and barriers." },
              { step: "02", icon: Lightbulb, title: "Structure", desc: "Our experts craft bespoke financial solutions, operational strategies, and investment frameworks tailored to your needs." },
              { step: "03", icon: Rocket, title: "Execute", desc: "We partner with you to implement strategies, secure capital, and deliver measurable outcomes that drive growth." },
            ].map((process, idx) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-center group relative overflow-hidden text-white"
              >
                <span className="text-white/[0.03] text-[15rem] font-black absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-white/[0.06] transition-all select-none leading-none">{process.step}</span>
                <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 text-white flex items-center justify-center mx-auto mb-10 mt-6 group-hover:bg-white group-hover:text-slate-950 transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                  <process.icon size={44} strokeWidth={2.2} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">{process.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-xl relative z-10">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="subheading mx-auto">The Experts</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter">Strategic <span className="font-serif italic font-light text-slate-400">Leadership</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-12 rounded-[3.5rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-1000 border border-slate-50 group"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight leading-tight">{member.name}</h3>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 block">{member.role}</span>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center pt-24 border-t border-slate-200">
          <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter text-slate-950 leading-none">Ready to <span className="font-serif italic font-light text-slate-400">Scale</span> <br />Your Vision?</h2>
          <p className="text-slate-600 text-xl md:text-3xl mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            Let's discuss how we can help you achieve your business goals with strategic capital and advisory.
          </p>
          <Link href="/contact" className="btn-premium !bg-slate-950 py-8 px-16 text-2xl inline-block shadow-2xl hover:!bg-black transition-colors rounded-[2rem]">
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>
    </main>

  );
}