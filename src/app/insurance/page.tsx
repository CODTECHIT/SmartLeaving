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
    <main className="bg-background pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="subheading">Reliability First</span>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-none">Insurance <br /><span className="text-gradient-accent">Solutions</span></h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Protecting what matters most through reliable, transparent, and comprehensive insurance offerings built for individuals and organizations alike.
          </p>
        </motion.div>

        {/* Insurance Services Grid */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-premium-900 border-b border-slate-100 pb-4">Insurance Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {insurancePlans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                <plan.Icon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{plan.title}</h3>
              <p className="text-premium-600 leading-relaxed font-medium text-lg md:text-xl">{plan.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center pb-16"
        >
          <h3 className="text-3xl font-black text-premium-900 mb-10 tracking-tighter">Need expert insurance advice?</h3>
          <a href="/contact" className="btn-premium inline-block py-5 px-12 text-lg">
            Get a Personalized Quote
          </a>
        </motion.div>
      </section>
    </main>
  );
}