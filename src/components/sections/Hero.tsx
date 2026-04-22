import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phone = "573006081088";
  const message = "Hola Verus 🐾, quiero solicitar un cupo para iniciar el proceso con mi perro. ✅";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1.2, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-center px-6 sm:px-12">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsinline 
          className="h-full w-full object-cover opacity-40 grayscale-[0.2] contrast-[1.1] brightness-[0.7]"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* BLOQUE DE CONTENIDO BLINDADO: Ancho controlado para evitar desbordamiento */}
      <div className="hero-content relative z-10 w-full max-w-[85vw] md:max-w-4xl mx-auto flex flex-col items-center">
        <span className="mb-4 inline-block font-mono text-[9px] tracking-[0.4em] text-verus-gold font-bold uppercase lg:text-[11px]">
          [ CALI / VALLE DEL CAUCA ]
        </span>
        
        <h1 className="font-display font-black tracking-tighter text-white mb-6 uppercase leading-[1] w-full">
          <span className="text-[clamp(1.8rem,7vw,6.5rem)] block">LA CIENCIA DEL</span>
          <span className="text-[clamp(1.8rem,7vw,6.5rem)] text-transparent block" style={{ WebkitTextStroke: "1px #E5B200" }}>COMPORTAMIENTO</span>
        </h1>

        <p className="mb-10 max-w-lg text-base lg:text-xl font-light text-gray-400 leading-relaxed px-4">
          Evolución técnica y psicología de alto rendimiento para el perro moderno.
        </p>
        
        <a 
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-verus whitespace-nowrap inline-block text-[11px] px-12"
        >
          RESERVAR CUPO
        </a>
      </div>
    </section>
  );
}
