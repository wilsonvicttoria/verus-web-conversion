import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import HomePage from '@/pages/HomePage';
import AdiestramientoPage from '@/pages/AdiestramientoPage';
import PaseosPage from '@/pages/PaseosPage';
import BlogPage from '@/pages/BlogPage';
import FAQPage from '@/pages/FAQPage';
import ContactoPage from '@/pages/ContactoPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#E5B200] selection:text-black flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adiestramiento-canino-cali" element={<AdiestramientoPage />} />
            <Route path="/paseos-caninos-cali" element={<PaseosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}