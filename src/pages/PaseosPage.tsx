import SEOHead from '@/components/seo/SEOHead';

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
    "areaServed": ["Ciudad Jardín", "Pance", "Valle del Lili", "Bochalema", "El Ingenio"],
    "description": "Paseos estructurados con estimulación mental, ejercicio controlado y monitoreo en Santiago de Cali."
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Paseos Caninos Técnicos en Cali (Ciudad Jardín, Pance) | VERUS DOGS"
        description="Servicio profesional de paseos de perros en Cali. Cobertura en Ciudad Jardín, Pance, Valle del Lili y Bochalema. Socialización y ejercicio seguro."
        canonical="https://verusdogs.vercel.app/paseos"
        schema={schemaData}
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          EJERCICIO & SOCIALIZACIÓN GUIADA
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          PASEOS CANINOS TÉCNICOS EN CALI
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          No somos un paseo convencional. Brindamos paseos estructurados con estimulación cognitiva, trabajo de olfato y control de estímulos en las mejores zonas verdes del sur de Cali.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="space-y-6">
          <div className="border-l-2 border-[#E5B200] pl-6">
            <h3 className="text-xl font-bold uppercase text-white mb-2">MONITOREO & REPORTES EN TIEMPO REAL</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Seguimiento por GPS y reportes continuos sobre la actividad física, deposiciones y comportamiento durante cada sesión de paseo.
            </p>
          </div>

          <div className="border-l-2 border-[#E5B200] pl-6">
            <h3 className="text-xl font-bold uppercase text-white mb-2">GRUPOS REDUCIDOS & COMPATIBILIDAD</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Selección rigurosa de grupos según temperamento, tamaño y nivel de energía para garantizar paseos 100% seguros sin incidentes.
            </p>
          </div>

          <div className="border-l-2 border-[#E5B200] pl-6">
            <h3 className="text-xl font-bold uppercase text-white mb-2">COBERTURA ZONA SUR DE CALI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Atención prioritaria en Ciudad Jardín, Pance, Valle del Lili, Bochalema, El Ingenio y Caney.
            </p>
          </div>
        </div>

        <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-3xl text-center">
          <img
            src="/assets/img/paseos_elite.webp"
            alt="Paseo de Perros en Ciudad Jardín Cali"
            className="w-full h-72 object-cover rounded-2xl mb-8"
            loading="lazy"
          />
          <h3 className="text-2xl font-black uppercase text-white mb-4">RESERVA EL PASEO DE TU PERRO</h3>
          <p className="text-gray-400 text-sm mb-6">
            Plazas limitadas por zona para mantener nuestro estándar técnico de calidad.
          </p>
          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quisiera%20agendar%20paseos%20técnicos%20en%20Cali."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gradient-to-r from-[#E5B200] to-[#FFD700] py-4 text-black font-black uppercase text-xs tracking-widest transition hover:scale-105 rounded-sm shadow-[0_0_30px_rgba(229,178,0,0.4)]"
          >
            CONSULTAR DISPONIBILIDAD DE CUPO
          </a>
        </div>
      </div>
    </div>
  );
}
