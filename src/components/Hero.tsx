import React from 'react';
import { PageSection } from '../types';
import { Utensils, Calendar, MapPin, Clock, Star, Phone } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: PageSection) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection, setIsBookingOpen }) => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-end p-4 sm:p-8 overflow-hidden rounded-b-3xl shadow-xl border-b border-slate-200">
      
      {/* Background Image with Crisp Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHOs6Rd9qo3-lyzXdqdVYNxopuxvRLXqBX-h2UbchR_GGwL8FNQvlqa0rnv7hIlENL5ZZn9oIWw8Dr1n37_DmZuD0yK82DPc28e05_29DvBk62JuJfAFeS2vuhkEhXgMhjeSgM7W0KaoQRhWpZ1VrnJ47hV7mgxwkyY37HOI1hLBDUn7h2Wc83iGkkmO8S3D4Gp0J3nJ2VthwizR4Pv9_P0Aq96BQ_GL4GXAkxLXZ0tANdBABdPZLc')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-blue-950/40"></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-4 pt-16 pb-6 sm:pb-12">
        
        {/* Open Badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-blue-200 text-slate-800">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900">
            Open Now
          </span>
          <span className="text-xs text-slate-600 border-l border-slate-300 pl-2 font-medium">
            Until 10:30 PM Daily
          </span>
        </div>

        {/* Main Title & Tagline */}
        <div className="space-y-2">
          <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-md tracking-tight">
            Diamond Bawarchi
          </h1>
          <p className="font-serif-title text-xl sm:text-2xl md:text-3xl text-amber-400 italic font-semibold drop-shadow">
            "Quality &amp; Tasty Biryani"
          </p>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-medium">
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
            className="flex-1 bg-gradient-to-r from-blue-900 to-indigo-950 text-white font-bold text-base sm:text-lg py-4 rounded-xl shadow-lg border border-blue-800 flex items-center justify-center gap-2.5 hover:bg-blue-800 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Utensils className="w-5 h-5 text-amber-400" />
            Order Menu Online
          </button>
          
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex-1 bg-white text-blue-950 font-bold text-base sm:text-lg py-4 rounded-xl shadow-lg border border-slate-200 flex items-center justify-center gap-2.5 hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5 text-blue-700" />
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
            className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-blue-900 text-white border border-white/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>🍗 Dum Biryani &amp; Starters</span>
          </button>

          <button
            onClick={() => {
              setActiveSection('catering');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-blue-900 text-white border border-white/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>🎉 Catering &amp; Banquet Hall</span>
          </button>

          <button
            onClick={() => {
              setActiveSection('hotel');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-blue-900 text-white border border-white/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>🏨 Deluxe Hotel Rooms</span>
          </button>
        </div>

        {/* Quick Info Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl mt-6 pt-6 border-t border-white/20 text-xs sm:text-sm text-slate-800">
          <div className="flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
            <span className="truncate font-semibold">Shadnagar, TS</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            <Clock className="w-4 h-4 text-blue-700 shrink-0" />
            <span className="font-semibold">₹200–400 / person</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span className="font-semibold">3.8★ (697) Google</span>
          </div>

          <a
            href="tel:09666886613"
            className="flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur px-3 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-900 shadow-sm hover:text-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-700 shrink-0" />
            <span className="font-bold">096668 86613</span>
          </a>
        </div>

      </div>
    </section>
  );
};

