import { ArrowRight, Building2, Calendar, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import video from "../assets/video.mp4";

const STAT_ITEMS = [
  { icon: Calendar, big: "2021", label: "Established", sub: "Built on passion for quality" },
  { icon: Users, big: "1000+", label: "Trusted by", sub: "Satisfied clients across Nigeria" },
  { icon: Building2, big: "1000+", label: "Wide Range", sub: "Premium products and solutions" },
  { icon: Star, big: "Our Promise", label: "", sub: "Quality. Integrity. Reliability." },
];

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
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-[#f7f5f0] font-body py-24 relative overflow-hidden">
      {/* faint decorative backdrop */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c9a24b]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1fr_1fr_0.55fr] gap-12 items-start relative">
        {/* Copy column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#c9a24b]" />
            ABOUT US
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[#0b1a33] text-3xl md:text-4xl font-700 mt-4 leading-tight"
          >
            Building Beautiful Spaces
            <br /> with Excellence
          </motion.h2>

          <motion.div variants={fadeUp} className="text-gray-600 text-[13.5px] leading-relaxed mt-6 space-y-4">
            <p>
              Founded by Chief Sir Paul "Nwa Jesus" Onuora, Viera-Angela was
              built on a strong passion for quality, excellence, and
              sophisticated design.
            </p>
            <p>
              We specialize in premium tiles, modern bathroom and toilet
              wares, high-quality doors, elegant artworks, and advanced
              kitchen appliances carefully selected to enhance both beauty
              and functionality in every space.
            </p>
            <p>
              At Viera-Angela, we believe that every space tells a story.
              That is why we are committed not only to providing premium
              products but also to helping our clients bring their dream
              spaces to life — whether for homes, offices, or large-scale
              projects.
            </p>
            <p>
              Our success is driven by our dedication to customer
              satisfaction, integrity, and attention to detail. With a clear
              vision for the future, Viera-Angela continues to set the
              standard for luxury and functionality in interior design
              across Nigeria and beyond.
            </p>
          </motion.div>

        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[420px] group"
        >
          {/* gold frame offset behind the image */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a24b]/60 rounded-sm hidden md:block" />
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <motion.video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover min-h-[420px]"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a33]/25 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Stats column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="lg:pt-2"
        >
          <div className="divide-y divide-gray-300/70">
            {STAT_ITEMS.map((s) => (
              <motion.div
                key={s.label + s.big}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 py-5"
              >
                <s.icon className="text-[#c9a24b] shrink-0" size={28} strokeWidth={1.5} />
                <div>
                  {s.label && <div className="text-gray-500 text-xs">{s.label}</div>}
                  <div className="font-display text-[#0b1a33] text-2xl font-700 leading-tight">
                    {s.big}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


