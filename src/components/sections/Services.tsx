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
        filter: "grayscale(0%) brightness(0.9)",
        scale: 1.05,
        scrollTrigger: { 
          trigger: ".adi-img-box", 
          start: "top 80%", 
          end: "bottom 20%", 
          scrub: 1 
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="adiestramiento" className="bg-black py-20 lg:py-48 overflow-hidden px-[8vw]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
        <div className="adi-img-box flex-1 w-full aspect-square overflow-hidden glass-panel relative group">
          <img 
            src="/assets/img/adiestramiento_elite.png" 
            alt="Adiestramiento Técnico de Élite en Cali" 
            className="adi-img w-full h-full object-cover filter grayscale contrast-[1.2] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
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
            Rehabilitación técnica de conductas y obediencia avanzada. Especialistas en el manejo de perros en entornos de alta exigencia mediante ciencia del comportamiento.
          </p>
          <div className="pt-4">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20me%20interesa%20el%20Adiestramiento%20T%C3%A9cnico.%20%E2%9C%85`} target="_blank" rel="noopener noreferrer" className="btn-verus text-sm uppercase">MÁS INFORMACIÓN</a>
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
        filter: "grayscale(0%) brightness(0.9)",
        scale: 1.05,
        scrollTrigger: { 
          trigger: ".pas-img-box", 
          start: "top 80%", 
          end: "bottom 20%", 
          scrub: 1 
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="paseos" className="bg-black pt-20 pb-8 overflow-hidden px-[8vw]">
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-32 items-center">
        {/* Nueva Imagen de Paseos Integrada */}
        <div className="pas-img-box flex-1 w-full aspect-square overflow-hidden glass-panel relative group">
          <img 
            src="/assets/img/paseos_elite.png" 
            alt="Paseos Caninos Estructurados en Pance Cali" 
            className="pas-img w-full h-full object-cover filter grayscale contrast-[1.2] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.4em] text-verus-gold font-bold uppercase">
              [ ESPECIALISTAS EN CIUDAD JARDÍN & PANCE ]
            </span>
            <h2 className="font-display text-[clamp(2.2rem,6vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
              PASEOS <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>ESTRUCTURADOS</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-base lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Servicio de alto nivel enfocado en las zonas residenciales más exclusivas del sur de Cali. Optimizamos el entorno para el entrenamiento funcional.
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 font-mono text-[9px] tracking-widest text-verus-gold uppercase font-bold">
              <li className="border-2 border-verus-gold px-4 py-2 bg-verus-gold/10 text-white uppercase">CIUDAD JARDÍN</li>
              <li className="border-2 border-verus-gold px-4 py-2 bg-verus-gold/10 text-white uppercase">PANCE</li>
            </ul>
          </div>
          <div className="pt-6 text-center lg:text-left">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20quiero%20cupo%20para%20los%20Paseos%20Estructurados.%20%E2%9C%85`} target="_blank" rel="noopener noreferrer" className="btn-verus text-sm uppercase">Reservar Cupo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
