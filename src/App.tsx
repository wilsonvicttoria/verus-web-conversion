import { useState } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import { Adiestramiento, Paseos } from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <JsonLd />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <SmoothScroll>
          <Navbar />
          
          <Hero />
          <Problem />
          
          <Adiestramiento />

          <div id="paseos">
            <Paseos />
            <Methodology />
          </div>

          <Testimonials />
          
          <FAQ />

          <CTA />
          <Footer />
        </SmoothScroll>
      )}
    </>
  );
}
