"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

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
    <nav className={`glass-nav ${isScrolled ? "glass-nav-scrolled" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex justify-between items-center">
        <Link href="/" className="relative h-12 md:h-16 w-48 md:w-64 group">
          <Image
            src="/logo.jpeg"
            alt="Smartliving Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu - Navigation Links */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-black uppercase tracking-[0.3em] transition-all relative after:absolute after:bottom-[-6px] after:left-0 after:h-[1px] after:bg-slate-900 after:transition-all ${pathname === link.href ? "text-slate-900 after:w-full" : "text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full"
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
              className={`text-[11px] font-black uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-500 whitespace-nowrap shadow-sm border-2 ${
                btn.href === "/industrial" ? "bg-emerald-50 border-emerald-100 text-emerald-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600" :
                btn.href === "/real-estate" ? "bg-amber-50 border-amber-100 text-amber-900 hover:bg-amber-600 hover:text-white hover:border-amber-600" :
                "bg-blue-50 border-blue-100 text-blue-900 hover:bg-blue-600 hover:text-white hover:border-blue-600"
              }`}
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
              className="absolute top-full left-0 w-full bg-white overflow-hidden md:hidden flex flex-col p-8 gap-4 border-b border-slate-200 shadow-2xl z-50"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-black uppercase tracking-widest transition-colors ${pathname === link.href ? "text-slate-900" : "text-slate-500"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-6 mt-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 block">Our Services</span>
                <div className="flex flex-col gap-2">
                  {serviceButtons.map((btn) => (
                    <Link
                      key={btn.name}
                      href={btn.href}
                      className={`py-4 text-lg font-bold transition-all ${
                        btn.href === "/industrial" ? "text-emerald-700" :
                        btn.href === "/real-estate" ? "text-amber-700" :
                        "text-blue-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {btn.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link 
                  href="/contact" 
                  className="w-full bg-slate-950 text-white text-center py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl block"
                  onClick={() => setIsOpen(false)}
                >
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