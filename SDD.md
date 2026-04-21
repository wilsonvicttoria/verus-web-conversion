# SDD: Proyecto VERUS WEB - Plataforma de Marketing & Conversión
*(No confundir con el repositorio de VERUS APP)*


## 1. ARQUITECTURA TÉCNICA
- **Motor:** Vite + React (TS) - *Pivotado por rendimiento en Termux/Android*.
- **Animaciones:** GSAP 3.12 + ScrollTrigger (Modo Scrub: 1 para control total del usuario).
- **Estilos:** Tailwind CSS con configuración Luxury Dark (#050505).
- **Rutas:** `react-router-dom` con Landing principal (`/`) y Blog independiente (`/blog`).

## 2. IDENTIDAD DE MARCA (VERUS)
- **Logo:** Tipográfico (Montserrat Black) en Oro (#E5B200). Sin imágenes para máxima nitidez.
- **Vibe:** Performance Lab / Élite / GTA 6 Inspired.
- **Imágenes:** Filtro Grayscale (100%) inicial que transmuta a color vía ScrollTrigger.

## 3. DATOS DE CONVERSIÓN (CRÍTICOS)
- **WhatsApp/Llamadas:** +57 300 608 1088.
- **Instagram:** https://www.instagram.com/verusdogs?igsh=b3U0aTF6a2Q1anJv
- **Local SEO:** Cali, Valle del Cauca (JSON-LD optimizado).

## 4. ESTADO DE SECCIONES
1. **Hero:** Centrado absoluto, titular indestructible (clamp-fit), video parallax.
2. **Problema:** Foco en "dolores" del cliente.
3. **Adiestramiento:** Sección de autoridad técnica.
4. **Paseos + Metodología:** Integrados para demostrar el proceso técnico durante el servicio.
5. **Blog:** Ruta `/blog` para autoridad semántica.

## 5. PROTOCOLOS SCARLETT APLICADOS
- **Blindaje Responsivo:** Padding de seguridad `px-[8vw]` a `px-[10vw]`.
- **Zero Clipping:** Clamp dinámico para evitar cortes de texto en Android.
- **Vercel Deploy:** Automatizado en wilsonvicttorias-projects.
