import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import { Adiestramiento, Paseos } from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
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
      
      {/* Sección 1: Adiestramiento Independiente */}
      <Adiestramiento />

      {/* Sección 2: Paseos + Su Metodología Integrada */}
      <div id="paseos">
        <Paseos />
        {/* Aquí vive la metodología como parte del proceso de los paseos */}
        <Methodology />
      </div>

      <CTA />
      <Footer />
    </SmoothScroll>
  );
}
