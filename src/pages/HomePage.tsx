import SEOHead from '@/components/seo/SEOHead';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <SEOHead
        title="VERUS DOGS | Adiestramiento Canino Élite & Paseos en Cali"
        description="Plataforma técnica de adiestramiento canino y paseos estructurados en Santiago de Cali (Ciudad Jardín, Pance, Valle del Lili, Bochalema). Psicología canina de alto rendimiento."
        canonical="https://verusdogs.vercel.app/"
      />
      
      <Hero />

      {/* SECCIONES RESUMEN DE SERVICIOS PARA SEO & CONVERSIÓN */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-3">
            NUESTROS PROGRAMAS TÉCNICOS EN CALI
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            SOLUCIONES DE ALTO RENDIMIENTO CANINO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* TARJETA ADIESTRAMIENTO */}
          <div className="glass-panel-gold overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/assets/img/adiestramiento_elite.webp"
                alt="Adiestramiento Canino Élite en Cali"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#E5B200] uppercase block mb-2">
                  PROGRAMA PRINCIPAL EN CALI
                </span>
                <h3 className="text-2xl font-bold uppercase text-white mb-4">
                  ADIESTRAMIENTO & MODIFICACIÓN DE CONDUCTA
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Evaluación etológica a domicilio, corrección de reactividad, obediencia urbana avanzada y entrenamiento de cachorros en Ciudad Jardín, Pance y Valle del Lili.
                </p>
              </div>
              <Link
                to="/adiestramiento-canino-cali"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#E5B200] uppercase group-hover:translate-x-2 transition-transform"
              >
                VER PROGRAMA DE ADIESTRAMIENTO →
              </Link>
            </div>
          </div>

          {/* TARJETA PASEOS TÉCNICOS */}
          <div className="glass-panel-gold overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/assets/img/paseos_elite.webp"
                alt="Paseos Caninos Técnicos en Cali"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#E5B200] uppercase block mb-2">
                  SERVICIO DIARIO EN CALI
                </span>
                <h3 className="text-2xl font-bold uppercase text-white mb-4">
                  PASEOS TÉCNICOS & SOCIALIZACIÓN ESTRUCTURADA
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Paseos controlados con estímulo mental, ejercicio técnico y monitoreo GPS en Ciudad Jardín, Pance, Valle del Lili y Bochalema.
                </p>
              </div>
              <Link
                to="/paseos-caninos-cali"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#E5B200] uppercase group-hover:translate-x-2 transition-transform"
              >
                VER DETALLES DE PASEOS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRUEBA SOCIAL / TESTIMONIOS */}
      <Testimonials />

      {/* COBERTURA LOCAL EN CALI & BANNER FAQ */}
      <section className="py-20 bg-[#050505] border-t border-white/10 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] text-[#E5B200] uppercase block mb-4">
            COBERTURA TÉCNICA LOCAL
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-8">
            COBERTURA DE SERVICIOS EN SANTIAGO DE CALI
          </h2>
          <div className="flex flex-wrap justify-center gap-3 font-mono text-xs uppercase text-gray-300 mb-12">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Ciudad Jardín</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Pance</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Valle del Lili</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Bochalema</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">El Ingenio</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Caney</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Meléndez</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#E5B200]">Sur de Cali</span>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-bold text-white text-lg uppercase mb-1">¿TIENES PREGUNTAS SOBRE NUESTRA METODOLOGÍA?</h4>
              <p className="text-gray-400 text-sm">
                Consulta nuestro centro de respuestas de autoría en el sección de{' '}
                <Link to="/faq" className="text-[#E5B200] underline font-bold">
                  Preguntas Frecuentes (FAQ)
                </Link>.
              </p>
            </div>
            <Link to="/faq" className="btn-verus rounded-sm text-xs whitespace-nowrap">
              VER PREGUNTAS FRECUENTES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
