import React from 'react';
import { PageSection } from '../types';
import { Phone, MapPin, Clock, Heart, Gem } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: PageSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-24 sm:pb-12 px-4 sm:px-6 relative text-slate-300">
      
      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-[150px]"></div>
        <Gem className="w-5 h-5 text-amber-400" />
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-900 border border-blue-700 p-0.5 shadow-md flex items-center justify-center text-amber-400">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif-title font-bold text-xl text-white tracking-tight block">
                Diamond Bawarchi
              </span>
              <span className="text-[11px] font-serif-title italic text-amber-400 font-semibold">
                "Quality &amp; Tasty Biryani"
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            Shadnagar's favorite biryani landmark serving authentic Hyderabadi Dum Biryani, Jail Mandi, Banquet Hall celebrations, and Deluxe AC Hotel Rooms.
          </p>
        </div>

        {/* Quick Jumps */}
        <div>
          <h4 className="font-serif-title font-bold text-base text-white mb-3 border-b border-slate-800 pb-1">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs text-slate-400 font-medium">
            {['home', 'menu', 'catering', 'hotel', 'gallery', 'contact'].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => {
                    setActiveSection(sec as PageSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 capitalize transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span>
                  {sec === 'hotel' ? 'Hotel Rooms' : sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif-title font-bold text-base text-white mb-3 border-b border-slate-800 pb-1">
            Our Offerings
          </h4>
          <ul className="space-y-2 text-xs text-slate-400 font-medium">
            <li>• Dum Chicken &amp; Mutton Biryani</li>
            <li>• Jail Mandi Theme Dining</li>
            <li>• AC Banquet Hall (500 Capacity)</li>
            <li>• Bulk Biryani Deghs (20-100+ Members)</li>
            <li>• Deluxe AC Hotel Rooms Stay</li>
            <li>• Valet Parking &amp; Highway Access</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-serif-title font-bold text-base text-white mb-3 border-slate-800 border-b pb-1">
            Contact Us
          </h4>
          <div className="flex items-start gap-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Shadnagar, Farooqnagar, Telangana 509216</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="tel:09666886613" className="hover:text-amber-400">096668 86613</a>
            <span>/</span>
            <a href="tel:8688886613" className="hover:text-amber-400">86888 86613</a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>11:00 AM – 10:30 PM (Daily)</span>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Diamond Bawarchi. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Shadnagar, Telangana
        </p>
      </div>

    </footer>
  );
};

