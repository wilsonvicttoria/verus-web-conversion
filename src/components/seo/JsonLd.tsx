export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VERUS DOGS",
    "image": "https://verus-dogs.com/assets/img/company-logo.png",
    "@id": "https://verus-dogs.com",
    "url": "https://verus-dogs.com",
    "telephone": "+573006081088",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cali",
      "addressLocality": "Cali",
      "addressRegion": "Valle del Cauca",
      "postalCode": "760001",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.4516,
      "longitude": -76.5320
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/verusdogs?igsh=b3U0aTF6a2Q1anJv"
    ],
    "description": "Servicios premium de adiestramiento y psicología canina en Cali, Colombia."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
