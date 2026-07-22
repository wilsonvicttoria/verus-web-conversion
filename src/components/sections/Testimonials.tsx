export default function Testimonials() {
  const reviews = [
    {
      name: "Valeria Echeverri",
      location: "Ciudad Jardín, Cali",
      dog: "Max (Golden Retriever, 2 años)",
      quote: "Max tiraba muchísimo de la correa al pasear por el parque de la Salud. En solo 4 sesiones de adiestramiento con VERUS, el cambio fue radical. Ahora caminamos en armonía y sin estrés.",
      rating: 5
    },
    {
      name: "Camilo Restrepo",
      location: "Pance, Cali",
      dog: "Thor (Pastor Alemán, 1.5 años)",
      quote: "Buscaba un servicio de paseos que no fuera simplemente sacar al perro a dar vueltas. Los paseos estructurados de VERUS con reporte GPS y trabajo de olfato le cambiaron la vida a Thor.",
      rating: 5
    },
    {
      name: "Mariana Garcés",
      location: "Valle del Lili, Cali",
      dog: "Luna (French Bulldog, 8 meses)",
      quote: "Excelente atención técnica. Nos enseñaron a gestionar la ansiedad por separación de Luna en nuestro departamento. Profesionalismo absoluto y trato impecable.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#080808] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.4em] text-[#E5B200] uppercase block mb-3">
            PRUEBA SOCIAL & RESULTADOS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            TESTIMONIOS DE TUTORES EN CALI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-panel-gold p-8 flex flex-col justify-between">
              <div>
                {/* RATING STARS */}
                <div className="flex gap-1 mb-6 text-[#E5B200]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <p className="font-bold uppercase text-white text-sm">{rev.name}</p>
                <p className="font-mono text-xs text-[#E5B200]">{rev.location}</p>
                <p className="font-mono text-[10px] text-gray-500 mt-1">{rev.dog}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
