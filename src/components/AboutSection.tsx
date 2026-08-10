import React from 'react';
import { PageSection } from '../types';
import { Utensils, PartyPopper, BedDouble, ShieldCheck, ArrowRight, CheckCircle2, Image as ImageIcon, Gem } from 'lucide-react';

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
      
      {/* Decorative Motif Header */}
      <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-[100px]"></div>
        <Gem className="w-5 h-5 text-blue-700" />
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-[100px]"></div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 relative overflow-hidden space-y-8">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-4">
            Shadnagar's Culinary Jewel
          </span>

          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 mb-4 font-bold">
            A Legacy of Flavor &amp; Hospitality
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Welcome to <strong className="text-blue-900 font-bold">Diamond Bawarchi</strong> — where royal South Indian culinary traditions meet warm hospitality. Renowned for our signature dum biryanis cooked in traditional copper handis, we also offer our exclusive <strong>Jail Mandi</strong> experience, a fully air-conditioned <strong>Banquet Hall</strong> for weddings, and luxury <strong>Hotel Rooms</strong> right on the highway in Shadnagar, Farooqnagar.
          </p>
        </div>

        {/* Services Quick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div 
            onClick={() => navigateTo('menu')}
            className="group cursor-pointer bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700">
              Fine Dining
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Biryani &amp; Mandi</p>
          </div>

          <div 
            onClick={() => navigateTo('catering')}
            className="group cursor-pointer bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <PartyPopper className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700">
              Banquet Hall
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Up to 500 Guests</p>
          </div>

          <div 
            onClick={() => navigateTo('hotel')}
            className="group cursor-pointer bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <BedDouble className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700">
              Hotel Rooms
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Deluxe AC Stay</p>
          </div>

          <div 
            onClick={() => navigateTo('gallery')}
            className="group cursor-pointer bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-inner">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h3 className="font-serif-title font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700">
              Photo Gallery
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Ambiance &amp; Food</p>
          </div>
        </div>

        {/* Individual Service Feature Highlight Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
          
          {/* Catering & Banquet Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors shadow-sm group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-200">
                  Bulk Orders &amp; Events
                </span>
                <PartyPopper className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Catering &amp; AC Banquet Hall
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host unforgettable weddings, birthdays, corporate events, and family functions with our 500-guest capacity AC Banquet Hall or order bulk biryani deghs.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>500 Capacity AC Banquet Hall</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>Bulk Dum Biryani Deghs (20 – 100+ members)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateTo('catering')}
              className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-xl text-xs border border-blue-800 hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>View Dedicated Catering Page</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Hotel Rooms Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors shadow-sm group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-200">
                  Luxury Accommodation
                </span>
                <BedDouble className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Deluxe AC Hotel Rooms
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stay comfortably on the Shadnagar Highway with modern air-conditioned hotel rooms, 24/7 room service, express check-in, and ample parking space.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>Standard &amp; Executive Deluxe AC Rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>24/7 Room Service &amp; Highway Access</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateTo('hotel')}
              className="w-full bg-blue-50 text-blue-900 font-extrabold py-3 px-4 rounded-xl text-xs border border-blue-200 hover:bg-blue-100 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>View Dedicated Hotel Rooms Page</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </button>
          </div>

        </div>

        {/* Laurel Divider */}
        <div className="flex items-center justify-center gap-4 pt-4 opacity-60">
          <div className="h-px w-16 bg-blue-300"></div>
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          <div className="h-px w-16 bg-blue-300"></div>
        </div>

      </div>
    </section>
  );
};


