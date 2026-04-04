"use client";
import Hero from "@/components/Hero";
import { ServiceCard, Pillar } from "@/components/Cards";
import { Factory, Building2, ShieldCheck, Award, BarChart4, UserCheck, TrendingUp, ArrowRight, CheckCircle2, Target, Lightbulb, Rocket } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter";

export default function Home() {
  const services = [
    {
      title: "Industrial Growth",
      description: "Scaling operations and infrastructure with strategic capital, operational consulting, and execution-driven growth strategies for manufacturing and logistics.",
      Icon: Factory,
      href: "/industrial"
    },
    {
      title: "Real Estate Advisory",
      description: "Investment and development strategy for commercial, residential, and industrial properties. We identify high-value opportunities and structure deals for maximum ROI.",
      Icon: Building2,
      href: "/real-estate"
    },
    {
      title: "Financial Structuring",
      description: "Capital raising and deal structuring tailored to your business model. We access diverse funding sources and create optimal financial solutions.",
      Icon: ShieldCheck,
      href: "/contact"
    }
  ];

  const metrics = [
    { value: 500, suffix: "M+", label: "Capital Facilitated", prefix: "$" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Clients Served" },
    { value: 50, suffix: "+", label: "Industries Served" },
  ];

  const caseStudies = [
    {
      title: "Pharma Manufacturing Scale-Up",
      category: "Industrial Growth",
      client: "PharmaCore Industries",
      challenge: "Needed to expand production capacity by 300% while securing regulatory compliance.",
      result: "Secured $45M in structured funding, implemented lean operations, achieved 200% growth within 18 months.",
      image: "/industrial.png",
    },
    {
      title: "Commercial Portfolio Optimization",
      category: "Real Estate Advisory",
      client: "Global Realty Partners",
      challenge: "Underperforming commercial assets across 5 major cities with $120M in holdings.",
      result: "Restructured portfolio, identified 3 high-potential developments, delivered 35% IRR improvement.",
      image: "/real-estate.png",
    },
    {
      title: "Cross-Border Acquisition Financing",
      category: "Financial Structuring",
      client: "Manufacturing Conglomerate",
      challenge: "Acquired international competitor with complex multi-jurisdictional requirements.",
      result: "Structured $85M multi-tranche financing with optimal debt-equity ratio, closed in 6 months.",
      image: "/industrial.png",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyze",
      description: "We dive deep into your business model, market position, and growth objectives to identify opportunities and barriers.",
      icon: Target,
    },
    {
      step: "02",
      title: "Structure",
      description: "Our experts craft bespoke financial solutions, operational strategies, and investment frameworks tailored to your needs.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Execute",
      description: "We partner with you to implement strategies, secure capital, and deliver measurable outcomes that drive growth.",
      icon: Rocket,
    },
  ];

  const clientLogos = [
    "PharmaCore", "Global Realty", "TechFlow", "Infrabuild", "LogiTech", "CapitalEdge", "BuildRight", "NextGen"
  ];

  return (
    <main className="bg-steel-900">
      <Hero />
      
      {/* What We Do Section */}
      <section className="section-container relative bg-steel-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mesh-bg opacity-30 z-0" />
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="subheading">What We Do</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">Expertise That Delivers Results</h2>
            <div className="w-24 h-1 bg-accent" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <section className="py-24 bg-steel-800/50 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Client Logos */}
          <div className="mb-20">
            <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-[0.3em] mb-12">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clientLogos.map((logo, idx) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-slate-500 font-bold text-lg md:text-xl tracking-tight hover:text-accent-light transition-colors cursor-default"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  <Counter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-container relative bg-steel-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mesh-bg opacity-20 z-0" />
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="subheading">Case Studies</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">Proven Results</h2>
            <div className="w-24 h-1 bg-accent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 text-accent-light text-xs font-medium uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider mb-2 block">
                    {study.client}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-light transition-colors">
                    {study.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Challenge</span>
                    <p className="text-slate-300 text-sm mt-1">{study.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-accent-light text-xs font-medium uppercase tracking-wider">Result</span>
                    <p className="text-white text-sm font-semibold mt-1">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/contact" className="btn-outline-dark inline-flex items-center gap-3 py-3 px-8">
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-steel-800/30 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="subheading">Our Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">How We Deliver Results</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A proven methodology focused on outcomes, not just advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((process, idx) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="glass-card text-center p-10 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent-light flex items-center justify-center mx-auto mb-6">
                    <process.icon size={28} />
                  </div>
                  <span className="text-accent text-6xl font-extrabold opacity-20 absolute top-4 right-6">
                    {process.step}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{process.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{process.description}</p>
                </div>
                
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-accent/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container relative bg-steel-900 overflow-hidden">
        {/* Background Effects */}
        {/* Glaring Background Effects Removed */}
        {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" /> */}
        {/* <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-steel-700/20 blur-[100px] rounded-full pointer-events-none" /> */}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <span className="subheading">Ready to Scale?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-white">
            Ready to Scale Your Next Investment?
          </h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed">
            Partner with a team that brings 10+ years of experience and $500M+ in capital facilitation. Let's turn your vision into measurable outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact" className="btn-premium py-4 px-10 text-base">
              Schedule a Consultation
            </Link>
            <Link href="/industrial" className="btn-outline py-4 px-10 text-base">
              Explore Our Solutions
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container relative bg-steel-800/50 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12"
          >
            <div className="max-w-[600px]">
              <span className="subheading">Why SmartLeaving</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">Your Strategic Partner</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                We combine deep industry expertise with a commitment to long-term value and strategic growth, delivering results that transcend traditional boundaries.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Trusted Expertise", desc: "10+ years in high-value industrial and real estate sectors.", Icon: Award },
              { title: "Strategic Funding", desc: "Access to funding up to ₹500 Crores for scalable growth.", Icon: BarChart4 },
              { title: "Client Focused", desc: "Tailored solutions built on transparency and long-term partnerships.", Icon: UserCheck },
              { title: "Results Driven", desc: "Proven track record with measurable outcomes for every client.", Icon: TrendingUp },
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-steel-900/50 border border-white/5 hover:border-accent/30 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <pillar.Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}