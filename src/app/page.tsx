import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
//import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Only show these on ALL screen sizes */}
      <div>
        <Features />
        <HowItWorks />
        <CTA /> {/* This has your "Get Started" button */}
      </div>

      {/* Only show these on large screens */}
      <div className="hidden md:block">
        <TrustedBy />
        
        <Contact />
        <Footer />
      </div>
    </>
  );
}







