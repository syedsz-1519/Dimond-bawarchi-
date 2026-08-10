import React, { useState } from 'react';
import { PageSection } from '../types';
import { Phone, ShoppingBag, Utensils, Calendar, Hotel, ChevronUp, MapPin } from 'lucide-react';

interface StickyNavProps {
  activeSection: PageSection;
  setActiveSection: (section: PageSection) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({
  activeSection,
  setActiveSection,
  cartCount,
  setIsCartOpen,
  setIsBookingOpen,
}) => {
  const [showCallMenu, setShowCallMenu] = useState(false);

  const handleOrderOnline = () => {
    if (cartCount > 0) {
      setIsCartOpen(true);
    } else {
      setActiveSection('menu');
      const elem = document.getElementById('menu-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Phone Choice Popover for Mobile */}
      {showCallMenu && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end p-4 animate-fade-in"
          onClick={() => setShowCallMenu(false)}
        >
          <div 
            className="w-full bg-[#1c1d18] border border-[#e9c349]/40 rounded-2xl p-5 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <h3 className="font-serif-title font-bold text-base text-[#f9f6ee]">Call Diamond Bawarchi</h3>
                <p className="text-xs text-[#e9c349]">Shadnagar, Telangana • Express Pickup & Booking</p>
              </div>
              <button 
                onClick={() => setShowCallMenu(false)}
                className="text-[#e5e2db]/60 hover:text-white text-sm bg-white/10 w-7 h-7 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <a
                href="tel:09666886613"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#800000] to-[#a30000] text-[#ffe088] border border-[#e9c349]/50 font-medium active:scale-98 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#13140f] flex items-center justify-center text-[#e9c349]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-[#e5e2db]/80 font-sans">Primary Ordering Line</div>
                    <div className="text-base font-bold font-mono text-[#ffffff]">096668 86613</div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-[#e9c349] text-[#13140f] px-2.5 py-1 rounded-full">Call</span>
              </a>

              <a
                href="tel:8688886613"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#2a2a25] text-[#e5e2db] border border-white/10 hover:border-[#e9c349]/40 font-medium active:scale-98 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#13140f] flex items-center justify-center text-[#e9c349]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-[#e5e2db]/60 font-sans">Alternative Counter Line</div>
                    <div className="text-base font-bold font-mono text-[#f9f6ee]">86888 86613</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#e9c349] border border-[#e9c349]/40 px-2.5 py-1 rounded-full">Call</span>
              </a>
            </div>

            <button
              onClick={() => setShowCallMenu(false)}
              className="w-full py-2.5 text-center text-xs text-[#e5e2db]/70 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sticky Fixed Mobile Bottom Action Bar */}
      <div id="mobile-sticky-action-bar" className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#13140f]/95 backdrop-blur-xl border-t border-[#af8d11]/40 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
        
        {/* Main Dual Call-to-Action Row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          
          {/* 1. Call Now Button */}
          <button
            onClick={() => setShowCallMenu(true)}
            className="w-full bg-gradient-to-r from-[#800000] via-[#a30000] to-[#800000] text-[#ffe088] font-bold h-12 rounded-xl border border-[#e9c349]/60 shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all text-xs sm:text-sm tracking-wide"
            aria-label="Call Diamond Bawarchi"
          >
            <div className="w-7 h-7 rounded-full bg-[#13140f]/60 flex items-center justify-center text-[#e9c349] shrink-0">
              <Phone className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-bold text-[#ffffff] text-xs">Call Now</span>
              <span className="text-[10px] text-[#ffe088]/80 font-mono font-normal">096668 86613</span>
            </div>
          </button>

          {/* 2. Order Online Button */}
          <button
            onClick={handleOrderOnline}
            className="w-full bg-gradient-to-r from-[#e9c349] via-[#f7d668] to-[#e9c349] text-[#13140f] font-bold h-12 rounded-xl border border-[#e9c349] shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all text-xs sm:text-sm tracking-wide relative overflow-hidden"
            aria-label="Order Biryani Online"
          >
            <div className="w-7 h-7 rounded-full bg-[#13140f] flex items-center justify-center text-[#e9c349] shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-extrabold text-[#13140f] text-xs">Order Online</span>
              <span className="text-[10px] text-[#13140f]/80 font-normal">
                {cartCount > 0 ? `${cartCount} item(s) in Cart` : 'Explore Menu'}
              </span>
            </div>

            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#800000] text-[#ffe088] text-[10px] font-black px-1.5 py-0.5 rounded-full border border-[#e9c349]">
                {cartCount}
              </span>
            )}
          </button>

        </div>

        {/* Secondary Quick Navigation Row */}
        <div className="flex items-center justify-around pt-1 border-t border-white/5 text-[10px] text-[#e5e2db]/70">
          <button
            onClick={() => {
              setActiveSection('menu');
              const elem = document.getElementById('menu-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-1 py-1 px-2 rounded ${
              activeSection === 'menu' ? 'text-[#e9c349] font-bold' : 'hover:text-[#e9c349]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-[#e9c349]" />
            <span>Full Menu</span>
          </button>

          <span className="text-white/20">•</span>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex items-center gap-1 py-1 px-2 rounded hover:text-[#e9c349]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#e9c349]" />
            <span>Book Table</span>
          </button>

          <span className="text-white/20">•</span>

          <button
            onClick={() => {
              setActiveSection('hotel');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-1 py-1 px-2 rounded ${
              activeSection === 'hotel' ? 'text-[#e9c349] font-bold' : 'hover:text-[#e9c349]'
            }`}
          >
            <Hotel className="w-3.5 h-3.5 text-[#e9c349]" />
            <span>Hotel Rooms</span>
          </button>
        </div>

      </div>
    </>
  );
};

