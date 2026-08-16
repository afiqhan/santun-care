'use client';

import React, { useState } from 'react';

// --- TYPES ---
interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

// --- DATA ---
const SERVICES_DATA: ServiceProps[] = [
  {
    title: 'Penjagaan Harian & Kediaman',
    description: 'Penjagaan peribadi menyeluruh merangkumi kebersihan diri, pemakanan seimbang, dan sokongan fizikal harian.',
    icon: '🏡',
  },
  {
    title: 'Pengurusan Ubat & Kesihatan',
    description: 'Pemantauan tanda vital asas dan penjadualan ubat-ubatan mengikut nasihat pakar perubatan secara berdisiplin.',
    icon: '💊',
  },
  {
    title: 'Fisioterapi & Terapi Minda',
    description: 'Aktiviti senaman ringan dan latihan kognitif untuk mengekalkan mobiliti fizikal serta kesihatan mental.',
    icon: '🧘‍♂️',
  },
];

// --- COMPONENTS ---

// 1. Header / Navbar
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-800 tracking-tight">
              Santun<span className="text-teal-600">Care</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#perkhidmatan" className="text-gray-600 hover:text-emerald-700 transition-colors">Perkhidmatan</a>
            <a href="#mengenai" className="text-gray-600 hover:text-emerald-700 transition-colors">Tentang Kami</a>
            <a href="#hubungi" className="text-gray-600 hover:text-emerald-700 transition-colors">Hubungi</a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white px-5 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Tempah Konsultasi
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-4 space-y-3">
          <a href="#perkhidmatan" className="block text-gray-600 py-1">Perkhidmatan</a>
          <a href="#mengenai" className="block text-gray-600 py-1">Tentang Kami</a>
          <a href="#hubungi" className="block text-gray-600 py-1">Hubungi</a>
          <a 
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-emerald-700 text-white py-2.5 rounded-xl font-medium"
          >
            Tempah Konsultasi
          </a>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section
const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/60 to-white text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Perkhidmatan Penjagaan Warga Emas Profesional
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Penjagaan Penuh Kasih Sayang & Ketenangan Untuk Yang Tersayang
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Santun Care menyediakan suasana persekitaran yang selamat, selesa, dan prihatin untuk memastikan kualiti hidup terbaik buat ibu bapa anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            href="#hubungi"
            className="bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-800 shadow-lg shadow-emerald-200 transition-all text-center"
          >
            Hubungi Kami Hari Ini
          </a>
          <a 
            href="#perkhidmatan"
            className="bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all text-center"
          >
            Lihat Perkhidmatan
          </a>
        </div>
      </div>
    </section>
  );
};

// 3. Service Card Component
const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
  </div>
);

// 4. Services Section
const Services: React.FC = () => {
  return (
    <section id="perkhidmatan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Perkhidmatan Kami</h2>
          <p className="text-gray-600 mt-4">Kami menawarkan pelbagai perlindungan dan penjagaan berfokuskan keselesaan fizikal serta emosi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. CTA / Call to Action Section
const CTA: React.FC = () => {
  return (
    <section id="hubungi" className="py-16 bg-emerald-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Beri Penjagaan Terbaik Untuk Ibu Bapa Anda</h2>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Dapatkan konsultasi percuma bersama pasukan perawat mesra dan berpengalaman kami hari ini.
        </p>
        <div className="pt-2">
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-800 px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-md"
          >
            Sembang di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// 6. Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <span className="text-2xl font-bold text-white">SantunCare</span>
          <p className="text-sm mt-1">Pusat & Perkhidmatan Penjagaan Warga Emas Terpercaya.</p>
          <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Santun Care. Hak Cipta Terpelihara.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#perkhidmatan" className="hover:text-white transition-colors">Perkhidmatan</a>
          <a href="#mengenai" className="hover:text-white transition-colors">Mengenai Kami</a>
          <a href="#hubungi" className="hover:text-white transition-colors">Hubungi</a>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN PAGE ---
export default function Page() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}