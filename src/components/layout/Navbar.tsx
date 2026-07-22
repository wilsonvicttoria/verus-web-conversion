import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#050505]/90 backdrop-blur-xl border-b border-white/10">
      <div className="flex h-20 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-black text-2xl tracking-widest text-[#E5B200] uppercase font-display group-hover:scale-105 transition-transform">
            VERUS
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.3em] text-gray-400 border-l border-white/20 pl-3 uppercase">
            DOGS / CALI
          </span>
        </Link>
        
        <div className="hidden lg:flex gap-7 font-mono text-[11px] tracking-widest text-gray-300 uppercase">
          <Link
            to="/"
            className={`transition hover:text-[#E5B200] ${isActive('/') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            INICIO
          </Link>
          <Link
            to="/adiestramiento-canino-cali"
            className={`transition hover:text-[#E5B200] ${isActive('/adiestramiento-canino-cali') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            ADIESTRAMIENTO
          </Link>
          <Link
            to="/paseos-caninos-cali"
            className={`transition hover:text-[#E5B200] ${isActive('/paseos-caninos-cali') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            PASEOS TÉCNICOS
          </Link>
          <Link
            to="/blog"
            className={`transition hover:text-[#E5B200] ${isActive('/blog') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            BLOG
          </Link>
          <Link
            to="/faq"
            className={`transition hover:text-[#E5B200] ${isActive('/faq') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            FAQ
          </Link>
          <Link
            to="/contacto"
            className={`transition hover:text-[#E5B200] ${isActive('/contacto') ? 'text-[#E5B200] font-bold border-b-2 border-[#E5B200] pb-1' : ''}`}
          >
            CONTACTO
          </Link>
        </div>

        <a
          href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quisiera%20consultar%20disponibilidad%20de%20cupos%20en%20Cali."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-verus rounded-sm text-[11px]"
        >
          RESERVAR CUPO
        </a>
      </div>
    </nav>
  );
}