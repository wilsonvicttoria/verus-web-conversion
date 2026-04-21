import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phone = "573006081088";
  const message = "Hola Verus 🐾, quiero agendar una evaluación personalizada para mi perro. ✅";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", { y: 60, opacity: 0, duration: 1.5, ease: "expo.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsinline className="h-full w-full object-cover opacity-30 grayscale contrast-[1.2]">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dog-running-in-the-grass-1188-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content relative z-10 w-full px-[10vw]">
        <div className="max-w-[85vw] mx-auto">
          <span className="mb-4 inline-block font-mono text-[10px] tracking-[0.5em] text-verus-gold font-bold uppercase lg:text-[11px]">
            [ ADIESTRAMIENTO DE ÉLITE ]
          </span>
          <h1 className="font-display text-[clamp(1.8rem,8vw,7.5rem)] font-black tracking-tighter leading-[0.9] text-white mb-6 uppercase">
            LA CIENCIA DEL <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>COMPORTAMIENTO</span>
          </h1>
          <p className="mb-10 mx-auto max-w-xl text-base lg:text-xl font-light text-gray-400 leading-relaxed">
            No paseamos perros. Los entrenamos mientras caminan. <br className="hidden lg:block"/> Psicología canina avanzada en Cali.
          </p>
          <a 
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-verus"
          >
            AGENDAR EVALUACIÓN
          </a>
        </div>
      </div>
    </section>
  );
}
