export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "VERUS DOGS",
        "image": "https://verusdogs.com/assets/img/company-logo.png",
        "url": "https://verusdogs.com",
        "telephone": "+573006081088",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ciudad Jardín",
          "addressLocality": "Cali",
          "addressRegion": "Valle del Cauca",
          "addressCountry": "CO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 3.3516, // Coordenadas más centradas en Pance/Ciudad Jardín
          "longitude": -76.5320
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Ciudad Jardín, Cali" },
          { "@type": "AdministrativeArea", "name": "Pance, Cali" },
          { "@type": "AdministrativeArea", "name": "El Ingenio, Cali" }
        ],
        "description": "Especialistas en adiestramiento y paseos estructurados en Ciudad Jardín y Pance, Cali."
      },
      {
        "@type": "Service",
        "name": "Paseos Caninos de Élite Ciudad Jardín & Pance",
        "description": "Servicio de entrenamiento funcional y paseos exclusivamente en las zonas residenciales de Ciudad Jardín y Pance.",
        "provider": { "@type": "LocalBusiness", "name": "VERUS DOGS" },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Ciudad Jardín" },
          { "@type": "AdministrativeArea", "name": "Pance" }
        ]
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
