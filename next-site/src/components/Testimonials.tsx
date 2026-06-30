"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Smartliving's strategic approach to industrial funding helped us scale our pharmaceutical production by 200% within a year. Their expertise is unmatched.",
    author: "Dr. Rajesh Kumar",
    role: "CEO, PharmaCore Industries"
  },
  {
    quote: "The real estate opportunities provided were exactly what we needed for our portfolio. Clear titles and high ROI locations made the decision easy.",
    author: "Anita Sharma",
    role: "Investment Lead, Global Realty Partners"
  },
  {
    quote: "Reliability and transparency are the hallmarks of Smartliving. Their insurance solutions gave our organization the security we were looking for.",
    author: "Sameer Varma",
    role: "HR Director, TechFlow Systems"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-background text-foreground relative overflow-hidden border-t border-[rgba(var(--foreground-rgb),0.05)]">
      <div className="absolute top-0 left-0 w-full h-full mesh-bg opacity-10 pointer-events-none" />
      <div className="section-container relative z-10 text-center">
        <span className="subheading mb-8">Client Success</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 tracking-tight text-foreground">What Our Clients Say</h2>

        <div className="max-w-[1000px] mx-auto min-h-[300px] relative flex flex-col items-center">
          <div className="mb-8 text-accent/20">
            <Quote size={48} fill="currentColor" strokeWidth={0} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="text-xl md:text-3xl font-light leading-relaxed text-secondary mb-10 italic">
                "{testimonials[index].quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  {testimonials[index].author}
                </span>
                <span className="text-secondary text-sm uppercase tracking-[0.2em] font-black mt-2 text-center max-w-[250px]">
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-12 bg-accent" : "w-4 bg-slate-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;