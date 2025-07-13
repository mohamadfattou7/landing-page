import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
// work
// import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Always visible */}
      <Features />
      <HowItWorks />
      <CTA />

      {/* TrustedBy hidden on mobile */}
      <div className="hidden md:block">
        <TrustedBy />
      </div>

      {/* Contact & Footer always visible */}
      <Contact />
      <Footer />
    </>
  );
}







