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
    <main className="bg-steel-900 pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="subheading">Who We Are</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white">
            Building Futures Through <span className="text-gradient-accent">Strategic Partnership</span>
          </h1>
          <p className="text-slate-300 max-w-[700px] text-xl font-light leading-relaxed">
            SmartLeaving is a premier strategic capital and advisory firm specializing in industrial growth, real estate opportunities, and financial structuring. We bridge the gap between ambitious enterprises and the capital they need to succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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
              className="text-center p-8 rounded-3xl bg-steel-800/30 border border-white/5"
            >
              <div className="text-5xl font-extrabold text-industrial-rust mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <span className="subheading">Our Foundation</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-white">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-industrial-rust/10 text-industrial-rustLight flex items-center justify-center mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <span className="subheading">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-white">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="glass-card text-center"
              >
                <span className="text-industrial-rust text-6xl font-extrabold opacity-20">{process.step}</span>
                <div className="w-16 h-16 rounded-2xl bg-industrial-rust/20 text-industrial-rustLight flex items-center justify-center mx-auto mb-6 mt-4">
                  <process.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{process.title}</h3>
                <p className="text-slate-400 leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32">
          <span className="subheading">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-white">The People Behind SmartLeaving</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card text-center"
              >
                <div className="w-20 h-20 rounded-full bg-industrial-rust/20 flex items-center justify-center mx-auto mb-6">
                  <Users size={40} className="text-industrial-rustLight" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{member.name}</h4>
                <span className="text-industrial-rust text-sm font-medium uppercase tracking-wider">{member.role}</span>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center pb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-white">Ready to Partner with Us?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <a href="/contact" className="btn-premium py-4 px-10 text-base inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}