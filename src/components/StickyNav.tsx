import React, { useState } from 'react';
import { PageSection } from '../types';
import { Phone, ShoppingBag, Utensils, Calendar, Hotel } from 'lucide-react';

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
          className="md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end p-4 animate-fade-in"
          onClick={() => setShowCallMenu(false)}
        >
          <div 
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-serif-title font-bold text-base text-slate-900">Call Diamond Bawarchi</h3>
                <p className="text-xs text-blue-700">Shadnagar, Telangana • Express Pickup & Booking</p>
              </div>
              <button 
                onClick={() => setShowCallMenu(false)}
                className="text-slate-400 hover:text-slate-700 text-sm bg-slate-100 w-7 h-7 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <a
                href="https://wa.me/919666886613?text=Hello%20Diamond%20Bawarchi%20Shadnagar,%20I%20would%20like%20to%20place%20an%20order%20/%20inquire."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium border border-emerald-500 active:scale-98 transition-transform shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 font-bold">
                    WA
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-emerald-100 font-sans">WhatsApp Inquiry & Order</div>
                    <div className="text-base font-bold font-mono text-white">096668 86613</div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white text-emerald-800 px-2.5 py-1 rounded-full">WhatsApp</span>
              </a>

              <a
                href="tel:09666886613"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white border border-blue-800 font-medium active:scale-98 transition-transform shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-blue-200 font-sans">Direct Phone Call</div>
                    <div className="text-base font-bold font-mono text-white">096668 86613</div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full">Call</span>
              </a>

              <a
                href="tel:8688886613"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-300 font-medium active:scale-98 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-500 font-sans">Alternative Counter Line</div>
                    <div className="text-base font-bold font-mono text-slate-900">86888 86613</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full">Call</span>
              </a>
            </div>

            <button
              onClick={() => setShowCallMenu(false)}
              className="w-full py-2.5 text-center text-xs text-slate-500 hover:text-slate-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sticky Fixed Mobile Bottom Action Bar */}
      <div id="mobile-sticky-action-bar" className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2.5 shadow-lg">
        
        {/* Main Dual Call-to-Action Row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          
          {/* 1. Call Now Button */}
          <button
            onClick={() => setShowCallMenu(true)}
            className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white font-bold h-12 rounded-xl border border-blue-800 shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-all text-xs sm:text-sm tracking-wide"
            aria-label="Call Diamond Bawarchi"
          >
            <div className="w-7 h-7 rounded-full bg-blue-950/70 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-4 h-4 animate-pulse" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-bold text-white text-xs">Call Now</span>
              <span className="text-[10px] text-blue-200 font-mono font-normal">096668 86613</span>
            </div>
          </button>

          {/* 2. Order Online Button */}
          <button
            onClick={handleOrderOnline}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold h-12 rounded-xl border border-blue-500 shadow-sm flex items-center justify-center gap-2 active:scale-95 transition-all text-xs sm:text-sm tracking-wide relative overflow-hidden"
            aria-label="Order Biryani Online"
          >
            <div className="w-7 h-7 rounded-full bg-blue-950 flex items-center justify-center text-amber-400 shrink-0">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-extrabold text-white text-xs">Order Online</span>
              <span className="text-[10px] text-blue-100 font-normal">
                {cartCount > 0 ? `${cartCount} item(s) in Cart` : 'Explore Menu'}
              </span>
            </div>

            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </button>

        </div>

        {/* Secondary Quick Navigation Row */}
        <div className="flex items-center justify-around pt-1 border-t border-slate-100 text-[10px] text-slate-600">
          <button
            onClick={() => {
              setActiveSection('menu');
              const elem = document.getElementById('menu-section');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-1 py-1 px-2 rounded ${
              activeSection === 'menu' ? 'text-blue-900 font-bold' : 'hover:text-blue-700'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-blue-700" />
            <span>Full Menu</span>
          </button>

          <span className="text-slate-300">•</span>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex items-center gap-1 py-1 px-2 rounded hover:text-blue-700"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-700" />
            <span>Book Table</span>
          </button>

          <span className="text-slate-300">•</span>

          <button
            onClick={() => {
              setActiveSection('hotel');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-1 py-1 px-2 rounded ${
              activeSection === 'hotel' ? 'text-blue-900 font-bold' : 'hover:text-blue-700'
            }`}
          >
            <Hotel className="w-3.5 h-3.5 text-blue-700" />
            <span>Hotel Rooms</span>
          </button>
        </div>

      </div>
    </>
  );
};
