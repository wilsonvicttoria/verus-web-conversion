import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phone = "573006081088";
  const message = "Hola Verus 🐾, quiero solicitar un cupo para iniciar el proceso con mi perro. ✅";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { y: 30, opacity: 0, duration: 1, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-center px-[10vw]">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsinline className="h-full w-full object-cover opacity-30 grayscale contrast-[1.2]">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dog-running-in-the-grass-1188-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="hero-content relative z-10 w-full max-w-[90vw] mx-auto">
        <span className="mb-4 inline-block font-mono text-[10px] tracking-[0.4em] text-verus-gold font-bold uppercase">
          [ CALI / VALLE ]
        </span>
        
        <h1 className="font-display font-black tracking-tighter text-white mb-6 uppercase leading-[1]">
          <span className="text-[clamp(1.6rem,7vw,6.5rem)] block">LA CIENCIA DEL</span>
          <span className="text-[clamp(1.6rem,7vw,6.5rem)] text-transparent block" style={{ WebkitTextStroke: "1px #E5B200" }}>COMPORTAMIENTO</span>
        </h1>

        <p className="mb-10 mx-auto max-w-lg text-base lg:text-lg font-light text-gray-400 leading-relaxed px-2">
          Evolución técnica y psicología de alto rendimiento para el perro moderno.
        </p>
        
        <div className="flex justify-center">
          <a 
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-verus whitespace-nowrap inline-block text-[11px] px-10"
          >
            RESERVAR CUPO
          </a>
        </div>
      </div>
    </section>
  );
}
