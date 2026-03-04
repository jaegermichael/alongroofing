import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-20 pb-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <span className="font-display text-xl font-black text-white flex items-center gap-0.5 group leading-none">
              <span>Along</span>
              <span className="text-secondary transition-colors group-hover:text-orange-400"> Roofing</span>
              <span className="text-white/80 text-lg font-semibold ml-1">Sheets</span>
            </span>
            <p className="text-xs text-secondary/80 font-body italic mt-1">
              "Roofing solutions for a better tomorrow"
            </p>
            <p className="text-sm text-white/50 font-body leading-relaxed max-w-xs">
              Zimbabwe's trusted roofing sheet suppliers. Quality IBR, chromadek & tile sheets for residential, commercial, and industrial projects.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60 font-body font-medium">
              <li className="hover:text-secondary transition-colors cursor-pointer w-max">IBR Roofing Sheets</li>
              <li className="hover:text-secondary transition-colors cursor-pointer w-max">Chromadek Sheets</li>
              <li className="hover:text-secondary transition-colors cursor-pointer w-max">Harvey Roof Tiles</li>
              <li className="hover:text-secondary transition-colors cursor-pointer w-max">Waterproofing</li>
              <li className="hover:text-secondary transition-colors cursor-pointer w-max">Commercial Roofing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Areas We Serve</h4>
            <ul className="space-y-4 text-sm text-white/60 font-body font-medium">
              <li className="hover:text-white transition-colors cursor-pointer w-max">Harare</li>
              <li className="hover:text-white transition-colors cursor-pointer w-max">Bulawayo</li>
              <li className="hover:text-white transition-colors cursor-pointer w-max">Mutare</li>
              <li className="hover:text-white transition-colors cursor-pointer w-max">Gweru & Masvingo</li>
              <li className="hover:text-white transition-colors cursor-pointer w-max">Across Zimbabwe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60 font-body font-medium">
              {[
                "+263 772 707 966",
                "+263 773 724 503",
                "+263 719 707 966",
                "+263 719 724 504",
              ].map((num) => (
                <li key={num} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer w-max">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <a href={`tel:${num.replace(/\s/g, "")}`}>{num}</a>
                </li>
              ))}
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer w-max">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                </div>
                info@alongroofing.co.zw
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <p>8385/8386 Tynward Industrial Area,</p>
                  <p>Kirkman Road, Harare</p>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <p>1515 Tourle Road,</p>
                  <p>New Adbernie, Harare</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 font-body">
            © {new Date().getFullYear()} Along Roofing Sheets. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40 font-body">
            Proudly Zimbabwean <span className="text-secondary ml-1">🇿🇼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
