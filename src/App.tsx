import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import { Adiestramiento, Paseos } from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

export default function App() {
  return (
    <SmoothScroll>
      <JsonLd />
      <Navbar />
      
      <Hero />
      <Problem />
      
      <Adiestramiento />

      <div id="paseos">
        <Paseos />
        <Methodology />
      </div>

      <FAQ />

      <CTA />
      <Footer />
    </SmoothScroll>
  );
}
