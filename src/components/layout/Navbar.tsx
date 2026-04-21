import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [localTime, setLocalTime] = useState("00:00:00");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const phone = "573006081088";
  const ig = "https://www.instagram.com/verusdogs?igsh=b3U0aTF6a2Q1anJv";

  useEffect(() => {
    const timer = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // METODOLOGÍA eliminada de la navegación principal por redundancia estratégica
  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "ADIESTRAMIENTO", href: "#adiestramiento" },
    { name: "PASEOS", href: "#paseos" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 z-[1000] h-[70px] w-full border-b border-white/5 bg-black/80 backdrop-blur-xl lg:h-[100px]">
        <div className="flex h-full items-center justify-between px-[6vw]">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="group flex flex-col leading-none">
            <span className="font-display text-2xl lg:text-4xl font-black tracking-tighter text-verus-gold uppercase transition-transform duration-500 group-hover:scale-105">VERUS</span>
            <span className="font-mono text-[8px] lg:text-[10px] tracking-[0.4em] text-gray-500 uppercase mt-0.5">PERFORMANCE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link key={link.name} to={link.href} className="font-mono text-[10px] tracking-[0.3em] text-gray-400 hover:text-verus-gold transition-colors">
                  {link.name}
                </Link>
              ) : (
                <button key={link.name} onClick={() => handleNavClick(link.href)} className="font-mono text-[10px] tracking-[0.3em] text-gray-400 hover:text-verus-gold transition-colors">
                  {link.name}
                </button>
              )
            ))}
            <a href={`https://wa.me/${phone}?text=Hola%20Verus%20%F0%9F%90%BE%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20personalizada.%20%E2%9C%85`} className="glass-panel px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-verus-gold hover:text-black transition-all">
              RESERVAR
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-verus-gold">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[999] bg-black transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}>
        <div className="flex flex-col h-full justify-center px-[12vw] space-y-8">
          <span className="font-mono text-[10px] text-verus-gold tracking-[0.5em] mb-4">[ MENÚ ]</span>
          {navLinks.map((link) => (
            link.href.startsWith("/") ? (
              <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="font-display text-3xl font-black text-white hover:text-verus-gold transition-colors uppercase">
                {link.name}
              </Link>
            ) : (
              <button key={link.name} onClick={() => handleNavClick(link.href)} className="text-left font-display text-3xl font-black text-white hover:text-verus-gold transition-colors uppercase leading-none">
                {link.name}
              </button>
            )
          ))}
          <div className="pt-10 border-t border-white/10 space-y-4">
            <a href={ig} target="_blank" rel="noopener noreferrer" className="block font-mono text-[11px] text-verus-gold uppercase tracking-[0.4em]">INSTAGRAM</a>
            <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-widest">{localTime} CALI, CO</span>
          </div>
        </div>
      </div>
    </>
  );
}
