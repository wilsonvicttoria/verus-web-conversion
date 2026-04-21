export default function Footer() {
  const phone = "573006081088";
  const ig = "https://www.instagram.com/verusdogs?igsh=b3U0aTF6a2Q1anJv";

  return (
    <footer className="bg-black border-t border-white/5 py-16 lg:py-32">
      <div className="px-[10vw]">
        <div className="grid lg:grid-cols-4 gap-16 text-center lg:text-left">
          <div className="space-y-8 lg:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl font-black tracking-tighter text-verus-gold uppercase">VERUS</span>
              <span className="font-mono text-[9px] tracking-[0.4em] text-gray-500 uppercase mt-1">PERFORMANCE</span>
            </div>
            <p className="max-w-md mx-auto lg:mx-0 text-gray-500 font-light leading-relaxed">
              La evolución técnica del adiestramiento canino en Cali. 
              Desarrollamos el potencial cognitivo de tu perro.
            </p>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-widest text-verus-gold uppercase font-bold">[ NAVEGACIÓN ]</span>
            <ul className="flex flex-col gap-4 text-xs font-mono tracking-widest uppercase">
              <li><a href="/" className="text-gray-400 hover:text-verus-gold transition-colors">Inicio</a></li>
              <li><a href="#adiestramiento" className="text-gray-400 hover:text-verus-gold transition-colors">Programas</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-verus-gold transition-colors">Blog Técnico</a></li>
              <li><a href={ig} target="_blank" className="text-gray-400 hover:text-verus-gold transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-widest text-verus-gold uppercase font-bold">[ CONTACTO ]</span>
            <p className="text-xs text-gray-400 font-mono tracking-widest uppercase leading-loose">
              CALI, VALLE DEL CAUCA<br />
              +57 300 608 1088<br />
              INFO@VERUSDOGS.COM
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-[10px] tracking-widest text-gray-700 uppercase">
            © 2026 VERUS PERFORMANCE LAB. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
