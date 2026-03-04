import { Phone, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="font-display text-xl font-black text-white tracking-tight flex items-center gap-0.5 group leading-none">
          <span>Along</span><span className="text-secondary transition-colors group-hover:text-orange-400"> Roofing</span>
          <span className="text-white/80 text-lg font-semibold ml-1">Sheets</span>
        </a>

        <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-md shadow-sm">
          {["Services", "About", "Projects", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/70 hover:text-white transition-colors font-body font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+263772707966" className="flex items-center gap-2 text-sm text-white/90 font-body font-medium hover:text-secondary transition-colors">
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-secondary" />
            </div>
            +263 772 707 966
          </a>
          <Button variant="hero" size="sm" className="hidden lg:flex">
            Free Quote
          </Button>
        </div>

        <button className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-3 shadow-2xl">
          {["Services", "About", "Projects", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/5 font-body font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-2 px-4">
            <Button variant="hero" size="sm" className="w-full">
              Free Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
