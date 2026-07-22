import SEOHead from '@/components/seo/SEOHead';

export default function BlogPage() {
  const articles = [
    {
      title: "¿Cómo Elegir un Paseador Canino Seguro en Ciudad Jardín y Pance?",
      excerpt: "Guía técnica sobre los criterios esenciales de seguridad, monitoreo GPS y psicología canina al contratar un servicio de paseos en el sur de Cali.",
      category: "PASEOS & SEGURIDAD",
      date: "JULIO 2026",
      readTime: "5 MIN LECTURA"
    },
    {
      title: "Reactividad en Perros: Causas y Soluciones de Adiestramiento en Cali",
      excerpt: "Análisis etológico sobre por qué un perro ladra o se abalanza al pasear por avenidas concurridas como la Pasoancho o Cañasgordas y cómo corregirlo.",
      category: "MODIFICACIÓN DE CONDUCTA",
      date: "JULIO 2026",
      readTime: "7 MIN LECTURA"
    },
    {
      title: "Guía de Educación para Cachorros en Departamentos de Valle del Lili",
      excerpt: "Pasos fundamentales para establecer hábitos higiénicos, control de mordida y evitar ladridos por ansiedad de separación en espacios cerrados.",
      category: "CACHORROS",
      date: "JUNIO 2026",
      readTime: "6 MIN LECTURA"
    }
  ];

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <SEOHead
        title="Blog Técnico de Psicología Canina & Adiestramiento en Cali | VERUS DOGS"
        description="Artículos especializados sobre adiestramiento canino, comportamiento animal y paseos técnicos en Santiago de Cali. Fuente de autoridad técnica."
        canonical="https://verusdogs.vercel.app/blog"
      />

      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-4">
          CONOCIMIENTO & ETOLOGÍA CANINA
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-6">
          BLOG TÉCNICO VERUS DOGS
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Recursos de autoridad, análisis etológico y guías prácticas para tutores exigentes en Santiago de Cali.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <article key={idx} className="bg-[#0c0c0c] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-[#E5B200]/50 transition-colors">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 mb-4">
                <span className="text-[#E5B200] font-bold">{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-bold uppercase text-white mb-4 hover:text-[#E5B200] transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-gray-500">
              <span>{article.date}</span>
              <span className="text-[#E5B200]">LEER MÁS →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
