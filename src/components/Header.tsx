import React from 'react';
import { 
  Home, 
  Utensils, 
  PartyPopper, 
  BedDouble, 
  Image as ImageIcon, 
  MapPin, 
  Gem, 
  ShoppingBag, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  ChevronRight 
} from 'lucide-react';
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

  const navLinks = [
    { id: 'home' as PageSection, label: 'Home', icon: Home, subtitle: 'Overview & Highlights' },
    { id: 'menu' as PageSection, label: 'Order Menu', icon: Utensils, subtitle: 'Biryani, Starters & Curries' },
    { id: 'catering' as PageSection, label: 'Catering & Banquet', icon: PartyPopper, subtitle: 'Bulk Deghs & AC Hall' },
    { id: 'hotel' as PageSection, label: 'Hotel Rooms', icon: BedDouble, subtitle: 'Deluxe AC Accommodation' },
    { id: 'gallery' as PageSection, label: 'Photo Gallery', icon: ImageIcon, subtitle: 'Ambiance & Food Showcase' },
    { id: 'contact' as PageSection, label: 'Contact Us', icon: MapPin, subtitle: 'Location Map & Timings' },
  ];

  const handleNavClick = (sectionId: PageSection) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Enhanced Royal Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group py-1 shrink-0"
            onClick={() => handleNavClick('home')}
          >
            {/* Diamond Crest Icon */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 border border-blue-700/30">
                <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center text-amber-400 relative overflow-hidden">
                  <Gem className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 drop-shadow" />
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-sm">
                ★
              </div>
            </div>

            {/* Brand Title & Tagline */}
            <div className="flex flex-col justify-center leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-title font-bold text-xl sm:text-2xl text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                  Diamond Bawarchi
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] sm:text-xs text-blue-700 font-serif-title italic font-semibold whitespace-nowrap">
                  "Quality &amp; Tasty Biryani"
                </span>
                <span className="hidden sm:inline-block text-slate-300">•</span>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-700 font-medium whitespace-nowrap">Shadnagar, TS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20 font-bold scale-[1.02]'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-blue-600'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Book Table, Phone & Cart */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white hover:bg-blue-800 border border-blue-800 transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Table</span>
            </button>

            <a
              href="tel:09666886613"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-900 hover:bg-blue-100 transition-all border border-blue-200 whitespace-nowrap"
              title="Call Primary Number"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>096668 86613</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-blue-900 text-white hover:bg-blue-800 border border-blue-800 transition-all active:scale-95 shadow-sm flex items-center justify-center"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow border border-white animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Clear Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center shadow-sm active:scale-95"
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
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Slide-out Container */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-y-auto z-10 animate-slideLeft p-5 text-slate-800">
            
            {/* Drawer Top Header */}
            <div className="pb-4 border-b border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                
                {/* Logo Badge in Drawer */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 p-0.5 shadow">
                    <div className="w-full h-full rounded-[10px] bg-blue-950 flex items-center justify-center text-amber-400">
                      <Gem className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif-title font-bold text-lg text-slate-900">
                      Diamond Bawarchi
                    </h3>
                    <p className="text-[10px] text-blue-700 font-serif-title italic font-semibold">
                      "Quality &amp; Tasty Biryani"
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between bg-blue-50/70 px-3 py-2 rounded-xl border border-blue-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-emerald-700">Open Daily</span>
                  <span className="text-slate-600">11:00 AM – 10:30 PM</span>
                </div>
                <span className="text-[10px] text-blue-800 font-bold">Shadnagar</span>
              </div>
            </div>

            {/* Navigation Links List */}
            <div className="py-4 space-y-1.5 flex-1">
              <div className="text-[10px] font-bold text-blue-800 uppercase tracking-widest px-2 mb-2">
                Navigation Menu
              </div>

              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all group ${
                      isActive
                        ? 'bg-blue-900 text-white border border-blue-800 shadow-md font-bold'
                        : 'bg-slate-50 text-slate-800 border border-slate-200/60 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-blue-950 text-amber-400' : 'bg-blue-50 text-blue-700'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>{link.label}</div>
                        <div className={`text-[10px] font-normal ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>{link.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:translate-x-1'}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Action Section */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              
              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleNavClick('catering')}
                  className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 text-left flex items-center gap-2 group"
                >
                  <PartyPopper className="w-4 h-4 text-blue-700 shrink-0" />
                  <div>
                    <div className="font-bold text-[11px] text-slate-900">Banquet Hall</div>
                    <div className="text-[9px] text-slate-500">500 Guests</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('hotel')}
                  className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 text-left flex items-center gap-2 group"
                >
                  <BedDouble className="w-4 h-4 text-blue-700 shrink-0" />
                  <div>
                    <div className="font-bold text-[11px] text-slate-900">Hotel Rooms</div>
                    <div className="text-[9px] text-slate-500">AC Deluxe</div>
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
                  className="py-3 px-3 rounded-xl bg-blue-900 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-blue-800 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Book Table
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="py-3 px-3 rounded-xl bg-blue-50 text-blue-900 font-extrabold text-xs flex items-center justify-center gap-2 border border-blue-200 shadow-sm hover:bg-blue-100 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-blue-700" />
                  Cart ({totalCartCount})
                </button>
              </div>

              {/* Direct Call Numbers */}
              <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-100 space-y-2 text-xs">
                <div className="text-[10px] font-bold text-blue-900 uppercase flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-700" />
                  <span>Call Us Direct</span>
                </div>
                <div className="flex items-center justify-between font-bold text-xs">
                  <a href="tel:09666886613" className="text-blue-900 hover:underline">096668 86613</a>
                  <span className="text-slate-300">•</span>
                  <a href="tel:8688886613" className="text-blue-900 hover:underline">86888 86613</a>
                </div>
              </div>

              {/* Location Footer */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
                <MapPin className="w-3.3 h-3.3 text-blue-700" />
                <span>Farooqnagar, Shadnagar, Telangana 509216</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};


