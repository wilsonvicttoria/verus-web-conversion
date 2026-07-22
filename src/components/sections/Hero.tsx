export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>
      
      {/* CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      
      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.9))]" />
      
      {/* GOLD GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-verus-gold/20 rounded-full blur-[150px] animate-pulse" />
      
      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <span className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.5em] text-verus-gold/80 mb-8 uppercase">
          <span className="w-2 h-2 bg-verus-gold rounded-full animate-pulse" />
          CALI / VALLE DEL CAUCA
        </span>
        
        <h1 className="font-black text-white uppercase leading-[0.9] mb-8">
          <span className="text-[clamp(2.5rem,10vw,8rem)] md:text-[clamp(3rem,12vw,10rem)] block drop-shadow-2xl">
            LA CIENCIA DEL
          </span>
          <span className="text-[clamp(2.5rem,10vw,8rem)] md:text-[clamp(3rem,12vw,10rem)] block mt-2 text-transparent" style={{ WebkitTextStroke: "2px #E5B200" }}>
            COMPORTAMIENTO
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mt-4 mb-12">
          Evolución técnica y psicología de alto rendimiento para el perro moderno.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20🐾%2C%20quiero%20reservar%20un%20cupo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-verus-gold via-verus-goldLight to-verus-gold px-10 py-4 text-black font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(229,178,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Reservar Cupo
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>
        </div>
        
        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-verus-gold rounded-full mt-2 animate-bounce" />
          </div>
          <span className="text-[9px] font-mono tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}