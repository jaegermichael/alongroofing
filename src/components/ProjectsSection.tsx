const projects = [
  {
    image: "/images/WhatsApp Image 2026-03-03 at 09.13.56.jpeg",
    title: "Chromadek Colour Range",
    description: "We stock a wide range of pre-painted chromadek sheets in multiple colours — black, blue, terracotta, and more — for residential and commercial projects.",
  },
  {
    image: "/images/WhatsApp Image 2026-03-03 at 09.13.54.jpeg",
    title: "Warehouse Stock — Tynward Branch",
    description: "Large stacks of quality roofing sheets ready for immediate dispatch from our Tynward Industrial Area warehouse, Kirkman Road, Harare.",
  },
  {
    image: "/images/WhatsApp Image 2026-03-03 at 09.13.51.jpeg",
    title: "Harvey Fibre-Cement Tiles",
    description: "Premium Harvey tile stocks always in supply. Durable, fire-resistant, and perfectly suited to Zimbabwe's climate for long-lasting roofs.",
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4">
            <span className="text-xs font-body font-bold uppercase tracking-widest">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-2">
            Our Products &amp; Stock
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            A look at our real stock — ready for collection or delivery across Zimbabwe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 relative"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 0.15}s` }}
            >
              <div className="overflow-hidden h-64 relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 relative bg-card">
                <div className="absolute -top-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 text-xl font-bold z-20">
                  +
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
