import { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿En qué zonas de Santiago de Cali prestan servicio de adiestramiento y paseos?",
      answer: "Prestamos atención técnica presencial principalmente en la zona Sur de Cali: Ciudad Jardín, Pance, Valle del Lili, Bochalema, El Ingenio, Caney, Meléndez y barrios aledaños."
    },
    {
      question: "¿Cuál es la diferencia entre un paseo convencional y un paseo técnico VERUS?",
      answer: "Un paseo convencional se limita a caminar sin estructura. El paseo técnico VERUS aplica ejercicios de estimulación cognitiva, trabajos de olfato guiado, control de impulsos frente a distractores de la ciudad y monitoreo en tiempo real por GPS."
    },
    {
      question: "¿Cómo funciona la primera evaluación para Adiestramiento Canino?",
      answer: "Realizamos una consulta etológica presencial a domicilio en Santiago de Cali para diagnosticar el origen del comportamiento, evaluar la relación tutor-perro y estructurar un plan de trabajo adaptado a las necesidades específicas."
    },
    {
      question: "¿Tratan casos graves de reactividad o agresividad hacia otros perros en Cali?",
      answer: "Sí. Contamos con protocolos especializados de modificación de conducta basados en desensibilización sistemática, contracondicionamiento y manejo ético sin violencia física."
    },
    {
      question: "¿A partir de qué edad puede ingresar un cachorro al programa de educación?",
      answer: "Los cachorros pueden iniciar su programa de socialización y hábitos higiénicos a partir de las 8 a 12 semanas (una vez cuenten con su esquema de vacunación básico)."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      <SEOHead
        title="Preguntas Frecuentes | Adiestramiento Canino & Paseos en Cali | VERUS"
        description="Centro de respuestas oficiales sobre adiestramiento canino, modificación de conducta y paseos técnicos en Santiago de Cali (Ciudad Jardín, Pance, Valle del Lili)."
        canonical="https://verusdogs.vercel.app/faq"
        schema={faqSchema}
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          AEO — RESPUESTAS CLARAS & ETOLOGÍA
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          PREGUNTAS FRECUENTES
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Resolvemos tus dudas sobre metodología técnica, tiempos de trabajo y cobertura en Santiago de Cali.
        </p>
      </div>

      {/* ACCORDEÓN DE PREGUNTAS */}
      <div className="space-y-4 mb-16">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-panel-gold overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold uppercase text-white hover:text-[#E5B200] transition-colors"
              >
                <span className="text-base md:text-lg flex items-center gap-4">
                  <span className="font-mono text-xs text-[#E5B200]">0{idx + 1}.</span>
                  {faq.question}
                </span>
                <span className="text-xl font-mono text-[#E5B200]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ENLAZADO INTERNO A SERVICIOS & CONTACTO */}
      <div className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl text-center">
        <h3 className="text-xl font-bold uppercase text-white mb-4">¿TIENES UNA DUDA ESPECÍFICA DE TU PERRO?</h3>
        <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
          Consulta directamente nuestros programas de{' '}
          <Link to="/adiestramiento-canino-cali" className="text-[#E5B200] underline font-bold">
            Adiestramiento Canino
          </Link>{' '}
          o el servicio de{' '}
          <Link to="/paseos-caninos-cali" className="text-[#E5B200] underline font-bold">
            Paseos Técnicos
          </Link>.
        </p>
        <Link
          to="/contacto"
          className="inline-block btn-verus rounded-sm text-xs"
        >
          CONTACTAR A UN ESPECIALISTA VÍA WHATSAPP
        </Link>
      </div>
    </div>
  );
}
