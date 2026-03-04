import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tendai Moyo",
    location: "Borrowdale, Harare",
    text: "Along Roofing Sheets supplied our IBR sheets during the dry season. Fast delivery, professional service, and the quality is fantastic. Best roofing sheet supplier in Harare!",
    rating: 5,
  },
  {
    name: "Chiedza Mhandu",
    location: "Hillside, Bulawayo",
    text: "After the hailstorm damaged our roof, Along Roofing Sheets came through the next day. Fair pricing and excellent chromadek sheets. Highly recommend.",
    rating: 5,
  },
  {
    name: "Farai Nyamadzawo",
    location: "Mutare",
    text: "We got three quotes and Along Roofing Sheets was the most thorough. They helped us select the right gauge for our warehouse. Top-notch service and products.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4">
            <span className="text-xs font-body font-bold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300 relative group"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 text-6xl text-secondary/20 font-display font-black leading-none group-hover:text-secondary/40 transition-colors">
                "
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8 relative z-10 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center font-display font-bold text-primary text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-bold text-foreground text-base">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
