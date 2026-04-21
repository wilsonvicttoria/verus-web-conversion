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
    <section ref={containerRef} id="adiestramiento" className="bg-black py-20 lg:py-48 overflow-hidden px-[8vw]">
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
            {/* TÍTULO BLINDADO: clamp corregido para responsive real */}
            <h2 className="font-display text-[clamp(2.2rem,6vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
              ADIESTRAMIENTO <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>TÉCNICO</span>
            </h2>
          </div>
          <p className="text-base lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            Transformamos la relación con tu perro mediante la ciencia del comportamiento. Especialistas en rehabilitación y obediencia avanzada.
          </p>
          <div className="pt-4">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20me%20interesa%20el%20Adiestramiento%20T%C3%A9cnico.`} target="_blank" rel="noopener noreferrer" className="btn-verus">MÁS INFO</a>
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
    <section ref={containerRef} id="paseos" className="bg-black pt-20 pb-8 overflow-hidden px-[8vw]">
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
            {/* TÍTULO BLINDADO: clamp corregido para responsive real */}
            <h2 className="font-display text-[clamp(2.2rem,6vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
              PASEOS <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>ESTRUCTURADOS</span>
            </h2>
          </div>
          <p className="text-base lg:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            Sesión de entrenamiento funcional donde drenamos energía física mientras reforzamos la obediencia básica y el autocontrol.
          </p>
          <div className="pt-4">
            <a href={`https://wa.me/${waNumber}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20me%20interesa%20el%20servicio%20de%20Paseos%20Estructurados.`} target="_blank" rel="noopener noreferrer" className="btn-verus">MÁS INFO</a>
          </div>
        </div>
      </div>
    </section>
  );
}
