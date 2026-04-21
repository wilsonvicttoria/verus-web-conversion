"use client";

export default function CTA() {
  const phone = "573006081088";
  const message = "Hola Verus 🐾, quiero agendar una evaluación personalizada para mi perro. ✅";

  return (
    <section className="relative py-24 lg:py-48 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-verus-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-[10vw] relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] tracking-[0.5em] text-verus-gold uppercase font-bold lg:text-[12px]">
            [ TU PERRO, SU MEJOR VERSIÓN ]
          </span>
          <h2 className="font-display text-[clamp(2rem,8vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
            ÚNETE A LA<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>REVOLUCIÓN</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="max-w-2xl text-lg lg:text-2xl font-light text-gray-400 leading-relaxed px-4">
            Reserva hoy tu evaluación técnica y descubre el verdadero potencial de tu perro.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-verus text-center"
            >
              WhatsApp Directo
            </a>
            <a 
              href={`tel:+${phone}`} 
              className="glass-panel px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black flex items-center justify-center"
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="pt-12 flex justify-center gap-12 font-mono text-[10px] tracking-widest text-gray-600 uppercase">
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">Elite</span>
            <span>Training</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">Local</span>
            <span>Cali</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">100%</span>
            <span>Técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
}
