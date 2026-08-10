import React from 'react';
import { PageSection } from '../types';
import { Utensils, PartyPopper, BedDouble, ShieldCheck, Flame } from 'lucide-react';

interface AboutSectionProps {
  setActiveSection: (section: PageSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveSection }) => {
  return (
    <section className="px-4 sm:px-6 py-12 max-w-6xl mx-auto text-center relative">
      
      {/* Decorative Spice / Laurel Motif Header */}
      <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[100px]"></div>
        <span className="material-symbols-outlined text-[#e9c349] text-2xl">diamond</span>
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[100px]"></div>
      </div>

      {/* Main Container */}
      <div className="bg-gradient-to-b from-[#20201b] to-[#1c1c17] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#e9c349]/20 relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349] bg-[#e9c349]/10 px-3.5 py-1 rounded-full border border-[#e9c349]/20 inline-block mb-4">
          Shadnagar's Culinary Jewel
        </span>

        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#f9f6ee] mb-4 font-bold">
          A Legacy of Flavor &amp; Hospitality
        </h2>

        <p className="text-sm sm:text-base text-[#e5e2db]/80 leading-relaxed max-w-2xl mx-auto mb-8">
          Welcome to <strong className="text-[#e9c349]">Diamond Bawarchi</strong> — where royal South Indian culinary traditions meet warm hospitality. Renowned for our signature dum biryanis cooked in traditional copper handis, we also offer our exclusive <strong>Jail Mandi</strong> experience, a fully air-conditioned <strong>Banquet Hall</strong> for weddings, and luxury <strong>Hotel Rooms</strong> right on the highway in Shadnagar, Farooqnagar.
        </p>

        {/* Services Quick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div 
            onClick={() => setActiveSection('menu')}
            className="group cursor-pointer bg-[#2a2a25] p-5 rounded-2xl border border-transparent hover:border-[#e9c349] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f9f6ee] group-hover:text-[#e9c349]">
              Fine Dining
            </h3>
            <p className="text-xs text-[#e2bfb9] mt-1">Biryani &amp; Mandi</p>
          </div>

          <div 
            onClick={() => setActiveSection('catering')}
            className="group cursor-pointer bg-[#2a2a25] p-5 rounded-2xl border border-transparent hover:border-[#e9c349] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <PartyPopper className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f9f6ee] group-hover:text-[#e9c349]">
              Banquet Hall
            </h3>
            <p className="text-xs text-[#e2bfb9] mt-1">Up to 500 Guests</p>
          </div>

          <div 
            onClick={() => setActiveSection('hotel')}
            className="group cursor-pointer bg-[#2a2a25] p-5 rounded-2xl border border-transparent hover:border-[#e9c349] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <BedDouble className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f9f6ee] group-hover:text-[#e9c349]">
              Hotel Rooms
            </h3>
            <p className="text-xs text-[#e2bfb9] mt-1">Deluxe AC Stay</p>
          </div>

          <div 
            onClick={() => setActiveSection('catering')}
            className="group cursor-pointer bg-[#2a2a25] p-5 rounded-2xl border border-transparent hover:border-[#e9c349] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f9f6ee] group-hover:text-[#e9c349]">
              Bulk Catering
            </h3>
            <p className="text-xs text-[#e2bfb9] mt-1">20 to 100+ Members</p>
          </div>
        </div>

        {/* Laurel Divider */}
        <div className="flex items-center justify-center gap-4 mt-8 opacity-60">
          <div className="h-px w-16 bg-[#e9c349]"></div>
          <ShieldCheck className="w-4 h-4 text-[#e9c349]" />
          <div className="h-px w-16 bg-[#e9c349]"></div>
        </div>

      </div>
    </section>
  );
};
