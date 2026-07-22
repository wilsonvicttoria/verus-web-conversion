import SEOHead from '@/components/seo/SEOHead';

export default function AdiestramientoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Adiestramiento Canino Élite en Cali - VERUS DOGS",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VERUS DOGS",
      "telephone": "+573006081088"
    },
    "areaServed": "Santiago de Cali",
    "description": "Programa de adiestramiento profesional, modificación de conducta canina y educación para cachorros en Santiago de Cali."
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Adiestramiento Canino Élite en Cali | VERUS DOGS"
        description="Programa especializado de adiestramiento canino y modificación de conducta en Santiago de Cali (Ciudad Jardín, Pance, Valle del Lili). Psicología canina avanzada."
        canonical="https://verusdogs.vercel.app/adiestramiento"
        schema={schemaData}
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          PROGRAMA DE ENTRENAMIENTO TÉCNICO
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          ADIESTRAMIENTO CANINO ÉLITE EN CALI
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Diseñado para transformar la convivencia y potenciar el bienestar emocional de tu perro en Santiago de Cali a través de metodologías basadas en evidencia científica y psicología animal.
        </p>
      </div>

      {/* METODOLOGÍA & PLANES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">01.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">ENTRENAMIENTO DE CACHORROS</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Socialización temprana, hábitos higiénicos, prevención de ansiedad por separación y control de mordiscos en el hogar.
          </p>
          <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">Cachorros 2 a 6 Meses</span>
        </div>

        <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">02.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">OBEDIENCIA URBANA AVANZADA</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Paseo con correa destensada, llamado indestructible ante distracciones en parques de Cali y autocontrol en espacios públicos.
          </p>
          <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">Perros Jóvenes & Adultos</span>
        </div>

        <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl">
          <span className="text-[#E5B200] font-mono text-xl font-bold block mb-4">03.</span>
          <h3 className="text-xl font-bold uppercase text-white mb-3">MODIFICACIÓN DE CONDUCTA</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Tratamiento técnico especializado para perros reactivos, agresividad, miedos intensos o hábitos destructivos.
          </p>
          <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">Evaluación Personalizada</span>
        </div>
      </div>

      {/* BANNER DE ACCIÓN WHATSAPP */}
      <div className="bg-gradient-to-r from-[#0f0e0a] via-[#1a1708] to-[#0f0e0a] border border-[#E5B200]/30 rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-4">
          ¿LISTO PARA TRANSFORMAR EL COMPORTAMIENTO DE TU PERRO EN CALI?
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Solicita una valoración inicial a domicilio en Ciudad Jardín, Pance, Valle del Lili o Bochalema.
        </p>
        <a
          href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quiero%20información%20sobre%20Adiestramiento%20Canino%20en%20Cali."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#E5B200] to-[#FFD700] px-8 py-4 text-black font-black uppercase text-xs tracking-widest transition hover:scale-105 rounded-sm shadow-[0_0_30px_rgba(229,178,0,0.4)]"
        >
          SOLICITAR EVALUACIÓN VÍA WHATSAPP
        </a>
      </div>
    </div>
  );
}
