import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ceoimg from "../assets/ceoimg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function CeoSection() {
  return (
    <section id="ceo" className="bg-[#0b1a33] font-body py-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch">
        

        {/* Copy side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="p-8 md:p-14 lg:p-16 flex flex-col justify-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#c9a24b]" />
            MEET OUR CEO
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-white text-3xl md:text-4xl font-700 mt-4 leading-tight"
          >
            Chief Sir Paul "Nwa Jesus" Onuora
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="text-gray-300 text-[13.5px] leading-relaxed mt-6 space-y-4"
          >
            <p>
              Onuora Paul Okwudiri is the Chief Executive Officer of
              Viera-Angela Solutions Nigeria Limited. A dynamic entrepreneur
              and business leader with vast experience across building
              materials, real estate and importation.
            </p>
            <p>
              Since co-founding Viera-Angela in 2021, his strategic vision,
              business acumen and unwavering commitment to integrity,
              customer satisfaction and product quality have positioned the
              company as a trusted and premium supplier in Nigeria's interior
              furnishing industry.
            </p>
            <p>
              Beyond business, he is deeply committed to community and
              faith-based initiatives, championing development and support
              for the communities he serves.
            </p>
          </motion.div>
      
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden group"
        >
          <img
            src={ceoimg}
            alt="Chief Sir Paul 'Nwa Jesus' Onuora, CEO of Viera-Angela"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          {/* gradient so the photo blends into the navy panel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a33] via-[#0b1a33]/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0b1a33]/20" />
          {/* thin gold rule along the shared edge, desktop only */}
         
        </motion.div>
      </div>
    </section>
  );
}