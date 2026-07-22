import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 aurora-bg">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale scale-105"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#080b11] via-[#080b11]/75 to-[#080b11]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(229,178,0,0.12),transparent_70%)]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
        {/* TOP TECHNICAL BADGE */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5B200] animate-pulse" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#E5B200] uppercase font-bold">
            SANTIAGO DE CALI • ADIESTRAMIENTO & PASEOS TÉCNICOS
          </span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="font-black uppercase tracking-tight leading-[1.0] mb-8 font-display">
          <span className="text-[clamp(2.2rem,7.5vw,5.5rem)] block text-white drop-shadow-2xl">
            CIENCIA Y MODIFICACIÓN DEL
          </span>
          <span className="text-[clamp(2.2rem,7.5vw,5.5rem)] block mt-1 gold-gradient-text">
            COMPORTAMIENTO CANINO
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
          Entrenamiento etológico de alto rendimiento y paseos estructurados con monitoreo GPS en <strong className="text-white">Ciudad Jardín, Pance, Valle del Lili y Bochalema</strong>.
        </p>

        {/* DIRECT ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-16">
          <Link
            to="/adiestramiento-canino-cali"
            className="w-full sm:w-auto btn-verus text-xs font-bold text-center py-4 px-8"
          >
            🐕 ADIESTRAMIENTO CANINO
          </Link>
          <Link
            to="/paseos-caninos-cali"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#E5B200] py-4 px-8 text-white font-bold uppercase text-xs tracking-widest transition-all rounded-xl text-center"
          >
            🦮 PASEOS TÉCNICOS GPS
          </Link>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl font-black text-[#E5B200]">100%</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mt-1">PSICOLOGÍA CANINA</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl font-black text-[#E5B200]">GPS</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mt-1">MONITOREO EN VIVO</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl font-black text-[#E5B200]">CALI</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mt-1">ZONA SUR COBERTURA</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl font-black text-[#E5B200]">5.0 ★</span>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mt-1">RESEÑAS TUTORES</span>
          </div>
        </div>
      </div>
    </section>
  );
}