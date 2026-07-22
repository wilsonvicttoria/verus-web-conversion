import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'INICIO', path: '/', icon: '🏠' },
    { name: 'ADIESTRAMIENTO', path: '/adiestramiento-canino-cali', icon: '🐕' },
    { name: 'PASEOS TÉCNICOS', path: '/paseos-caninos-cali', icon: '🦮' },
    { name: 'PREGUNTAS (FAQ)', path: '/faq', icon: '❓' },
    { name: 'BLOG', path: '/blog', icon: '📝' },
    { name: 'CONTACTO', path: '/contacto', icon: '📞' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#080b11]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="flex h-20 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        {/* BRAND LOGO */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5B200] to-[#b88e00] flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(229,178,0,0.4)] group-hover:scale-105 transition-transform">
            V
          </div>
          <div>
            <span className="font-black text-2xl tracking-widest text-[#E5B200] uppercase font-display block leading-none">
              VERUS
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-gray-400 uppercase block mt-1">
              PERFORMANCE LAB • CALI
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU LINKS */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-wider text-gray-300 uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 hover:text-[#E5B200] px-2 py-1 rounded ${
                isActive(link.path)
                  ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] bg-[#E5B200]/10'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quiero%20reservar%20un%20cupo."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#E5B200] via-[#FFD700] to-[#E5B200] px-5 py-2.5 text-black font-black uppercase text-xs tracking-wider transition-all duration-300 hover:scale-105 rounded-lg shadow-[0_0_20px_rgba(229,178,0,0.35)]"
          >
            <span>RESERVAR CUPO</span>
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          </a>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#E5B200] transition-all"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19] border-b border-white/10 px-6 py-6 space-y-3 animate-fadeIn">
          <div className="text-[10px] font-mono tracking-widest text-[#E5B200] uppercase mb-2 border-b border-white/5 pb-2">
            NAVEGACIÓN PRINCIPAL
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-xl font-mono text-sm tracking-wider uppercase transition-all ${
                isActive(link.path)
                  ? 'bg-[#E5B200]/20 text-[#E5B200] font-bold border border-[#E5B200]/40'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
          
          <div className="pt-4 border-t border-white/10">
            <a
              href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quiero%20reservar%20un%20cupo."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5B200] to-[#FFD700] py-3.5 text-black font-black uppercase text-xs tracking-widest rounded-xl shadow-lg"
            >
              <span>RESERVAR VÍA WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}