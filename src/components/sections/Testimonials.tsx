import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reviews = [
  {
    name: "Andrés Holguín",
    location: "Pance",
    text: "Buscaba un nivel de control técnico que ninguna escuela tradicional en Cali me ofrecía. Verus transformó la reactividad de mi perro en una obediencia impecable.",
    program: "Adiestramiento Técnico"
  },
  {
    name: "Isabella Varcárcel",
    location: "Ciudad Jardín",
    text: "Los paseos estructurados son otro nivel. Mi perro regresa drenado mentalmente, no solo cansado físicamente. El reporte técnico diario es fundamental.",
    program: "Paseo de Rendimiento"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 lg:py-48 px-[10vw] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <span className="font-mono text-[10px] tracking-[0.5em] text-verus-gold font-bold uppercase mb-4 block">
            [ RESULTADOS VERIFICADOS ]
          </span>
          <h2 className="font-display text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            PRUEBA <br/> <span className="text-gray-800">DE ÉLITE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {reviews.map((rev, i) => (
            <div key={i} className="testimonial-card glass-panel p-8 lg:p-12 space-y-8 border-l-2 border-l-verus-gold/30">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-white uppercase">{rev.name}</h3>
                  <p className="font-mono text-[10px] text-verus-gold tracking-widest uppercase">{rev.location}</p>
                </div>
                <span className="font-mono text-[9px] px-3 py-1 border border-white/10 text-gray-500 rounded-full uppercase">
                  {rev.program}
                </span>
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-light text-gray-300 leading-relaxed italic">
                "{rev.text}"
              </blockquote>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 w-6 bg-verus-gold/40" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
