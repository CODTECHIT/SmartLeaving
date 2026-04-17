"use client";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Award, Users, TrendingUp, Shield, Globe } from "lucide-react";

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
    <main className="bg-background pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="subheading">Who We Are</span>
          <h1 className="text-4xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-[1.1] md:leading-none">
            Building Futures Through <br /><span className="text-gradient-accent">Strategic Partnership</span>
          </h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Smartliving is a premier strategic capital and advisory firm specializing in industrial growth, real estate opportunities, and financial structuring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "$500M+", label: "Capital Facilitated" },
            { value: "100+", label: "Clients Served" },
            { value: "50+", label: "Industries Covered" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,98,255,0.05)] transition-all duration-700 group"
            >
              <div className="text-6xl font-black text-premium-900 mb-4 tracking-tighter group-hover:text-accent transition-colors">{stat.value}</div>
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <span className="subheading">Our Foundation</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1">
                  <value.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-premium-900 mb-4 tracking-tight group-hover:text-accent transition-colors">{value.title}</h3>
                <p className="text-premium-600 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <span className="subheading">Our Approach</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", icon: Target, title: "Analyze", desc: "We dive deep into your business model, market position, and growth objectives to identify opportunities and barriers." },
              { step: "02", icon: Lightbulb, title: "Structure", desc: "Our experts craft bespoke financial solutions, operational strategies, and investment frameworks tailored to your needs." },
              { step: "03", icon: Rocket, title: "Execute", desc: "We partner with you to implement strategies, secure capital, and deliver measurable outcomes that drive growth." },
            ].map((process, idx) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass-card text-center group"
              >
                <span className="text-accent text-8xl font-black opacity-5 absolute top-4 left-1/2 -translate-x-1/2 group-hover:opacity-10 transition-opacity select-none">{process.step}</span>
                <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mx-auto mb-10 mt-6 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                  <process.icon size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-black text-premium-900 mb-6 tracking-tight group-hover:text-accent transition-colors">{process.title}</h3>
                <p className="text-premium-600 leading-relaxed font-medium text-lg">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <span className="subheading">The Experts</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900">Our Strategic Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,98,255,0.05)] hover:border-accent/20 transition-all duration-700 group"
              >
                <h3 className="text-2xl font-black text-premium-900 mb-2 tracking-tight group-hover:text-accent transition-colors">{member.name}</h3>
                <span className="text-accent-light text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">{member.role}</span>
                <p className="text-premium-600 text-base leading-relaxed font-medium">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center pb-16">
          <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter text-premium-900 leading-[1.1]">Ready to Partner <br />with Us?</h2>
          <p className="text-premium-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
            Let's discuss how we can help you achieve your business goals with strategic capital and advisory.
          </p>
          <a href="/contact" className="btn-premium py-5 px-12 text-lg inline-block">
            Book Your Free Strategy Call
          </a>
        </div>
      </section>
    </main>
  );
}