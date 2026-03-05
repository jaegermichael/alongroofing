import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/WhatsApp Image 2026-03-03 at 09.13.47.jpeg"
          alt="Along Roofing Sheets warehouse at Tynward Industrial Area, Harare"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-body font-semibold text-white tracking-wide uppercase">
              Along Roofing Sheets · Harare, Zimbabwe
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.05] opacity-0 animate-fade-up tracking-tight" style={{ animationDelay: "0.2s" }}>
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Roofing Sheets
            </span>{" "}
            for Zimbabwe
          </h1>

          <p className="text-xl text-white/80 font-body max-w-xl leading-relaxed opacity-0 animate-fade-up font-light" style={{ animationDelay: "0.3s" }}>
            <em className="not-italic font-semibold text-secondary/90">"Roofing solutions for a better tomorrow"</em> — supplying quality IBR, chromadek &amp; tile sheets to Harare and across Zimbabwe.
          </p>

          <div className="space-y-1.5 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 text-white/60 text-sm font-body font-medium">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              Tynward Industrial Area, Kirkman Rd, Harare
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm font-body font-medium">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              1515 Tourle Road, New Adbernie, Southerton, near Southerton Police
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-white/10 opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            {[
              { value: "1,200+", label: "Projects Completed" },
              { value: "20+", label: "Years in Zimbabwe" },
              { value: "4.9★", label: "Client Rating" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-3xl md:text-4xl font-display font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-white/60 font-body font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
