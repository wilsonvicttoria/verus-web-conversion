import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-16 px-6 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-block">
            <span className="font-black text-3xl tracking-widest text-[#E5B200] uppercase font-display">
              VERUS DOGS
            </span>
          </Link>
          <p className="font-mono text-xs tracking-[0.3em] text-gray-400 uppercase mt-2">
            PERFORMANCE & BEHAVIOR LAB — SANTIAGO DE CALI
          </p>
        </div>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Evolución técnica y psicología de alto rendimiento para perros en Santiago de Cali. 
          Cobertura en Ciudad Jardín, Pance, Valle del Lili, Bochalema, El Ingenio y Sur de Cali.
        </p>

        <div className="flex flex-wrap justify-center gap-8 font-mono text-xs tracking-widest text-gray-400 uppercase mb-12">
          <Link to="/" className="hover:text-[#E5B200] transition">INICIO</Link>
          <Link to="/adiestramiento" className="hover:text-[#E5B200] transition">ADIESTRAMIENTO</Link>
          <Link to="/paseos" className="hover:text-[#E5B200] transition">PASEOS TÉCNICOS</Link>
          <Link to="/blog" className="hover:text-[#E5B200] transition">BLOG</Link>
          <Link to="/contacto" className="hover:text-[#E5B200] transition">CONTACTO</Link>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-600">
          <p>© 2026 VERUS PERFORMANCE LAB. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>SANTIAGO DE CALI, COLOMBIA | TEL: +57 300 608 1088</p>
        </div>
      </div>
    </footer>
  );
}