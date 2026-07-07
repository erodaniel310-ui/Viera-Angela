
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustStrip from "./Components/TrustStrip";

const About = lazy(() => import("./Components/About"));
const CeoSection = lazy(() => import("./Components/CeoSection"));
const Products = lazy(() => import("./Components/Products"));
const Services = lazy(() => import("./Components/Services"));
const Newsletter = lazy(() => import("./Components/Newsletter"));
const Footer = lazy(() => import("./Components/Footer"));

const sectionFallback = <div className="min-h-[180px] bg-[#f7f5f0]" />;

export default function App() {
  return (
    <div className="bg-[#f7f5f0] antialiased">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Suspense fallback={sectionFallback}>
        <About />
        <CeoSection />
        <Products />
        <Services />
        <Newsletter />
        <Footer />
      </Suspense>
    </div>
  );
}