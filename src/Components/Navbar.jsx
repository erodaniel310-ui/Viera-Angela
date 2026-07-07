import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from  '../assets/logo.png';
export const QUICK_LINKS = ["Home", "About Us", "Products", "Services", "Projects", "About CEO", "Contact Us"];

const NAV_LINKS = [
  { label: "Home", target: "home" },
  { label: "About Us", target: "about" },
  { label: "About CEO", target: "ceo" },
  { label: "Products", target: "products" },
  { label: "Services", target: "services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 180;
      if (scrollPosition < 240) {
        setActiveLink("home");
        return;
      }

      const sections = [
        { id: "about", top: document.getElementById("about")?.offsetTop ?? Number.MAX_SAFE_INTEGER },
        { id: "ceo", top: document.getElementById("ceo")?.offsetTop ?? Number.MAX_SAFE_INTEGER },
        { id: "products", top: document.getElementById("products")?.offsetTop ?? Number.MAX_SAFE_INTEGER },
        { id: "services", top: document.getElementById("services")?.offsetTop ?? Number.MAX_SAFE_INTEGER },
      ];

      const activeSection = sections.findLast((section) => scrollPosition >= section.top) ?? sections[0];
      setActiveLink(activeSection?.id ?? "home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick = (target) => (event) => {
    event.preventDefault();
    setOpen(false);

    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("home");
      return;
    }

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveLink(target);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-body transition-all duration-300 ${
        scrolled ? "bg-[#0b1a33]/70 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveLink("home");
          }}
          className="flex cursor-pointer items-center gap-3"
        >
          <div className="w-11 h-11 flex items-center justify-center shrink-0">
            <img src={logo} alt="Viera-Angela Logo" loading="eager" decoding="async" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-white text-lg md:text-xl font-700 tracking-wide">
              VIERA-ANGELA
            </div>
            <div className="text-[9px] md:text-[10px] tracking-[0.15em] text-gray-300 -mt-1">
              SOLUTIONS NIGERIA LIMITED
            </div>
            <div className="text-[9px] md:text-[10px] italic text-[#c9a24b] -mt-0.5">
              Luxury. Quality. Sophistication.
            </div>
          </div>
        </a>


        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold tracking-wide text-gray-200">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.target;

            return (
              <a
                key={link.target}
                href={link.target === "home" ? "#" : `#${link.target}`}
                onClick={handleNavClick(link.target)}
                className={`relative py-2 transition-colors hover:text-[#c9a24b] ${
                  isActive ? "text-[#c9a24b]" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label.toUpperCase()}
                {isActive && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-[#c9a24b]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => {
              const newsletter = document.getElementById("newsletter");
              if (newsletter) {
                newsletter.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              setActiveLink("newsletter");
            }}
            className="bg-white hover:bg-[#b8913e] transition-colors text-[#0b1a33] font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-sm"
          >
            Contact Us
          </button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0b1a33]/95 border-t border-white/10 px-5 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.target;

              return (
                <motion.a
                  key={link.target}
                  href={link.target === "home" ? "#" : `#${link.target}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleNavClick(link.target)}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-[#c9a24b]" : "text-gray-200"
                  }`}
                >
                  {link.label.toUpperCase()}
                </motion.a>
              );
            })}
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#c9a24b] text-white font-bold text-[13px] px-6 py-2.5 rounded-sm mt-2"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

  