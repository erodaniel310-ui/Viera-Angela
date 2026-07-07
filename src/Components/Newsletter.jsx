import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
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

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // Replace with your real subscribe endpoint
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <section id="newsletter" className="w-full bg-[#f7f5f0] font-body">
      <div className="relative overflow-hidden border-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative w-full min-h-[320px] overflow-hidden py-14 md:py-16 border-0"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-[#0b1a33]/80" />
          {/* ambient gold glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#c9a24b]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#c9a24b]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center h-full">
              {/* Copy */}
              <div>
                <span className="text-[#c9a24b] font-bold text-xs tracking-[0.25em] inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-[#c9a24b]" />
                  STAY CONNECTED
                </span>
                <h2 className="font-display text-white text-3xl md:text-4xl font-700 mt-4 leading-tight">
                  Let's bring your space to life
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-md">
                  Join our mailing list for new arrivals, design inspiration and
                  exclusive offers on premium fittings, tiles and finishes — or
                  reach out directly and our team will get back to you.
                </p>

                <div className="flex items-center gap-3 mt-6 text-gray-400 text-xs">
                  <Mail size={15} className="text-[#c9a24b]" />
                  <span>angelaviera94@gmail.com</span>
                </div>
              </div>

              {/* Form */}
              <div>
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-[#c9a24b]/40 rounded-sm p-6 flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#c9a24b] shrink-0 mt-0.5" size={22} />
                    <div>
                      <p className="text-white font-bold text-sm">You're subscribed</p>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                        Thank you for reaching out. We'll be in touch soon with
                        updates from Viera-Angela.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <label
                      htmlFor="newsletter-email"
                      className="text-white text-xs font-bold tracking-wide block mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === "error") setStatus("idle");
                          }}
                          placeholder="you@example.com"
                          className="w-full bg-white/5 border border-white/15 focus:border-[#c9a24b] focus:outline-none focus:ring-1 focus:ring-[#c9a24b] text-white placeholder:text-gray-500 text-sm rounded-sm pl-11 pr-4 py-3.5 transition-colors"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={status === "submitting"}
                        className="inline-flex items-center justify-center gap-2 bg-[#c9a24b] hover:bg-[#b8913e] disabled:opacity-70 transition-colors text-[#0b1a33] font-bold text-xs tracking-wide px-6 py-3.5 rounded-sm whitespace-nowrap"
                      >
                        {status === "submitting" ? "SENDING..." : "SUBSCRIBE"}
                        {status !== "submitting" && <ArrowRight size={14} />}
                      </motion.button>
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-xs mt-2">
                        Please enter a valid email address.
                      </p>
                    )}

                    <p className="text-gray-500 text-[11px] mt-3 leading-relaxed">
                      By subscribing, you agree to receive occasional emails
                      from Viera-Angela. Unsubscribe anytime.
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