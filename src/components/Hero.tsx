import React from 'react';
import { PageSection } from '../types';
import { Utensils, Calendar, MapPin, Clock, Star, Phone } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: PageSection) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection, setIsBookingOpen }) => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-end p-4 sm:p-8 overflow-hidden rounded-b-3xl shadow-2xl border-b border-[#af8d11]/40">
      
      {/* Background Image with Warm Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHOs6Rd9qo3-lyzXdqdVYNxopuxvRLXqBX-h2UbchR_GGwL8FNQvlqa0rnv7hIlENL5ZZn9oIWw8Dr1n37_DmZuD0yK82DPc28e05_29DvBk62JuJfAFeS2vuhkEhXgMhjeSgM7W0KaoQRhWpZ1VrnJ47hV7mgxwkyY37HOI1hLBDUn7h2Wc83iGkkmO8S3D4Gp0J3nJ2VthwizR4Pv9_P0Aq96BQ_GL4GXAkxLXZ0tANdBABdPZLc')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#13140f] via-[#13140f]/60 to-[#2d0000]/40"></div>
      </div>

      {/* Decorative Steam Wisp & Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-4 pt-20 pb-6 sm:pb-12">
        
        {/* Open Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2a2a25]/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-[#e9c349]/30 text-[#e5e2db]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e9c349] animate-ping"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349]">
            Open Now
          </span>
          <span className="text-xs opacity-80 border-l border-white/20 pl-2">
            Until 10:30 PM Daily
          </span>
        </div>

        {/* Main Title & Tagline */}
        <div className="space-y-2">
          <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold text-[#f9f6ee] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-tight">
            Diamond Bawarchi
          </h1>
          <p className="font-serif-title text-xl sm:text-2xl md:text-3xl text-[#e9c349] italic font-semibold drop-shadow-md">
            "Quality &amp; Tasty Biryani"
          </p>
          <p className="text-xs sm:text-sm text-[#e2bfb9] max-w-xl mx-auto font-medium">
            Shadnagar's premier destination for authentic Hyderabadi Dum Biryani, Jail Mandi, Luxury Hotel Rooms &amp; Regal Banquet Celebrations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 mt-4">
          <button
            onClick={() => {
              setActiveSection('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 bg-gradient-to-r from-[#800000] to-[#b22b1d] text-[#ffe088] font-bold text-base sm:text-lg py-4 rounded-xl shadow-[0_4px_20px_rgba(128,0,0,0.5)] border border-[#e9c349]/40 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Utensils className="w-5 h-5 text-[#e9c349]" />
            Order Menu Online
          </button>
          
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex-1 bg-[#2a2a25]/95 text-[#e9c349] font-bold text-base sm:text-lg py-4 rounded-xl shadow-lg border border-[#e9c349]/50 flex items-center justify-center gap-2.5 hover:bg-[#353530] hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5 text-[#e9c349]" />
            Book a Table
          </button>
        </div>

        {/* Individual Feature Jump Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mt-3">
          <button
            onClick={() => {
              setActiveSection('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#800000] text-[#e9c349] border border-[#e9c349]/40 text-xs font-bold transition-all flex items-center gap-1.5 shadow"
          >
            <span>🍗 Dum Biryani &amp; Starters</span>
          </button>

          <button
            onClick={() => {
              setActiveSection('catering');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#800000] text-[#e9c349] border border-[#e9c349]/40 text-xs font-bold transition-all flex items-center gap-1.5 shadow"
          >
            <span>🎉 Catering &amp; Banquet Hall</span>
          </button>

          <button
            onClick={() => {
              setActiveSection('hotel');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#800000] text-[#e9c349] border border-[#e9c349]/40 text-xs font-bold transition-all flex items-center gap-1.5 shadow"
          >
            <span>🏨 Deluxe Hotel Rooms</span>
          </button>
        </div>

        {/* Quick Info Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-[#e5e2db]/90">
          <div className="flex items-center justify-center gap-1.5 bg-black/40 backdrop-blur px-3 py-2 rounded-lg border border-white/5">
            <MapPin className="w-4 h-4 text-[#e9c349] shrink-0" />
            <span className="truncate">Shadnagar, TS</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 bg-black/40 backdrop-blur px-3 py-2 rounded-lg border border-white/5">
            <Clock className="w-4 h-4 text-[#e9c349] shrink-0" />
            <span>₹200–400 / person</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 bg-black/40 backdrop-blur px-3 py-2 rounded-lg border border-white/5">
            <Star className="w-4 h-4 text-[#e9c349] fill-[#e9c349] shrink-0" />
            <span>4.2★ Google</span>
          </div>

          <a
            href="tel:09666886613"
            className="flex items-center justify-center gap-1.5 bg-black/40 backdrop-blur px-3 py-2 rounded-lg border border-white/5 hover:text-[#e9c349] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#e9c349] shrink-0" />
            <span className="font-bold">096668 86613</span>
          </a>
        </div>

      </div>
    </section>
  );
};
