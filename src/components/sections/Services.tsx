import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Adiestramiento() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waNumber = "573006081088";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".adi-img", {
        filter: "grayscale(0%)",
        scrollTrigger: { trigger: ".adi-img", start: "top 80%", end: "bottom 20%", scrub: 1 }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="adiestramiento" className="bg-black py-20 lg:py-48 overflow-hidden px-[12vw]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
        <div className="flex-1 w-full aspect-square overflow-hidden glass-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1200" 
            alt="Adiestramiento" 
            className="adi-img w-full h-full object-cover filter grayscale scale-110"
          />
        </div>
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-verus-gold font-bold uppercase">
              [ PSICOLOGÍA & CONDUCTA ]
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
              ADIESTRAMIENTO <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>TÉCNICO</span>
            </h2>
          </div>
          <p className="text-base lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            Rehabilitación técnica de conductas y obediencia avanzada. Especialistas en el manejo de perros en entornos de alta exigencia.
          </p>
          <div className="pt-4">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20me%20interesa%20el%20Adiestramiento%20T%C3%A9cnico.`} target="_blank" rel="noopener noreferrer" className="btn-verus">MÁS INFORMACIÓN</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Paseos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waNumber = "573006081088";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".pas-img", {
        filter: "grayscale(0%)",
        scrollTrigger: { trigger: ".pas-img", start: "top 80%", end: "bottom 20%", scrub: 1 }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="paseos" className="bg-black pt-20 pb-8 overflow-hidden px-[12vw]">
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-32 items-center">
        <div className="flex-1 w-full aspect-square overflow-hidden glass-panel relative">
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200" 
            alt="Paseos" 
            className="pas-img w-full h-full object-cover filter grayscale scale-110"
          />
        </div>
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-verus-gold font-bold uppercase">
              [ CARDIO & COGNICIÓN ]
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
              PASEOS <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>ESTRUCTURADOS</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-base lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Servicio de alto nivel enfocado en las zonas residenciales de Ciudad Jardín y Pance. Entrenamiento funcional real.
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 font-mono text-[9px] tracking-widest text-verus-gold uppercase font-bold">
              <li className="border-2 border-verus-gold px-4 py-2 bg-verus-gold/10 text-white uppercase">CIUDAD JARDÍN</li>
              <li className="border-2 border-verus-gold px-4 py-2 bg-verus-gold/10 text-white uppercase">PANCE</li>
            </ul>
          </div>
          <div className="pt-6 text-center lg:text-left">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20quiero%20cupo%20para%20los%20Paseos%20Estructurados.`} target="_blank" rel="noopener noreferrer" className="btn-verus">RESERVAR CUPO</a>
          </div>
        </div>
      </div>
    </section>
  );
}
