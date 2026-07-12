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
      <section className="py-10 md:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 opacity-40 z-0" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 z-10" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 text-center">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative group"
              >
                <div className="text-4xl md:text-7xl font-black mb-4 text-white tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  <Counter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                </div>
                <div className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-black text-slate-500 group-hover:text-white transition-colors">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section className="section-container py-12 md:py-20 bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-[850px]"
          >
            <span className="subheading">Proven Impact</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-premium-900 leading-tight">Case Studies</h2>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
              We deliver exceptional outcomes through strategic capital allocation and operational excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/industrial" className="btn-outline group">
              View All Insights <ArrowRight size={22} className="ml-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] mb-10 bg-slate-50 shadow-[0_30px_80px_rgba(0,0,0,0.08)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000">
                <Image src={study.image} alt={`${study.title} - ${study.category} for industrial and real estate investment`} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-premium-900/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-10 left-10 py-3 px-7 rounded-2xl bg-white/95 backdrop-blur-2xl text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 shadow-2xl border border-white/50">
                  {study.category}
                </div>
              </div>
              <h3 className="text-3xl font-black mb-5 text-premium-900 group-hover:text-black transition-colors tracking-tight leading-tight">{study.title}</h3>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-slate-500 font-bold text-base uppercase tracking-widest">{study.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Process */}
      <section className="py-12 md:py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[200px] rounded-full z-0 opacity-40" />
        <div className="section-container relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="subheading !text-slate-500">The Methodology</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-white leading-tight">Strategic Execution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative group"
              >
                <div className="text-[10rem] md:text-[14rem] font-black text-white/[0.03] absolute -top-24 md:-top-32 -left-8 md:-left-12 leading-none select-none group-hover:text-white/[0.06] transition-all duration-700">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 text-white flex items-center justify-center mb-12 border border-white/10 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-700 shadow-2xl">
                    <step.icon size={40} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-3xl font-black mb-6 tracking-tight text-white group-hover:text-white transition-colors leading-tight">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-medium text-xl">
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
      <section className="section-container pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-50 z-0" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 z-0" />
          <div className="relative z-10 max-w-[900px] mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight uppercase">Ready to Scale Your Vision?</h2>
            <p className="text-slate-300 text-xl md:text-2xl font-medium mb-16 leading-relaxed opacity-90">
              Let's discuss how our strategic capital and advisory can drive your industrial or real estate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="btn-premium !bg-white !text-slate-900 hover:!bg-slate-100 transition-colors shadow-2xl scale-110">
                Book a Strategy Call
              </Link>
              <Link href="/about" className="btn-outline-dark border-white/20 hover:border-white transition-all">
                Learn About Our Firm
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'investindiasmart',
            image: 'https://www.investindiasmart.com/logo.jpeg',
            url: 'https://www.investindiasmart.com',
            telephone: '+91-9390652846',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500001',
              addressCountry: 'IN',
            },
            areaServed: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
          })
        }}
      />
    </main>
  );
}