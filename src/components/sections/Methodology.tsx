import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { num: "01", title: "ACTIVACIÓN", subtitle: "CALENTAMIENTO", desc: "Preparamos el cuerpo y la mente para el trabajo. Enfoque y predisposición positiva.", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200" },
  { num: "02", title: "POTENCIA", subtitle: "CARDIO", desc: "Liberación de energía acumulada mediante ejercicio físico estructurado.", img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200" },
  { num: "03", title: "IMPULSO", subtitle: "MOTIVACIÓN", desc: "Desarrollamos el deseo de trabajar junto al guía. Vínculo indestructible.", img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1200" },
  { num: "04", title: "COGNICIÓN", subtitle: "MENTAL", desc: "Resolución de problemas y obediencia técnica bajo presión.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200" },
  { num: "05", title: "CALMA", subtitle: "REGULACIÓN", desc: "Cierre con ejercicios de relajación. Un perro equilibrado en todo entorno.", img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=2000" },
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".method-row");
      rows.forEach((row: any, i) => {
        const isEven = i % 2 === 0;
        const img = row.querySelector(".method-img-element");
        
        gsap.fromTo(row, 
          { x: isEven ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "top 20%",
              scrub: 1,
            }
          }
        );

        gsap.to(img, {
          filter: "grayscale(0%)",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-20 lg:py-48 overflow-hidden px-[8vw]">
      <div className="max-w-4xl">
        <span className="mb-4 block font-mono text-[10px] tracking-[0.4em] text-verus-gold font-bold uppercase">
          [ EL SISTEMA VERUS ]
        </span>
        <h2 className="font-display text-[clamp(1.8rem,6vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">
          METODOLOGÍA <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>TÉCNICA</span>
        </h2>
      </div>

      <div className="mt-32 space-y-40 lg:space-y-64">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`method-row flex flex-col gap-10 lg:flex-row lg:items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 space-y-6 text-center lg:text-left px-2">
              <span className="font-mono text-3xl lg:text-6xl font-black text-white/10">{step.num}</span>
              <h3 className="font-display text-[clamp(1.5rem,5vw,5rem)] font-black text-white leading-none uppercase">{step.title}</h3>
              <p className="max-w-md mx-auto lg:mx-0 text-base lg:text-xl font-light text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
            
            <div className="flex-1 aspect-square glass-panel overflow-hidden relative">
              <img
                src={step.img}
                alt={step.title}
                className="method-img-element h-full w-full object-cover filter grayscale"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
