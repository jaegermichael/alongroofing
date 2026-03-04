import { Home, Wrench, Droplets, Sun, Building, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "IBR Roofing Sheets",
    description: "High-quality IBR (Inverted Box Rib) sheets in various gauges. Ideal for residential and commercial roofing projects across Zimbabwe.",
  },
  {
    icon: Paintbrush,
    title: "Chromadek Sheets",
    description: "Pre-painted chromadek sheets with superior corrosion resistance and a wide colour range perfect for modern buildings and warehouses.",
  },
  {
    icon: Building,
    title: "Harvey Roof Tiles",
    description: "Authentic Harvey fibre-cement roof tiles — durable, fire-resistant and suited for Zimbabwean climatic conditions.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Professional waterproofing membranes and solutions for flat roofs, balconies, and foundations to beat the rainy season.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs & Installation",
    description: "End-to-end repair and installation services backed by experienced crews trained in safety and quality standards.",
  },
  {
    icon: Sun,
    title: "Roof Inspections",
    description: "Detailed inspections with photographic reports — ideal for property purchases, insurance, or planning a re-roof.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4">
            <span className="text-xs font-body font-bold uppercase tracking-widest">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            Comprehensive, premium roofing solutions tailored for homes and businesses across Zimbabwe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary transition-all duration-500 hover:-translate-y-2 z-10"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-secondary/20">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
