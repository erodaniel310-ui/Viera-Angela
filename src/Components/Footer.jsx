import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "About Us", "About Ceo", "Products", "Services", ];

export default function Footer() {
  const getLinkHref = (link) => {
    if (link === "Home") return "#";
    if (link === "Newsletter") return "#newsletter";
    return `#${link.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <footer className="bg-[#0b1a33] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="w-7 h-7" loading="lazy" decoding="async" />
              <div className="leading-tight">
                <div className="text-xs font-bold tracking-widest uppercase text-white">VIERA-ANGELA</div>
                <div className="text-[9px] tracking-widest uppercase text-gray-500">SOLUTIONS NIGERIA LIMITED</div>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Luxury Crafted
              <br />
              Excellence Delivered
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={getLinkHref(link)}
                    onClick={(e) => {
                      if (link === "Home") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (link === "About Us") {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      } else if (link === "About Ceo") {
                        e.preventDefault();
                        document.getElementById("ceo")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="text-gray-400 text-xs hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-xs">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 7083494351, +234 8109684988</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>angelaviera94@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-xs">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No 4b Oladimeji Alo Street, Lekki Phase 1, Lagos State, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Socials</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/official_viera_angela_solution?igsh=ZHoyNjdlN3BzNmh2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-xs hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                href="https://www.facebook.com/share/1DqTiapnWr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-xs hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33v7.03C18.34 21.24 22 17.08 22 12.06Z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                   href="https://wa.me/message/CIM2KMQBTB22J1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-xs hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.272-.099-.47-.149-.669.149-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.049-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.241-.579-.486-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.49 1.694.627.712.227 1.36.195 1.872.118.572-.085 1.758-.72 2.006-1.414.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.52 3.48A11.52 11.52 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.1.54 4.08 1.48 5.82L0 24l6.33-1.66A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.18-3.48-8.52z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Viera-Angela Solutions Nigeria Limited. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}