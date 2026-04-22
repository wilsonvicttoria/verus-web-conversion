"use client";

export default function CTA() {
  const phone = "573006081088";
  const message = "Hola Verus 🐾, solicito información para iniciar el proceso técnico con mi perro. ✅";

  return (
    <section className="relative py-24 lg:py-48 overflow-hidden bg-black border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-verus-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-[12vw] relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] tracking-[0.5em] text-verus-gold uppercase font-bold lg:text-[12px]">
            [ ALTO RENDIMIENTO CANINO ]
          </span>
          <h2 className="font-display text-[clamp(2rem,8vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
            ÚNETE A LA<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #E5B200" }}>REVOLUCIÓN</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="max-w-2xl text-lg lg:text-2xl font-light text-gray-400 leading-relaxed px-4">
            Solicita información para iniciar la transformación técnica de tu perro. Cupos exclusivos para propietarios que buscan la excelencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-verus text-center text-[11px] px-12"
            >
              SOLICITAR INFORMACIÓN
            </a>
            <a 
              href={`tel:+${phone}`} 
              className="glass-panel px-10 py-4 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black flex items-center justify-center"
            >
              CONSULTA DIRECTA
            </a>
          </div>
        </div>

        <div className="pt-12 flex flex-wrap justify-center gap-8 lg:gap-16 font-mono text-[9px] tracking-widest text-gray-600 uppercase">
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">Élite</span>
            <span>Técnico</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">Local</span>
            <span>Cali Sur</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-verus-gold text-sm font-bold">Cupos</span>
            <span>Limitados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
