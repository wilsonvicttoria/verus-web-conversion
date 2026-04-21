"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Solution() {
  return (
    <section className="bg-black py-24 lg:py-48">
      <div className="px-[5vw]">
        <div className="flex flex-col lg:flex-row gap-16 items-end">
          <div className="flex-1 space-y-8">
            <span className="font-mono text-xs tracking-[0.4em] text-verus-gold uppercase font-bold">
              [ NUESTRO ENFOQUE ]
            </span>
            <h2 className="font-display text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              SISTEMA DE <br/>
              <span className="text-verus-gold-light">ALTO RENDIMIENTO</span>
            </h2>
          </div>
          <div className="flex-1 max-w-xl">
            <p className="text-xl lg:text-2xl font-light text-gray-400 leading-relaxed">
              No paseamos perros. Los entrenamos mientras caminan. Aplicamos psicología avanzada para transformar el impulso en obediencia técnica y equilibrio emocional.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "FÍSICO", d: "Acondicionamiento para el desarrollo muscular y liberación de estrés." },
            { t: "MENTAL", d: "Ejercicios cognitivos que agotan la mente más que 2 horas de paseo común." },
            { t: "SOCIAL", d: "Control total en entornos reales con distracciones de alto nivel en Cali." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-10 space-y-4 group hover:border-verus-gold transition-all duration-500">
              <h3 className="font-mono text-verus-gold font-bold tracking-widest">{item.t}</h3>
              <p className="text-gray-400 font-light">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
