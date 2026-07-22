import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';

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
    "areaServed": ["Ciudad Jardín", "Pance", "Valle del Lili", "Bochalema", "El Ingenio", "Santiago de Cali"],
    "description": "Programa de adiestramiento profesional, modificación de conducta canina y educación para cachorros en Santiago de Cali."
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Adiestramiento Canino Élite en Cali | Psicología & Conducta VERUS"
        description="Programa especializado de adiestramiento canino y modificación de conducta en Santiago de Cali (Ciudad Jardín, Pance, Valle del Lili). Psicología canina avanzada."
        canonical="https://verusdogs.vercel.app/adiestramiento-canino-cali"
        schema={schemaData}
      />

      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          ETOLOGÍA & RENDIMIENTO CANINO EN CALI
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          ADIESTRAMIENTO CANINO EN SANTIAGO DE CALI
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Transformamos problemas de comportamiento y desarrollamos una relación sólida basada en psicología canina, respeto y metodologías científicas en las principales zonas de Cali.
        </p>
      </div>

      {/* HERO IMAGE BANNER */}
      <div className="relative rounded-3xl overflow-hidden mb-20 border border-white/10 shadow-2xl h-80 md:h-[450px]">
        <img
          src="/assets/img/adiestramiento_elite.webp"
          alt="Adiestramiento Canino Élite en Ciudad Jardín Cali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#E5B200] uppercase tracking-widest block mb-1">
              PROGRAMA PERSONALIZADO EN CALI
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white">
              EVALUACIÓN ETOLÓGICA A DOMICILIO
            </h2>
          </div>
          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quiero%20información%20sobre%20Adiestramiento%20Canino%20en%20Cali."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-verus rounded-sm text-xs"
          >
            AGENDAR EVALUACIÓN
          </a>
        </div>
      </div>

      {/* TRES PILARES TÉCNICOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div id="cachorros" className="glass-panel-gold p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#E5B200] font-mono text-xs tracking-widest uppercase block mb-3">FASE 01</span>
            <h3 className="text-xl font-bold uppercase text-white mb-3">EDUCACIÓN PARA CACHORROS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Prevención de ansiedad por separación, hábitos higiénicos en departamento y socialización temprana para evitar miedos futuros.
            </p>
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">2 a 6 Meses</span>
          </div>
        </div>

        <div id="obediencia" className="glass-panel-gold p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#E5B200] font-mono text-xs tracking-widest uppercase block mb-3">FASE 02</span>
            <h3 className="text-xl font-bold uppercase text-white mb-3">OBEDIENCIA URBANA AVANZADA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Paseo relajado sin jalones, comando de llamado efectivo en parques de Cali (Ciudad Jardín, Pance) y autocontrol emocional.
            </p>
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">Jóvenes & Adultos</span>
          </div>
        </div>

        <div id="modificacion" className="glass-panel-gold p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#E5B200] font-mono text-xs tracking-widest uppercase block mb-3">FASE 03</span>
            <h3 className="text-xl font-bold uppercase text-white mb-3">MODIFICACIÓN DE CONDUCTA</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Intervención especializada para reactividad hacia otros perros, agresión, miedos fóbicos o impulsividad descontrolada.
            </p>
          </div>
          <div className="border-t border-white/5 pt-4">
            <span className="inline-block text-xs font-mono text-[#E5B200] bg-[#E5B200]/10 px-3 py-1 rounded">Tratamiento Intensivo</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN ENLAZADO INTERNO BLOG & FAQ */}
      <div className="bg-[#080808] border border-white/10 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-white text-lg uppercase mb-1">¿TIENES DUDAS SOBRE METODOLOGÍAS O TARIFAS?</h4>
          <p className="text-gray-400 text-sm">
            Revisa nuestro centro de{' '}
            <Link to="/faq" className="text-[#E5B200] underline font-bold">
              Preguntas Frecuentes
            </Link>{' '}
            o lee artículos técnicos en nuestro{' '}
            <Link to="/blog" className="text-[#E5B200] underline font-bold">
              Blog de Etología Canina
            </Link>.
          </p>
        </div>
        <Link to="/contacto" className="btn-verus rounded-sm text-xs whitespace-nowrap">
          CONTACTO DIRECTO
        </Link>
      </div>
    </div>
  );
}
