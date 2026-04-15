"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceButtons = [
    { name: "Industrial Services", href: "/industrial", color: "bg-industrial-rust" },
    { name: "Real Estate Services", href: "/real-estate", color: "bg-industrial-safety" },
    { name: "Insurance", href: "/insurance", color: "bg-industrial-concrete" },
  ];

  return (
    <nav className={`glass-nav ${isScrolled ? "glass-nav-scrolled" : "py-3 md:py-4"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter text-premium-900 uppercase group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-xl">S</div>
          <span>Smart<span className="text-accent group-hover:text-accent-light transition-colors">living</span></span>
        </Link>

        {/* Desktop Menu - Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:transition-all ${pathname === link.href ? "text-accent after:w-full" : "text-premium-600 hover:text-accent after:w-0 hover:after:w-full"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Service Buttons - Visible on Desktop (Wide) */}
        <div className="hidden lg:flex gap-4 items-center">
          {serviceButtons.map((btn) => (
            <Link
              key={btn.name}
              href={btn.href}
              className="text-xs font-bold uppercase tracking-tighter px-5 py-2.5 rounded-xl border border-slate-200 hover:border-accent hover:text-accent transition-all text-premium-900 whitespace-nowrap"
            >
              {btn.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl overflow-hidden md:hidden flex flex-col p-6 gap-4 border-b border-slate-200"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-900 hover:text-accent-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-4 mt-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Services</span>
                {serviceButtons.map((btn) => (
                  <Link
                    key={btn.name}
                    href={btn.href}
                    className="block py-3 text-slate-900 hover:text-accent-light font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {btn.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link href="/contact" className="btn-premium w-full text-center py-3 text-sm">
                  Work With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;