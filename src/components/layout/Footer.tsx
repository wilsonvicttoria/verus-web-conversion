import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/10 py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* COL 1: BRAND */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-black text-3xl tracking-widest text-[#E5B200] uppercase font-display">
                VERUS
              </span>
              <span className="block font-mono text-[9px] tracking-[0.3em] text-gray-400 uppercase mt-1">
                PERFORMANCE LAB — CALI
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Servicio técnico especializado en adiestramiento canino de alta exigencia, psicología del comportamiento y paseos estructurados en Santiago de Cali.
            </p>
            <p className="font-mono text-xs text-[#E5B200]">
              +57 300 608 1088
            </p>
          </div>

          {/* COL 2: SERVICIOS */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#E5B200] uppercase mb-4 font-bold">
              PROGRAMAS & SERVICIOS
            </h4>
            <ul className="space-y-3 font-mono text-xs text-gray-400">
              <li>
                <Link to="/adiestramiento-canino-cali" className="hover:text-white transition">
                  • Adiestramiento Canino Cali
                </Link>
              </li>
              <li>
                <Link to="/paseos-caninos-cali" className="hover:text-white transition">
                  • Paseos Caninos Técnicos
                </Link>
              </li>
              <li>
                <Link to="/adiestramiento-canino-cali#modificacion" className="hover:text-white transition">
                  • Modificación de Conducta
                </Link>
              </li>
              <li>
                <Link to="/adiestramiento-canino-cali#cachorros" className="hover:text-white transition">
                  • Educación para Cachorros
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: COBERTURA LOCAL */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#E5B200] uppercase mb-4 font-bold">
              ZONAS DE COBERTURA EN CALI
            </h4>
            <ul className="space-y-2 font-mono text-[11px] text-gray-400">
              <li>• Ciudad Jardín & Pance</li>
              <li>• Valle del Lili & Bochalema</li>
              <li>• El Ingenio & Caney</li>
              <li>• Meléndez & Sur de Cali</li>
            </ul>
          </div>

          {/* COL 4: RECURSOS & NAVEGACIÓN */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-[#E5B200] uppercase mb-4 font-bold">
              RECURSOS & AUTORIDAD
            </h4>
            <ul className="space-y-3 font-mono text-xs text-gray-400">
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  • Blog Técnico & Etología
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  • Preguntas Frecuentes (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition">
                  • Agendar Valoración
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-600 uppercase">
          <p>© 2026 VERUS PERFORMANCE LAB. TODOS LOS DERECHOS RESERVADOS.</p>
          <p>SANTIAGO DE CALI, COLOMBIA | TEL: +57 300 608 1088</p>
        </div>
      </div>
    </footer>
  );
}