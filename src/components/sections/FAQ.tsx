import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué eligen Ciudad Jardín y Pance?",
    a: "Son los entornos ideales para nuestra metodología. Su topografía nos permite realizar un drenaje cognitivo y físico de alto nivel."
  },
  {
    q: "¿Cómo garantizan la seguridad de mi perro?",
    a: "Protocolos de manejo profesional, equipos de seguridad de alta resistencia y reportes de desempeño técnicos para cada sesión."
  },
  {
    q: "¿Tienen horarios para el Sur de Cali?",
    a: "Sí, operamos con rutas optimizadas en el Sur para garantizar puntualidad y sesiones técnicas de trabajo real."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 lg:py-40 px-[10vw]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center lg:text-left mb-16">
          <span className="font-mono text-[10px] tracking-[0.5em] text-verus-gold font-bold uppercase mb-4 block">
            [ SOPORTE & CONSULTAS ]
          </span>
          <h2 className="font-display text-[clamp(1.6rem,6vw,4.5rem)] font-black text-white uppercase tracking-tighter leading-none">
            DUDAS <span className="text-gray-800 text-transparent" style={{ WebkitTextStroke: "1px #333" }}>FRECUENTES</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass-panel overflow-hidden transition-all duration-500 ${openIndex === i ? 'border-verus-gold/30' : 'border-white/5'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 lg:p-8 flex items-center justify-between text-left">
                <h3 className={`font-display text-base lg:text-xl font-bold uppercase tracking-tight transition-colors ${openIndex === i ? 'text-verus-gold' : 'text-white'}`}>{faq.q}</h3>
                <div className="text-verus-gold">{openIndex === i ? <Minus size={18} /> : <Plus size={18} />}</div>
              </button>
              <div className={`px-6 lg:px-8 transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 font-light text-sm lg:text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
