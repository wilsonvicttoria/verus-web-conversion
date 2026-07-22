import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="flex h-20 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-black text-2xl tracking-widest text-[#E5B200] uppercase font-display group-hover:scale-105 transition-transform">
            VERUS
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.3em] text-gray-400 border-l border-white/20 pl-3 uppercase">
            DOGS / CALI
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest text-gray-300 uppercase">
          <Link
            to="/"
            className={`transition hover:text-[#E5B200] ${isActive('/') ? 'text-[#E5B200] font-bold border-b border-[#E5B200] pb-1' : ''}`}
          >
            INICIO
          </Link>
          <Link
            to="/adiestramiento"
            className={`transition hover:text-[#E5B200] ${isActive('/adiestramiento') ? 'text-[#E5B200] font-bold border-b border-[#E5B200] pb-1' : ''}`}
          >
            ADIESTRAMIENTO
          </Link>
          <Link
            to="/paseos"
            className={`transition hover:text-[#E5B200] ${isActive('/paseos') ? 'text-[#E5B200] font-bold border-b border-[#E5B200] pb-1' : ''}`}
          >
            PASEOS TÉCNICOS
          </Link>
          <Link
            to="/blog"
            className={`transition hover:text-[#E5B200] ${isActive('/blog') ? 'text-[#E5B200] font-bold border-b border-[#E5B200] pb-1' : ''}`}
          >
            BLOG
          </Link>
          <Link
            to="/contacto"
            className={`transition hover:text-[#E5B200] ${isActive('/contacto') ? 'text-[#E5B200] font-bold border-b border-[#E5B200] pb-1' : ''}`}
          >
            CONTACTO
          </Link>
        </div>

        <a
          href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quisiera%20consultar%20disponibilidad%20de%20cupos%20en%20Cali."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#E5B200] to-[#FFD700] px-5 py-2.5 text-black font-black uppercase text-xs tracking-wider transition hover:scale-105 rounded-sm shadow-[0_0_20px_rgba(229,178,0,0.3)]"
        >
          RESERVAR CUPO
        </a>
      </div>
    </nav>
  );
}