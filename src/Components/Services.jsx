import { HardHat, Home as HomeIcon, MessageSquare, Package, Ship, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  { icon: Package, title: "Product Supply", desc: "We supply premium bathroom fittings, kitchen equipment, tiles and accessories from trusted local and international suppliers." },
  { icon: Ship, title: "Procurement & Importation", desc: "We source and import quality products from Spain, China and other global markets with authenticity and competitive pricing." },
  { icon: Wrench, title: "Installation Support", desc: "Guidance and support to ensure proper installation and functionality through skilled professionals." },
  { icon: HomeIcon, title: "Interior Finishing Solutions", desc: "Tailored solutions for residential and commercial projects to create modern, stylish and functional spaces." },
  { icon: MessageSquare, title: "Consultation & Product Selection", desc: "Expert advice to help you choose the right products based on design, space and budget." },
  { icon: HardHat, title: "Project Support Services", desc: "We collaborate with contractors, developers and homeowners to supply and coordinate materials for successful project delivery." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0b1a33] font-body py-24 relative overflow-hidden">
      {/* faint gold glow, top corner */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a24b]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto"
        >
          <span className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-[#c9a24b]" />
            OUR SERVICES
            <span className="w-6 h-px bg-[#c9a24b]" />
          </span>
          <h2 className="font-display text-white text-3xl md:text-4xl font-700 mt-4">
            Complete Solutions. Exceptional Results.
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            From sourcing to installation, every step handled with care.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={grid}
          className="grid sm:grid-cols-2 lg:grid-cols-3 mt-16 border-t border-l border-white/10 rounded-sm overflow-hidden"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group relative flex flex-col items-start text-left p-8 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-[#c9a24b]/40 flex items-center justify-center mb-6 group-hover:bg-[#c9a24b] group-hover:border-[#c9a24b] transition-colors duration-300">
                <s.icon
                  className="text-[#c9a24b] group-hover:text-[#0b1a33] transition-colors duration-300"
                  size={24}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-white font-bold text-sm tracking-wide">{s.title}</h3>
              <p className="text-gray-400 text-[12.5px] leading-relaxed mt-3">{s.desc}</p>

              {/* gold corner accent on hover */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#c9a24b] group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}