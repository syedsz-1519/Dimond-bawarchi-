import React from 'react';
import { PageSection } from '../types';
import { Utensils, PartyPopper, BedDouble, ShieldCheck, ArrowRight, CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface AboutSectionProps {
  setActiveSection: (section: PageSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ setActiveSection }) => {
  const navigateTo = (sec: PageSection) => {
    setActiveSection(sec);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="px-4 sm:px-6 py-12 max-w-6xl mx-auto text-center relative">
      
      {/* Decorative Spice / Laurel Motif Header */}
      <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[100px]"></div>
        <span className="material-symbols-outlined text-[#e9c349] text-2xl">diamond</span>
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[100px]"></div>
      </div>

      {/* Main Container */}
      <div className="bg-gradient-to-b from-[#20201b] to-[#1c1c17] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#e9c349]/20 relative overflow-hidden space-y-8">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#800000]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#e9c349] bg-[#e9c349]/10 px-3.5 py-1 rounded-full border border-[#e9c349]/20 inline-block mb-4">
            Shadnagar's Culinary Jewel
          </span>

          <h2 className="font-serif-title text-3xl sm:text-4xl text-[#f9f6ee] mb-4 font-bold">
            A Legacy of Flavor &amp; Hospitality
          </h2>

          <p className="text-sm sm:text-base text-[#e5e2db]/80 leading-relaxed max-w-2xl mx-auto">
            Welcome to <strong className="text-[#e9c349]">Diamond Bawarchi</strong> — where royal South Indian culinary traditions meet warm hospitality. Renowned for our signature dum biryanis cooked in traditional copper handis, we also offer our exclusive <strong>Jail Mandi</strong> experience, a fully air-conditioned <strong>Banquet Hall</strong> for weddings, and luxury <strong>Hotel Rooms</strong> right on the highway in Shadnagar, Farooqnagar.
          </p>
        </div>

        {/* Services Quick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div 
            onClick={() => navigateTo('menu')}
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
            onClick={() => navigateTo('catering')}
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
            onClick={() => navigateTo('hotel')}
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
            onClick={() => navigateTo('gallery')}
            className="group cursor-pointer bg-[#2a2a25] p-5 rounded-2xl border border-transparent hover:border-[#e9c349] transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f9f6ee] group-hover:text-[#e9c349]">
              Photo Gallery
            </h3>
            <p className="text-xs text-[#e2bfb9] mt-1">Ambiance &amp; Food</p>
          </div>
        </div>

        {/* Individual Service Feature Highlight Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
          
          {/* Catering & Banquet Card */}
          <div className="bg-[#13140f] rounded-2xl border border-[#af8d11]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#e9c349] transition-colors shadow-xl group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#e9c349] bg-[#e9c349]/10 px-2.5 py-1 rounded-md uppercase tracking-wider border border-[#e9c349]/20">
                  Bulk Orders &amp; Events
                </span>
                <PartyPopper className="w-5 h-5 text-[#e9c349]" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#f9f6ee] group-hover:text-[#e9c349] transition-colors">
                Catering &amp; AC Banquet Hall
              </h3>
              <p className="text-xs text-[#e5e2db]/70 leading-relaxed">
                Host unforgettable weddings, birthdays, corporate events, and family functions with our 500-guest capacity AC Banquet Hall or order bulk biryani deghs.
              </p>
              <ul className="space-y-1.5 text-xs text-[#e5e2db]/80 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e9c349] shrink-0" />
                  <span>500 Capacity AC Banquet Hall</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e9c349] shrink-0" />
                  <span>Bulk Dum Biryani Deghs (20 – 100+ members)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateTo('catering')}
              className="w-full bg-[#800000] text-[#ffe088] font-bold py-3 px-4 rounded-xl text-xs border border-[#e9c349]/40 hover:bg-[#a30000] hover:border-[#e9c349] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>View Dedicated Catering Page</span>
              <ArrowRight className="w-4 h-4 text-[#e9c349]" />
            </button>
          </div>

          {/* Hotel Rooms Card */}
          <div className="bg-[#13140f] rounded-2xl border border-[#af8d11]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#e9c349] transition-colors shadow-xl group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#e9c349] bg-[#e9c349]/10 px-2.5 py-1 rounded-md uppercase tracking-wider border border-[#e9c349]/20">
                  Luxury Accommodation
                </span>
                <BedDouble className="w-5 h-5 text-[#e9c349]" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#f9f6ee] group-hover:text-[#e9c349] transition-colors">
                Deluxe AC Hotel Rooms
              </h3>
              <p className="text-xs text-[#e5e2db]/70 leading-relaxed">
                Stay comfortably on the Shadnagar Highway with modern air-conditioned hotel rooms, 24/7 room service, express check-in, and ample parking space.
              </p>
              <ul className="space-y-1.5 text-xs text-[#e5e2db]/80 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e9c349] shrink-0" />
                  <span>Standard &amp; Executive Deluxe AC Rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e9c349] shrink-0" />
                  <span>24/7 Room Service &amp; Highway Access</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateTo('hotel')}
              className="w-full bg-[#e9c349] text-[#13140f] font-extrabold py-3 px-4 rounded-xl text-xs hover:bg-white transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>View Dedicated Hotel Rooms Page</span>
              <ArrowRight className="w-4 h-4 text-[#13140f]" />
            </button>
          </div>

        </div>

        {/* Laurel Divider */}
        <div className="flex items-center justify-center gap-4 pt-4 opacity-60">
          <div className="h-px w-16 bg-[#e9c349]"></div>
          <ShieldCheck className="w-4 h-4 text-[#e9c349]" />
          <div className="h-px w-16 bg-[#e9c349]"></div>
        </div>

      </div>
    </section>
  );
};

