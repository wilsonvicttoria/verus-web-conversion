import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';

export default function PaseosPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paseos Caninos Técnicos en Cali - VERUS DOGS",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VERUS DOGS",
      "telephone": "+573006081088"
    },
    "areaServed": ["Ciudad Jardín", "Pance", "Valle del Lili", "Bochalema", "El Ingenio", "Santiago de Cali"],
    "description": "Paseos estructurados con estimulación mental, ejercicio controlado y monitoreo GPS en Santiago de Cali."
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Paseos Caninos Técnicos en Cali (Ciudad Jardín, Pance) | VERUS"
        description="Servicio profesional de paseos de perros en Cali. Cobertura en Ciudad Jardín, Pance, Valle del Lili y Bochalema. Socialización y ejercicio seguro."
        canonical="https://verusdogs.vercel.app/paseos-caninos-cali"
        schema={schemaData}
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          EJERCICIO & SOCIALIZACIÓN GUIADA EN CALI
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          PASEOS CANINOS TÉCNICOS EN SANTIAGO DE CALI
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Diseñados para brindar estimulación mental, ejercicio físico controlado y seguridad absoluta en las mejores zonas de Ciudad Jardín, Pance, Valle del Lili y Bochalema.
        </p>
      </div>

      {/* HERO IMAGE BANNER */}
      <div className="relative rounded-3xl overflow-hidden mb-20 border border-white/10 shadow-2xl h-80 md:h-[450px]">
        <img
          src="/assets/img/paseos_elite.webp"
          alt="Paseos Caninos en Ciudad Jardín y Pance Cali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#E5B200] uppercase tracking-widest block mb-1">
              MONITOREO & SEGURIDAD TOTAL
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white">
              PASEOS CON SEGUIMIENTO GPS & REPORTES
            </h2>
          </div>
          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quisiera%20agendar%20paseos%20técnicos%20en%20Cali."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-verus rounded-sm text-xs"
          >
            SOLICITAR DISPONIBILIDAD
          </a>
        </div>
      </div>

      {/* TRES PILARES PASEOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="glass-panel-gold p-8">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">01.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">ESTIMULACIÓN MENTAL & OLFATO</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Rutas seleccionadas en zonas verdes de Cali que fomentan el rastreo natural y canalizan el exceso de energía.
          </p>
        </div>

        <div className="glass-panel-gold p-8">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">02.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">GRUPOS REDUCIDOS Y COMPATIBLES</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Formación de grupos pequeños según temperamento para garantizar seguridad y socialización armónica.
          </p>
        </div>

        <div className="glass-panel-gold p-8">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">03.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">MONITOREO EN TIEMPO REAL</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ubicación GPS durante el recorrido y reportes continuos sobre deposiciones, hidratación y estado emocional.
          </p>
        </div>
      </div>

      {/* ENLAZADO INTERNO */}
      <div className="bg-[#080808] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-white text-lg uppercase mb-1">¿TU PERRO SE JALA DE LA CORREA O TIENE REACTIVIDAD?</h4>
          <p className="text-gray-400 text-sm">
            Recomendamos complementar los paseos con nuestro programa de{' '}
            <Link to="/adiestramiento-canino-cali" className="text-[#E5B200] underline font-bold">
              Adiestramiento Canino Élite
            </Link>{' '}
            o consultar nuestro{' '}
            <Link to="/faq" className="text-[#E5B200] underline font-bold">
              Centro de Preguntas Frecuentes
            </Link>.
          </p>
        </div>
        <Link to="/contacto" className="btn-verus rounded-sm text-xs whitespace-nowrap">
          CONSULTAR CUPO EN WHATSAPP
        </Link>
      </div>
    </div>
  );
}
