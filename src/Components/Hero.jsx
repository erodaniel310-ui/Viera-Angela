
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=80"
          alt="Luxury bathroom interior"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a33]/90 via-[#0b1a33]/55 to-[#0b1a33]/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full py-24">
        <div className="max-w-xl">
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl font-700 leading-[1.05]">
            ELEVATING SPACES.
            <br />
            <span className="text-[#c9a24b]">ENRICHING LIVES.</span>
          </h1>
          <p className="font-body text-gray-200 text-sm md:text-base mt-6 leading-relaxed max-w-md">
            Viera-Angela Solutions Nigeria Limited is a leading provider of
            luxury home furnishings and interior finishing solutions that
            combine beauty, functionality and lasting quality.
          </p>
          <button
            onClick={scrollToProducts}
            className="mt-8 inline-flex items-center gap-2 bg-[#c9a24b] hover:bg-[#b8913e] transition-colors text-[#0b1a33] font-bold text-sm tracking-wide px-7 py-3.5 rounded-sm"
          >
            EXPLORE OUR PRODUCTS <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
