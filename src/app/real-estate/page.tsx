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
    <main className="bg-background pt-20">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="subheading">Exclusive Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-premium-900 leading-none">Real Estate <br /><span className="text-gradient-accent">Opportunities</span></h1>
          <p className="text-premium-600 max-w-[800px] text-xl md:text-2xl font-medium leading-relaxed">
            Curating a diversified portfolio of high-value properties selected specifically to meet modern investment goals and premium lifestyle requirements.
          </p>
        </motion.div>

        {/* Real Estate Services Grid */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-premium-900 border-b border-slate-100 pb-4">Real Estate Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-accent/5 text-accent flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                <cat.Icon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-premium-900 tracking-tight group-hover:text-accent transition-colors">{cat.title}</h3>
               <p className="text-premium-600 leading-relaxed font-medium text-lg">{cat.description}</p>
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
          <h3 className="text-3xl font-black text-premium-900 mb-10 tracking-tighter">Looking for a specific property type?</h3>
          <a href="/contact" className="btn-premium inline-block py-5 px-12 text-lg">
            Discuss Your Requirements
          </a>
        </motion.div>
      </section>
    </main>
  );
}