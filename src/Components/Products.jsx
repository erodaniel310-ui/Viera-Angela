import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PRODUCTS = [
  {
    name: "Bathroom Solutions",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    items: ["Bath Tubs", "Toilets (Water Closets)", "Showers & Shower Systems", "Wash Basins", "Complete Bathroom Accessories"],
  },
  {
    name: "Fittings & Mixers",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80",
    items: ["Bath Mixers", "Sink Mixers", "Basin Mixers", "Basin Taps", "Sink Taps"],
  },
  {
    name: "Kitchen Equipment",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    items: ["Cooker Hoods", "Cookers", "Complete Kitchen Setups"],
  },
  {
    name: "Home Appliances & Accessories",
    img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80",
    items: ["Water Heaters", "Microwaves", "Smoke Expellers", "Mirrors & Over-Mirror Fittings", "Bluetooth Speakers"],
  },
  {
    name: "Tiles",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    items: ["Imported Tiles (Spain & China)", "Locally Made Nigerian Tiles"],
  },
  {
    name: "Doors & Artworks",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
    items: ["High-Quality Doors", "Elegant Artworks"],
  },
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
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="products" className="bg-[#f7f5f0] font-body py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center max-w-xl mx-auto"
        >
          <span className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2">
            <span className="w-6 h-px bg-[#c9a24b]" />
            OUR PRODUCTS
            <span className="w-6 h-px bg-[#c9a24b]" />
          </span>
          <h2 className="font-display text-[#0b1a33] text-3xl md:text-4xl font-700 mt-4">
            Premium Products for Every Space
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Curated fittings, finishes and appliances sourced for lasting quality.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={grid}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14"
        >
          {PRODUCTS.map((p, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                animate={isActive ? { y: -4, scale: 1.02 } : { y: 0, scale: 1 }}
                className={`bg-white rounded-md overflow-hidden border h-full flex flex-col shadow-sm transition-all duration-500 ${
                  isActive
                    ? "border-[#c9a24b] shadow-xl shadow-[#c9a24b]/15"
                    : "border-gray-200/80 hover:shadow-xl hover:border-[#c9a24b]/40"
                }`}
              >
                <div className="h-28 overflow-hidden relative">
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-4 flex-1 flex flex-col items-center text-center">
                  <h3
                    className={`font-display font-700 text-[15px] leading-snug transition-colors ${
                      isActive ? "text-[#c9a24b]" : "text-[#0b1a33]"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <span className={`w-8 h-px my-2 ${isActive ? "bg-[#c9a24b]" : "bg-[#c9a24b]/50"}`} />
                  <ul className="mt-1 space-y-1.5 text-left w-full">
                    {p.items.slice(0, 4).map((it) => (
                      <li key={it} className="text-[11px] text-gray-500 flex gap-1.5 leading-snug">
                        <span className="text-[#c9a24b] mt-[1px]">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mt-14"
        >
        
        </motion.div>
      </div>
    </section>
  );
}