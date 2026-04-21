"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "La Psicología detrás del Paseo Estructurado",
    date: "12 ABR 2026",
    category: "PSICOLOGÍA",
    excerpt: "Por qué dejar que tu perro olfatee todo puede estar aumentando su ansiedad urbana.",
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200"
  },
  {
    id: 2,
    title: "5 Mitos del Adiestramiento en Cali",
    date: "05 ABR 2026",
    category: "CONDUCTA",
    excerpt: "Desmontamos las creencias locales que están frenando el progreso de tu perro.",
    img: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1200"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#050505] min-h-screen noise elevation-bg">
      <Navbar />
      <main className="pt-32 lg:pt-48 pb-20">
        <div className="px-[5vw]">
          <header className="mb-16 lg:mb-24 space-y-6">
            <Link to="/" className="font-mono text-[9px] text-verus-gold tracking-[0.3em] uppercase hover:text-white transition-colors lg:text-[10px]">
              ← REGRESAR
            </Link>
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.5em] text-verus-gold uppercase font-bold">
                [ ARTÍCULOS TÉCNICOS ]
              </span>
              <h1 className="font-display text-5xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none">
                VERUS <span className="text-gray-800">BLOG</span>
              </h1>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-10">
            {posts.map(post => (
              <article key={post.id} className="glass-panel group overflow-hidden flex flex-col transition-all duration-700 hover:border-verus-gold/20">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                </div>
                <div className="p-8 lg:p-12 space-y-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center font-mono text-[9px] tracking-widest uppercase">
                    <span className="text-verus-gold font-bold">{post.category}</span>
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-verus-gold transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 font-light text-base leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-8 border-t border-white/5">
                    <button className="text-[10px] font-mono tracking-[0.4em] text-white uppercase hover:text-verus-gold transition-colors">
                      LEER MÁS +
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
