"use client";
import { motion } from "framer-motion";
import { Trees, Landmark, Map, Home, Building, RefreshCw } from "lucide-react";

export default function RealEstatePage() {
  const categories = [
    { title: "Farmlands", description: "Premium agricultural lands suitable for long-term investment and sustainable returns.", Icon: Trees },
    { title: "Commercial Lands", description: "Strategically located commercial plots ideal for business development and high ROI.", Icon: Landmark },
    { title: "Open Plots", description: "Clear-title open plots in developing regions with strong future appreciation potential.", Icon: Map },
    { title: "Villa Plots", description: "Exclusive villa plots in gated layouts designed for premium residential living.", Icon: Home },
    { title: "New Apartment Flats", description: "Modern residential apartments with contemporary amenities and prime locations.", Icon: Building },
    { title: "Resale Flats", description: "Well-maintained resale properties offering value-driven investment opportunities.", Icon: RefreshCw },
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
          <span className="subheading">Exclusive Portfolio</span>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white">Real Estate <br /><span className="text-gradient-accent">Opportunities</span></h1>
          <p className="text-slate-300 max-w-[700px] text-xl font-light leading-relaxed">
            Curating a diversified portfolio of high-value properties selected specifically to meet modern investment goals and premium lifestyle requirements.
          </p>
        </motion.div>

        {/* Real Estate Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white border-b border-white/10 pb-4">Real Estate Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group hover:border-industrial-rust/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-industrial-rust/10 text-industrial-rustLight flex items-center justify-center mb-6 group-hover:bg-industrial-rust group-hover:text-white transition-all duration-300">
                <cat.Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{cat.title}</h3>
              <p className="text-slate-400 leading-relaxed">{cat.description}</p>
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
          <h3 className="text-2xl font-bold text-white mb-6">Looking for a specific property type?</h3>
          <a href="/contact" className="btn-premium inline-block py-4 px-10 text-base">
            Discuss Your Requirements
          </a>
        </motion.div>
      </section>
    </main>
  );
}