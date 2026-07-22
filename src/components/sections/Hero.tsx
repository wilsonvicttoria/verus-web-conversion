import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* VIDEO BACKGROUND WITH CINEMATIC OVERLAYS */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 filter grayscale scale-105"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(229,178,0,0.12),transparent_70%)]" />

      {/* AMBIENT GLOW */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5B200]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-16">
        {/* TOP TECHNICAL BADGE */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E5B200] animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#E5B200] uppercase font-bold">
            VERUS PERFORMANCE LAB — SANTIAGO DE CALI
          </span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="font-black text-white uppercase tracking-tighter leading-[0.95] mb-8 font-display">
          <span className="text-[clamp(2.2rem,8vw,6.5rem)] block drop-shadow-2xl text-white">
            LA CIENCIA DEL
          </span>
          <span
            className="text-[clamp(2.2rem,8vw,6.5rem)] block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E5B200] via-[#FFD700] to-[#E5B200]"
          >
            COMPORTAMIENTO CANINO
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-normal">
          Psicología animal de alta exigencia, adiestramiento ético y paseos técnicos estructurados en Ciudad Jardín, Pance, Valle del Lili y Bochalema.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/adiestramiento-canino-cali"
            className="btn-verus rounded-sm text-xs font-bold w-full sm:w-auto"
          >
            VER PROGRAMA DE ADIESTRAMIENTO
          </Link>
          <Link
            to="/paseos-caninos-cali"
            className="bg-white/5 hover:bg-white/10 border border-white/15 px-8 py-4 text-white font-bold uppercase text-xs tracking-widest transition-all rounded-sm w-full sm:w-auto hover:border-[#E5B200]/50"
          >
            PASEOS TÉCNICOS GPS
          </Link>
        </div>

        {/* KEY HIGHLIGHTS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <span className="block font-mono text-xl font-black text-[#E5B200]">100%</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">CIENCIA ETOLÓGICA</span>
          </div>
          <div className="text-center">
            <span className="block font-mono text-xl font-black text-[#E5B200]">GPS</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">MONITOREO DE PASEOS</span>
          </div>
          <div className="text-center">
            <span className="block font-mono text-xl font-black text-[#E5B200]">CALI</span>
            <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest">ZONA SUR PRIORITARIA</span>
          </div>
          <div className="text-center">
            <span className="block font-mono text-xl font-black text-[#E5B200]">5.0 ★</span>
            <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest">VALORACIÓN DE TUTORES</span>
          </div>
        </div>
      </div>
    </section>
  );
}