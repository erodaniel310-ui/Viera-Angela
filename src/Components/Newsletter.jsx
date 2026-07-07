import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, User, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import bgVideo from "../assets/bgVideo.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fieldBase =
  "w-full bg-white/5 border border-white/15 focus:border-[#c9a24b] focus:outline-none focus:ring-1 focus:ring-[#c9a24b] text-white placeholder:text-gray-500 text-sm rounded-sm pl-11 pr-4 py-3.5 transition-colors";

export default function Newsletter() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setErrorMsg("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!form.message.trim()) {
      setErrorMsg("Please add a short message so we know how to help.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Replace with your real endpoint (email service, CRM, backend route, etc.)
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <section id="newsletter" className="w-full bg-[#f7f5f0] font-body">
      <div className="relative overflow-hidden border-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative w-full overflow-hidden py-14 md:py-20 border-0"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-[#0b1a33]/85" />
          {/* ambient gold glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#c9a24b]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#c9a24b]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
              {/* Copy */}
              <div className="lg:pt-4">
                <span className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-[#c9a24b]" />
                  GET IN TOUCH
                </span>
                <h2 className="font-display text-white text-3xl md:text-4xl font-700 mt-4 leading-tight">
                  Let's bring your space to life
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-md">
                  Tell us about your project, ask a question, or join our
                  mailing list for new arrivals and design inspiration — our
                  team will get back to you personally.
                </p>

                <div className="flex items-center gap-3 mt-6 text-gray-400 text-xs">
                  <Mail size={15} className="text-[#c9a24b]" />
                  <span>angelaviera94@gmail.com</span>
                </div>

                <div className="hidden lg:block mt-10 border-t border-white/10 pt-6">
                  <p className="text-gray-500 text-[11px] leading-relaxed max-w-xs">
                    We typically respond within one business day. For urgent
                    enquiries, reach us directly by phone or visit our
                    showroom in Lekki Phase 1, Lagos.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-[#c9a24b]/40 rounded-sm p-8 flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#c9a24b] shrink-0 mt-0.5" size={22} />
                    <div>
                      <p className="text-white font-bold text-sm">Message sent</p>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                        Thank you for reaching out. A member of our team will
                        be in touch with you shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="cf-name"
                          className="text-white text-xs font-bold tracking-wide block mb-2"
                        >
                          FULL NAME
                        </label>
                        <div className="relative">
                          <User
                            size={16}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                          <input
                            id="cf-name"
                            type="text"
                            value={form.name}
                            onChange={update("name")}
                            placeholder="Your name"
                            className={fieldBase}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="cf-phone"
                          className="text-white text-xs font-bold tracking-wide block mb-2"
                        >
                          PHONE <span className="text-gray-500 font-normal normal-case">(optional)</span>
                        </label>
                        <div className="relative">
                          <Phone
                            size={16}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                          <input
                            id="cf-phone"
                            type="tel"
                            value={form.phone}
                            onChange={update("phone")}
                            placeholder="+234 800 000 0000"
                            className={fieldBase}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cf-email"
                        className="text-white text-xs font-bold tracking-wide block mb-2"
                      >
                        EMAIL ADDRESS
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          id="cf-email"
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@example.com"
                          className={fieldBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cf-message"
                        className="text-white text-xs font-bold tracking-wide block mb-2"
                      >
                        MESSAGE
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={16}
                          className="absolute left-4 top-4 text-gray-500"
                        />
                        <textarea
                          id="cf-message"
                          rows={4}
                          value={form.message}
                          onChange={update("message")}
                          placeholder="Tell us about your project or enquiry..."
                          className={`${fieldBase} resize-none pt-3.5`}
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-xs">{errorMsg}</p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c9a24b] hover:bg-[#b8913e] disabled:opacity-70 transition-colors text-[#0b1a33] font-bold text-xs tracking-wide px-7 py-3.5 rounded-sm"
                    >
                      {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
                      {status !== "submitting" && <ArrowRight size={14} />}
                    </motion.button>

                    <p className="text-gray-500 text-[11px] leading-relaxed pt-1">
                      By submitting, you agree to be contacted by Viera-Angela
                      regarding your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}