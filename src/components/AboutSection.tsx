import { CheckCircle } from "lucide-react";

const highlights = [
  "Manufacturers of Chromadek IBR, Frosted and Q-Tiles",
  "Custom cut to any size — just send your measurements",
  "Wide span 920 width & deep ridge 940mm options available",
  "Gauges: 0.25mm, 0.3mm, 0.4mm & 0.5mm available",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/images/WhatsApp Image 2026-03-03 at 09.13.49.jpeg"
              alt="Along Roofing Sheets warehouse at Kirkman Road, Tynward Industrial Area, Harare"
              className="w-full h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md rounded-2xl px-6 py-5 border border-white/10 shadow-2xl z-20">
              <div className="text-4xl font-display font-black text-secondary mb-1">20+</div>
              <div className="text-sm text-white/80 font-body font-medium uppercase tracking-wider">Years Serving<br />Zimbabwe</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-2">
              <span className="text-xs font-body font-bold uppercase tracking-widest">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-[1.1]">
              Built on Trust,<br />Rooted in Zimbabwe
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Founded in Harare, Along Roofing Sheets has grown to become one of Zimbabwe's most trusted roofing material suppliers. We understand the unique challenges of the Zimbabwean climate — from heavy rains to the intense sun — and we supply sheets built to last.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              From our two Harare branches at Tynward Industrial Area and New Adbernie, we supply IBR sheets, chromadek, Harvey tiles, and more to contractors and homeowners across the country.
            </p>
            <div className="space-y-4 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-base font-body font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
