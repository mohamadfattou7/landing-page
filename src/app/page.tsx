import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
//import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
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

      

      {/* Contact & Footer always visible */}
      <Contact />
      <Footer />
    </>
  );
}








