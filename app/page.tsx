'use client';

import React, { useState } from 'react';

// --- TYPE DEFINITIONS ---
interface NavbarProps {
  onOpenForm: () => void;
}

interface HeroProps {
  onOpenForm: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// Ikon SVG Asas (Tanpa library luaran)
const IconHeart = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const IconPhone = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconHome = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconStethoscope = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 4.75v5.5a4.75 4.75 0 009.5 0v-5.5M7 15.25a6 6 0 0010 4.25v2.5M17 19.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
  </svg>
);

const IconX = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconMenu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// --- DATA ---
const SERVICES: ServiceItem[] = [
  {
    title: 'Penjagaan Harian (Daycare)',
    desc: 'Penjagaan harian dari 8 AM - 6 PM merangkumi makanan sihat, bantuan mandi, dan aktiviti keceriaan.',
    icon: <IconHome className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Penjagaan Penuh 24 Jam',
    desc: 'Kediaman mesra warga emas dengan jururawat bertugas 24 jam, fisioterapi, dan penyediaan makanan khas.',
    icon: <IconShield className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Jururawat Ke Rumah (Home Care)',
    desc: 'Jururawat peribadi terus ke rumah untuk penyucian luka, pemantauan tiub, atau bantuan pasca strok.',
    icon: <IconStethoscope className="w-8 h-8 text-emerald-600" />
  }
];

const REASONS: string[] = [
  '100% Kakitangan & Jururawat Bertauliah KKM',
  'Laporan Digital Harian Dihantar Melalui WhatsApp',
  'Menu Makanan Berkhasiat Dirangka Pakar Diet',
  'Fasiliti Bebas Halangan (Senior-Friendly & Anti-gelincir)'
];

const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              <IconHeart className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Santun<span className="text-emerald-600">Care</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#perkhidmatan" className="hover:text-emerald-600 transition-colors">Perkhidmatan</a>
            <a href="#kelebihan" className="hover:text-emerald-600 transition-colors">Kenapa Kami</a>
            <a href="#hubungi" className="hover:text-emerald-600 transition-colors">Hubungi</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Tempah Konsultasi
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-3 text-sm font-medium text-gray-600">
          <a href="#perkhidmatan" onClick={() => setIsOpen(false)} className="block py-2">Perkhidmatan</a>
          <a href="#kelebihan" onClick={() => setIsOpen(false)} className="block py-2">Kenapa Kami</a>
          <a href="#hubungi" onClick={() => setIsOpen(false)} className="block py-2">Hubungi</a>
          <button
            onClick={() => { setIsOpen(false); onOpenForm(); }}
            className="w-full bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Tempah Konsultasi
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <section className="bg-emerald-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
          Penjagaan Warga Emas Profesional
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Kasih Sayang Terbaik & Ketenangan Jiwa Buat Ibu Bapa Anda
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
          SantunCare menyediakan suasana kediaman yang selesa, kawalan perubatan rapi, dan aktiviti harian berkualiti diselia oleh jururawat bersijil.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={onOpenForm}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm"
          >
            Dapatkan Konsultasi Percuma
          </button>
          <a
            href="https://wa.me/60123456789?text=Hai%20SantunCare,%20saya%20berminat%20nak%20tanya%20perkhidmatan%20penjagaan."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <IconPhone className="w-4 h-4 text-emerald-600" />
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="perkhidmatan" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Perkhidmatan Utama</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Pilih jenis penjagaan yang memenuhi keperluan semasa keluarga anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 bg-white hover:border-emerald-200 transition-all shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const WhyUsSection: React.FC = () => {
  return (
    <section id="kelebihan" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Jaminan Kami</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-6">
              Mengapa Ramai Waris Mempercayai SantunCare?
            </h2>
            <div className="space-y-4">
              {REASONS.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="hubungi" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Bincang Keperluan Ibu Bapa Anda</h2>
          <p className="text-emerald-100 text-sm mb-6 max-w-md mx-auto">
            Tinggalkan maklumat anda untuk penasihat penjagaan kami menghubungi anda secepat mungkin.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 text-left max-w-md mx-auto">
              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">Nama Waris</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Contoh: Encik Faizal" 
                  className="w-full px-3.5 py-2.5 rounded-lg text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-200 mb-1">Nombor Telefon (WhatsApp)</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Contoh: 012-3456789" 
                  className="w-full px-3.5 py-2.5 rounded-lg text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-3 rounded-lg text-sm transition-colors mt-2"
              >
                Hantar Permohonan Konsultasi
              </button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-800 rounded-lg text-emerald-100 text-sm max-w-md mx-auto">
              ✓ Terima kasih! Kami akan menghubungi anda melalui WhatsApp dalam masa 15 minit.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IconX className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-gray-900 mb-2">Tempah Konsultasi Percuma</h3>
        <p className="text-xs text-gray-500 mb-4">Sila isi nombor WhatsApp anda untuk kami hubungi.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Penuh</label>
            <input 
              type="text" 
              required 
              placeholder="Nama anda" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">No. WhatsApp</label>
            <input 
              type="tel" 
              required 
              placeholder="012-3456789" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            Hantar
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs">
        <p className="font-semibold text-gray-300">SantunCare Malaysia</p>
        <p className="mt-1">Pusat & Perkhidmatan Penjagaan Warga Emas Terpercaya.</p>
        <p className="mt-4 text-gray-500">© {new Date().getFullYear()} SantunCare. Hak Cipta Terpelihara.</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <Navbar onOpenForm={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenForm={() => setIsModalOpen(true)} />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}