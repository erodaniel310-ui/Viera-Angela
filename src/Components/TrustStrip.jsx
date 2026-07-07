
import { BadgeCheck, Gem, ShieldCheck, Users } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Gem,
    title: "Premium Quality",
    desc: "Top quality products from trusted global brands",
  },
  {
    icon: BadgeCheck,
    title: "Wide Selection",
    desc: "Tiles, bathroom solutions, kitchen appliances & more",
  },
  {
    icon: Users,
    title: "Expert Support",
    desc: "Professional advice and installation support",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    desc: "Committed to excellence and customer satisfaction",
  },
];


export default function TrustStrip() {
  return (
    <section className="bg-[#0b1a33] font-body border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {TRUST_ITEMS.map((item, i) => (
          <div key={item.title} delay={i * 90}>
            <div className="flex items-start gap-3 py-7 px-4 md:px-6">
              <item.icon className="text-[#c9a24b] shrink-0 mt-0.5" size={26} strokeWidth={1.5} />
              <div>
                <div className="text-white font-bold text-[13px] tracking-wide">
                  {item.title.toUpperCase()}
                </div>
                <div className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
