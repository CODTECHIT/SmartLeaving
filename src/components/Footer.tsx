import Link from "next/link";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const industrialLinks = [
    { name: "Project 1 - Active Pharma", href: "/industrial#project1" },
    { name: "Project 2 - Active Pharma", href: "/industrial#project2" },
    { name: "Project 3 - Formulation", href: "/industrial#project3" },
    { name: "Private Funding (₹500 Cr)", href: "/industrial" },
    { name: "Equity Funding", href: "/industrial" },
  ];

  const realEstateLinks = [
    { name: "Farmlands", href: "/real-estate" },
    { name: "Commercial Lands", href: "/real-estate" },
    { name: "Open Plots", href: "/real-estate" },
    { name: "Villa Plots", href: "/real-estate" },
    { name: "Apartment Flats", href: "/real-estate" },
    { name: "Resale Flats", href: "/real-estate" },
  ];

  const insuranceLinks = [
    { name: "Group Health Insurance", href: "/insurance" },
    { name: "Property Insurance", href: "/insurance" },
    { name: "Personal Health Insurance", href: "/insurance" },
    { name: "Life Insurance", href: "/insurance" },
  ];

  return (
    <footer className="bg-steel-900 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter uppercase mb-8 block group">
              Smart<span className="text-accent group-hover:text-accent-light transition-colors">Leaving</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-10 font-light">
              Pioneering strategic capital advisory and industrial growth solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-accent hover:border-accent transition-all duration-300 group">
                  <social.icon size={18} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Industrial Properties */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Industrial Properties</h4>
            <ul className="space-y-3">
              {industrialLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-accent-light transition-all font-light text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Estate Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Real Estate</h4>
            <ul className="space-y-3">
              {realEstateLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-accent-light transition-all font-light text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Insurance</h4>
            <ul className="space-y-3">
              {insuranceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-accent-light transition-all font-light text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Connect</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start group">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-slate-400 font-light text-sm group-hover:text-white transition-colors">Hyderabad, Telangana,<br />India - 500001</p>
              </div>
              <div className="flex gap-3 items-center group">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <p className="text-slate-400 font-light text-sm group-hover:text-white transition-colors">excellence@smartleaving.com</p>
              </div>
              <div className="flex gap-3 items-center group">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <p className="text-slate-400 font-light text-sm group-hover:text-white transition-colors">+91 91234 56789</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">
            &copy; 2026 SmartLeaving. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-[0.2em]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;