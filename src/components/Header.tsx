import React from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Calendar, MapPin, Clock, ChevronRight, BedDouble, PartyPopper, Flame } from 'lucide-react';
import { CartItem, PageSection } from '../types';

interface HeaderProps {
  activeSection: PageSection;
  setActiveSection: (section: PageSection) => void;
  cartItems: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  cartItems,
  setIsCartOpen,
  setIsBookingOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { id: PageSection; label: string; icon: string; subtitle: string }[] = [
    { id: 'home', label: 'Home', icon: 'home', subtitle: 'Overview & Highlights' },
    { id: 'menu', label: 'Order Menu', icon: 'restaurant_menu', subtitle: 'Biryani, Starters & Curries' },
    { id: 'catering', label: 'Catering & Banquet', icon: 'event_seat', subtitle: 'Bulk Deghs & AC Hall' },
    { id: 'hotel', label: 'Hotel Rooms', icon: 'hotel', subtitle: 'Deluxe AC Accommodation' },
    { id: 'gallery', label: 'Photo Gallery', icon: 'photo_library', subtitle: 'Ambiance & Food Showcase' },
    { id: 'contact', label: 'Contact Us', icon: 'location_on', subtitle: 'Location Map & Timings' },
  ];

  const handleNavClick = (sectionId: PageSection) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#2d0000]/95 backdrop-blur-md border-b border-[#af8d11]/40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Enhanced Royal Brand Logo */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {/* Diamond Crest Icon */}
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#ffe088] via-[#e9c349] to-[#af8d11] p-0.5 shadow-[0_0_15px_rgba(233,195,73,0.4)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-[#13140f] flex items-center justify-center text-[#e9c349] relative overflow-hidden">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">diamond</span>
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#800000] text-[#ffe088] text-[9px] font-extrabold px-1.5 py-0.2 rounded-full border border-[#e9c349]/60 shadow">
                ★
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-title font-bold text-lg sm:text-2xl text-[#f9f6ee] tracking-tight group-hover:text-[#e9c349] transition-colors drop-shadow">
                  Diamond Bawarchi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] text-[#e9c349] font-serif-title italic font-semibold tracking-wide">
                  "Quality &amp; Tasty Biryani"
                </span>
                <span className="hidden sm:inline-block text-[#e5e2db]/30">•</span>
                <div className="hidden sm:flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-green-400 font-medium">Shadnagar, TS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#e9c349] to-[#af8d11] text-[#13140f] font-extrabold shadow-[0_2px_10px_rgba(233,195,73,0.3)] scale-105'
                    : 'text-[#e5e2db]/80 hover:text-[#e9c349] hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Action Buttons: Book Table, Phone & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-[#800000] text-[#ffe088] border border-[#e9c349]/50 hover:bg-[#a00000] hover:border-[#e9c349] transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#e9c349]" />
              <span>Book Table</span>
            </button>

            <a
              href="tel:09666886613"
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 text-[#e5e2db] hover:bg-white/20 transition-all border border-white/10"
              title="Call Primary Number"
            >
              <Phone className="w-3.5 h-3.5 text-[#e9c349]" />
              <span>096668 86613</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#800000] text-[#e9c349] border border-[#e9c349]/50 hover:bg-[#a00000] transition-transform active:scale-95 shadow-md flex items-center justify-center"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e9c349] text-[#13140f] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-[#13140f] animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Clear Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-[#2a2a25] text-[#e9c349] border border-[#e9c349]/30 hover:bg-[#353530] transition-all flex items-center justify-center shadow-md active:scale-95"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Clear Mobile Hamburger Drawer Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Slide-out Container */}
          <div className="relative w-full max-w-sm bg-[#13140f] h-full shadow-2xl border-l border-[#af8d11]/40 flex flex-col justify-between overflow-y-auto z-10 animate-slideLeft p-5 text-[#e5e2db]">
            
            {/* Drawer Top Header */}
            <div className="pb-4 border-b border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                
                {/* Logo Badge in Drawer */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ffe088] to-[#af8d11] p-0.5 shadow">
                    <div className="w-full h-full rounded-[10px] bg-[#13140f] flex items-center justify-center text-[#e9c349]">
                      <span className="material-symbols-outlined text-[22px]">diamond</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif-title font-bold text-lg text-[#f9f6ee]">
                      Diamond Bawarchi
                    </h3>
                    <p className="text-[10px] text-[#e9c349] font-serif-title italic font-semibold">
                      "Quality &amp; Tasty Biryani"
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#2a2a25] text-[#e5e2db] hover:text-[#e9c349] hover:bg-[#353530] border border-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between bg-[#20201b] px-3 py-2 rounded-xl border border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="font-bold text-green-400">Open Daily</span>
                  <span className="text-[#e5e2db]/60">11:00 AM – 10:30 PM</span>
                </div>
                <span className="text-[10px] text-[#e9c349] font-bold">Shadnagar</span>
              </div>
            </div>

            {/* Navigation Links List */}
            <div className="py-4 space-y-1.5 flex-1">
              <div className="text-[10px] font-bold text-[#e9c349] uppercase tracking-widest px-2 mb-2">
                Navigation Menu
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#800000] to-[#b22b1d] text-[#ffe088] border border-[#e9c349]/50 shadow-md font-bold'
                        : 'bg-[#1c1d17] text-[#e5e2db] border border-white/5 hover:bg-[#252620] hover:border-[#e9c349]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-[#13140f] text-[#e9c349]' : 'bg-[#2a2a25] text-[#e9c349]'
                      }`}>
                        <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#f9f6ee]">{link.label}</div>
                        <div className="text-[10px] text-[#e5e2db]/60 font-normal">{link.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#e9c349] translate-x-1' : 'text-[#e5e2db]/40 group-hover:translate-x-1'}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Action Section */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              
              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleNavClick('catering')}
                  className="bg-[#20201b] p-2.5 rounded-xl border border-white/10 hover:border-[#e9c349]/50 text-left flex items-center gap-2 group"
                >
                  <PartyPopper className="w-4 h-4 text-[#e9c349] shrink-0" />
                  <div>
                    <div className="font-bold text-[11px] text-[#f9f6ee]">Banquet Hall</div>
                    <div className="text-[9px] text-[#e5e2db]/60">500 Guests</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('hotel')}
                  className="bg-[#20201b] p-2.5 rounded-xl border border-white/10 hover:border-[#e9c349]/50 text-left flex items-center gap-2 group"
                >
                  <BedDouble className="w-4 h-4 text-[#e9c349] shrink-0" />
                  <div>
                    <div className="font-bold text-[11px] text-[#f9f6ee]">Hotel Rooms</div>
                    <div className="text-[9px] text-[#e5e2db]/60">AC Deluxe</div>
                  </div>
                </button>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="py-3 px-3 rounded-xl bg-[#e9c349] text-[#13140f] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-white transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book Table
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="py-3 px-3 rounded-xl bg-[#800000] text-[#ffe088] font-extrabold text-xs flex items-center justify-center gap-2 border border-[#e9c349]/40 shadow-md hover:bg-[#a00000] transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#e9c349]" />
                  Cart ({totalCartCount})
                </button>
              </div>

              {/* Direct Call Numbers */}
              <div className="bg-[#1c1d17] p-3 rounded-xl border border-white/10 space-y-2 text-xs">
                <div className="text-[10px] font-bold text-[#e2bfb9] uppercase flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#e9c349]" />
                  <span>Call Us Direct</span>
                </div>
                <div className="flex items-center justify-between font-bold text-xs">
                  <a href="tel:09666886613" className="text-[#e9c349] hover:underline">096668 86613</a>
                  <span className="text-white/20">•</span>
                  <a href="tel:8688886613" className="text-[#e9c349] hover:underline">86888 86613</a>
                </div>
              </div>

              {/* Location Footer */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#e5e2db]/60 pt-1">
                <MapPin className="w-3.3 h-3.3 text-[#e9c349]" />
                <span>Farooqnagar, Shadnagar, Telangana 509216</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
