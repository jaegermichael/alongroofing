import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container text-center max-w-3xl mx-auto space-y-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1]">
          Ready to Protect Your Property?
        </h2>
        <p className="text-white/70 font-body text-xl font-light">
          Get a free, no-obligation quote from our team. We serve all major cities and towns across Zimbabwe.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-white/50 text-sm font-body font-medium bg-white/5 mx-auto px-4 py-2 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            8385/8386 Tynward Industrial Area, Kirkman Rd, Harare
          </div>
          <span className="text-white/20 hidden sm:block">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            1515 Tourle Road, New Adbernie, Southerton, near Southerton Police
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button variant="hero" size="xl" className="shadow-secondary/20">
            Request Free Quote
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="tel:+263772707966">
              <Phone className="w-5 h-5 mr-1" />
              +263 772 707 966
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
