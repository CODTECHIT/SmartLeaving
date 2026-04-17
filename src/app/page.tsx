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
    <main className="bg-background">
      <Hero />

      {/* What We Do Section */}
      <section className="section-container relative bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mesh-bg opacity-10 z-0" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subheading">Our Expertise</span>
              <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900 leading-tight">
                Tailored Solutions for <span className="text-gradient-accent">Global Scale</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-premium-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 opacity-30 z-0" />
        <div className="section-container relative z-10 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-black mb-3 text-white tracking-tighter">
                  <Counter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-slate-500">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section className="section-container bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[800px]"
          >
            <span className="subheading">Proven Impact</span>
            <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900 leading-tight">Case Studies</h2>
            <p className="text-premium-600 text-lg md:text-xl font-medium leading-relaxed">
              We deliver exceptional outcomes through strategic capital allocation and operational excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/industrial" className="btn-outline flex items-center gap-4 group px-12">
              View All Case Studies <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] mb-8 bg-slate-50 shadow-2xl group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-1000">
                <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-premium-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-8 left-8 py-2.5 px-5 rounded-2xl bg-white/95 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] text-accent shadow-xl">
                  {study.category}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 text-premium-900 group-hover:text-accent transition-colors tracking-tight">{study.title}</h3>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-premium-500 font-bold text-sm">{study.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Process */}
      <section className="py-20 bg-premium-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full z-0" />
        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <span className="subheading text-accent-light">The Methodology</span>
            <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter text-white leading-tight">Strategic Execution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="text-[6rem] md:text-[10rem] font-black text-white/5 absolute -top-12 md:-top-24 -left-4 md:-left-8 leading-none select-none group-hover:text-accent/10 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 text-accent-light flex items-center justify-center mb-10 border border-white/10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-700 shadow-2xl">
                    <step.icon size={36} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight text-white group-hover:text-accent-light transition-colors">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-medium text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Pillars */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <span className="subheading">Core Advantages</span>
          <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter text-premium-900 leading-tight">Why Partner With Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Global Insight", description: "Deep industry expertise across diverse sectors and international markets.", Icon: Award },
            { title: "Strategic Network", description: "Direct access to elite institutional investors and strategic partners.", Icon: UserCheck },
            { title: "Results Driven", description: "Our success is measured solely by the measurable outcomes we deliver for clients.", Icon: BarChart4 },
            { title: "Tailored Focus", description: "We don't believe in one-size-fits-all; every solution is bespoke to your needs.", Icon: TrendingUp },
          ].map((pillar, index) => (
            <Pillar key={index} {...pillar} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Clients Bar */}
      <section className="py-10 bg-white/50 border-y border-slate-100 overflow-hidden">
        <div className="section-container py-0">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {clientLogos.map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-extrabold tracking-tighter text-slate-900">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full mesh-bg opacity-10 z-0" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">Ready to Scale Your Vision?</h2>
            <p className="text-slate-300 text-xl md:text-2xl font-light mb-12 leading-relaxed">
              Let's discuss how our strategic capital and advisory can drive your industrial or real estate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-premium w-full sm:w-auto px-12 py-5 text-lg">
                Book a Strategy Call
              </Link>
              <Link href="/about" className="btn-outline border-white/20 text-white hover:bg-white/10 w-full sm:w-auto px-12 py-5 text-lg">
                Learn About Our Firm
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}