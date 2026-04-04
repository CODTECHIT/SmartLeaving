"use client";
import { motion } from "framer-motion";
import { Users, Shield, Heart, UserCheck } from "lucide-react";

export default function InsurancePage() {
  const insurancePlans = [
    { title: "Group Health Insurance", description: "Comprehensive health coverage solutions for organizations to safeguard employee well-being.", Icon: Users },
    { title: "Property Insurance", description: "Protection plans designed to secure residential and commercial properties against unforeseen risks.", Icon: Shield },
    { title: "Personal Health Insurance", description: "Flexible health insurance policies ensuring financial security during medical emergencies.", Icon: Heart },
    { title: "Life Insurance", description: "Long-term financial protection plans that secure the future of your loved ones.", Icon: UserCheck },
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
          <span className="subheading">Reliability First</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white">Insurance <br /><span className="text-gradient-accent">Solutions</span></h1>
          <p className="text-slate-300 max-w-[700px] text-xl font-light leading-relaxed">
            Protecting what matters most through reliable, transparent, and comprehensive insurance offerings built for individuals and organizations alike.
          </p>
        </motion.div>

        {/* Insurance Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white border-b border-white/10 pb-4">Insurance Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insurancePlans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group hover:border-industrial-rust/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-industrial-rust/10 text-industrial-rustLight flex items-center justify-center mb-6 group-hover:bg-industrial-rust group-hover:text-white transition-all duration-300">
                <plan.Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{plan.title}</h3>
              <p className="text-slate-400 leading-relaxed">{plan.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Need insurance advice?</h3>
          <a href="/contact" className="btn-premium inline-block py-4 px-10 text-base">
            Get a Quote
          </a>
        </motion.div>
      </section>
    </main>
  );
}