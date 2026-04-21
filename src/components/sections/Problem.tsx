"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Problem() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-verus-black py-24 lg:py-48 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 h-full border-x border-verus-border">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-verus-border h-full" />)}
        </div>
      </div>

      <div className="px-[5vw] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="font-mono text-xs tracking-[0.4em] text-red-500 uppercase font-bold">
              [ EL CAOS DIARIO ]
            </span>
            <h2 className="font-display text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              ¿TU PERRO TIENE EL <br/>
              <span className="text-gray-700">CONTROL?</span>
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="text-xl text-gray-400 font-light">
                Paseos que terminan en frustración. Correas tensas. Falta de respuesta en momentos críticos.
              </p>
              <div className="flex flex-col gap-4 font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-red-500 rounded-full" />
                  <span>Exceso de energía descontrolada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-red-500 rounded-full" />
                  <span>Agresividad o miedos limitantes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-red-500 rounded-full" />
                  <span>Desconexión total con el guía</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 lg:p-16 relative group">
            <div className="absolute -top-10 -right-10 text-[12rem] font-black text-white/5 pointer-events-none select-none">
              STOP
            </div>
            <blockquote className="text-2xl lg:text-3xl font-light italic text-white/80 leading-relaxed">
              "No es solo un mal comportamiento, es una vida de limitaciones tanto para ti como para tu perro. La lealtad sin control es un riesgo."
            </blockquote>
            <div className="mt-8 pt-8 border-t border-verus-border flex items-center gap-4">
              <div className="h-12 w-12 bg-verus-gold/20 flex items-center justify-center rounded-full">
                <span className="text-verus-gold font-bold">!</span>
              </div>
              <p className="text-xs font-mono tracking-widest text-verus-gold uppercase">
                La transformación técnica comienza aquí.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
