import React from 'react';
import { PageSection } from '../types';
import { Phone, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: PageSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-[#13140f] border-t border-[#af8d11]/30 pt-12 pb-24 sm:pb-12 px-4 sm:px-6 relative text-[#e5e2db]">
      
      {/* Decorative Gold Laurel Divider */}
      <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[150px]"></div>
        <span className="material-symbols-outlined text-[#e9c349] text-2xl">diamond</span>
        <div className="h-px bg-gradient-to-r from-transparent via-[#e9c349] to-transparent flex-1 max-w-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#800000] text-[#e9c349] flex items-center justify-center border border-[#e9c349]/40">
              <span className="material-symbols-outlined text-lg">diamond</span>
            </div>
            <span className="font-serif-title font-bold text-xl text-[#f9f6ee]">
              Diamond Bawarchi
            </span>
          </div>
          <p className="font-serif-title italic text-[#e9c349] text-sm font-semibold">
            "Quality &amp; Tasty Biryani"
          </p>
          <p className="text-xs text-[#e5e2db]/70 leading-relaxed">
            Shadnagar's favorite biryani landmark serving authentic Hyderabadi Dum Biryani, Jail Mandi, Banquet Hall celebrations, and Deluxe AC Hotel Rooms.
          </p>
        </div>

        {/* Quick Jumps */}
        <div>
          <h4 className="font-serif-title font-bold text-base text-[#f9f6ee] mb-3 border-b border-white/10 pb-1">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs text-[#e5e2db]/80">
            {['home', 'menu', 'catering', 'hotel', 'gallery', 'contact'].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => {
                    setActiveSection(sec as PageSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#e9c349] capitalize transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#e9c349]">›</span>
                  {sec === 'hotel' ? 'Hotel Rooms' : sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif-title font-bold text-base text-[#f9f6ee] mb-3 border-b border-white/10 pb-1">
            Our Offerings
          </h4>
          <ul className="space-y-2 text-xs text-[#e5e2db]/80">
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
          <h4 className="font-serif-title font-bold text-base text-[#f9f6ee] mb-3 border-b border-white/10 pb-1">
            Contact Us
          </h4>
          <div className="flex items-start gap-2 text-xs text-[#e5e2db]/80">
            <MapPin className="w-4 h-4 text-[#e9c349] shrink-0 mt-0.5" />
            <span>Shadnagar, Farooqnagar, Telangana 509216</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#e5e2db]/80">
            <Phone className="w-4 h-4 text-[#e9c349] shrink-0" />
            <a href="tel:09666886613" className="hover:text-[#e9c349]">096668 86613</a>
            <span>/</span>
            <a href="tel:8688886613" className="hover:text-[#e9c349]">86888 86613</a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#e5e2db]/80">
            <Clock className="w-4 h-4 text-[#e9c349] shrink-0" />
            <span>11:00 AM – 10:30 PM (Daily)</span>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 text-center text-[11px] text-[#e5e2db]/50 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Diamond Bawarchi. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-[#800000] fill-[#800000]" /> in Shadnagar, Telangana
        </p>
      </div>

    </footer>
  );
};
