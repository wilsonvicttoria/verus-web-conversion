import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function SEOHead({ title, description, canonical, schema }: SEOHeadProps) {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Canonical Tag
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Default LocalBusiness Schema for Cali
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "VERUS DOGS - Adiestramiento Canino Élite & Paseos Técnicos",
      "image": "https://verusdogs.vercel.app/assets/img/company-logo.webp",
      "@id": "https://verusdogs.vercel.app/#organization",
      "url": "https://verusdogs.vercel.app/",
      "telephone": "+573006081088",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago de Cali",
        "addressRegion": "Valle del Cauca",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 3.3644,
        "longitude": -76.5342
      },
      "areaServed": [
        "Ciudad Jardín",
        "Pance",
        "Valle del Lili",
        "Bochalema",
        "El Ingenio",
        "Caney",
        "Meléndez",
        "Sur de Cali"
      ],
      "sameAs": [
        "https://www.instagram.com/verusdogs"
      ],
      "description": "Servicio técnico especializado en psicología del comportamiento canino, adiestramiento de alta exigencia y paseos estructurados en Santiago de Cali."
    };

    const schemaToUse = schema || defaultSchema;

    let scriptSchema = document.querySelector('script[id="json-ld-schema"]');
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.setAttribute('id', 'json-ld-schema');
      scriptSchema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptSchema);
    }
    scriptSchema.textContent = JSON.stringify(schemaToUse);

  }, [title, description, canonical, schema]);

  return null;
}
