import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => onComplete(),
      });

      tl.to(".preloader-content", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(".preloader-bg", {
        height: 0,
        duration: 1,
        ease: "expo.inOut",
      });
    }
  }, [progress, onComplete]);

  return (
    <div className="preloader-bg fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505] overflow-hidden">
      <div className="preloader-content text-center">
        <div className="flex flex-col leading-none mb-8">
          <span className="font-display text-4xl lg:text-6xl font-black tracking-tighter text-verus-gold uppercase">VERUS</span>
          <span className="font-mono text-[10px] tracking-[0.6em] text-gray-600 uppercase mt-2">PERFORMANCE LAB</span>
        </div>
        
        <div className="relative w-48 h-[1px] bg-white/5 mx-auto overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-verus-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 font-mono text-[10px] tracking-widest text-verus-gold uppercase">
          Inicializando Sistema_ {progress}%
        </div>
      </div>

      {/* Grid decorativa de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 h-full border-x border-white/10">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/10 h-full" />)}
        </div>
      </div>
    </div>
  );
}
