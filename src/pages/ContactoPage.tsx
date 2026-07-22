import SEOHead from '@/components/seo/SEOHead';

export default function ContactoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿En qué zonas de Cali prestan servicio de adiestramiento y paseos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendemos principalmente en la zona sur de Santiago de Cali: Ciudad Jardín, Pance, Valle del Lili, Bochalema, El Ingenio, Caney, Meléndez y zonas aledañas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo solicito una evaluación para adiestramiento canino en Cali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes agendar una evaluación directamente a través de nuestro canal de WhatsApp (+57 300 608 1088) donde coordinaremos una visita o consulta previa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son los métodos de adiestramiento utilizados en VERUS DOGS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos metodologías basadas en psicología del comportamiento animal, refuerzo positivo estructurado, autocontrol y comunicación clara sin violencia."
        }
      }
    ]
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Contacto & Reservas | VERUS DOGS Cali"
        description="Ponte en contacto con VERUS DOGS en Santiago de Cali (+57 300 608 1088). Cobertura en Ciudad Jardín, Pance, Valle del Lili, Bochalema."
        canonical="https://verusdogs.vercel.app/contacto"
        schema={faqSchema}
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          ATENCIÓN DIRECTA EN CALI
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          CONTACTO & RESERVAS
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          ¿Tienes preguntas o deseas agendar una valoración técnica para tu perro en Santiago de Cali? Estamos listos para atenderte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* CANAL PRINCIPAL WHATSAPP */}
        <div className="bg-[#0c0c0c] border border-white/10 p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-[#E5B200] uppercase block mb-3">CANAL OFICIAL DE ATENCIÓN</span>
            <h2 className="text-3xl font-black uppercase text-white mb-4">RESERVA VÍA WHATSAPP</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Respuesta inmediata para consultas de disponibilidad de cupos en Ciudad Jardín, Pance, Valle del Lili, Bochalema y Sur de Cali.
            </p>

            <div className="space-y-4 font-mono text-xs text-gray-300 mb-8">
              <p className="flex items-center gap-3">
                <span className="text-[#E5B200]">PHONE:</span> +57 300 608 1088
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#E5B200]">INSTAGRAM:</span> @verusdogs
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#E5B200]">UBICACIÓN:</span> Santiago de Cali, Colombia
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/573006081088?text=Hola%20Verus%20DOGS%20🐾%2C%20quisiera%20agendar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-[#E5B200] to-[#FFD700] py-4 text-center text-black font-black uppercase text-xs tracking-widest transition hover:scale-105 rounded-sm shadow-[0_0_30px_rgba(229,178,0,0.4)]"
          >
            ABRIR CHAT DE WHATSAPP
          </a>
        </div>

        {/* PREGUNTAS FRECUENTES (AEO) */}
        <div className="bg-[#0c0c0c] border border-white/10 p-10 rounded-3xl">
          <span className="font-mono text-xs text-[#E5B200] uppercase block mb-3">RESOLUCIÓN DE DUDAS (AEO)</span>
          <h2 className="text-2xl font-black uppercase text-white mb-6">PREGUNTAS FRECUENTES</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase mb-2">
                ¿En qué zonas de Cali prestan servicio?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Atendemos en Ciudad Jardín, Pance, Valle del Lili, Bochalema, El Ingenio, Caney, Meléndez y sur de Cali.
              </p>
            </div>

            <div className="border-t border-white/5 pt-4">
              <h3 className="text-sm font-bold text-white uppercase mb-2">
                ¿Cómo es el proceso de adiestramiento?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Iniciamos con una evaluación etológica presencial a domicilio para diagnosticar el caso y estructurar el plan de entrenamiento personalizado.
              </p>
            </div>

            <div className="border-t border-white/5 pt-4">
              <h3 className="text-sm font-bold text-white uppercase mb-2">
                ¿Los paseos incluyen seguimiento GPS?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Sí, todos nuestros paseos técnicos cuentan con monitoreo en tiempo real y reportes post-paseo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
