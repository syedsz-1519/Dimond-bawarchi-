import React from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Calendar } from 'lucide-react';
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

  const navLinks: { id: PageSection; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'menu', label: 'Menu', icon: 'restaurant_menu' },
    { id: 'catering', label: 'Catering', icon: 'event_seat' },
    { id: 'hotel', label: 'Hotel Rooms', icon: 'hotel' },
    { id: 'gallery', label: 'Gallery', icon: 'photo_library' },
    { id: 'contact', label: 'Contact', icon: 'location_on' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2d0000]/95 backdrop-blur-md border-b border-[#af8d11]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e9c349] to-[#af8d11] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#13140f] flex items-center justify-center text-[#e9c349]">
              <span className="material-symbols-outlined text-[22px]">diamond</span>
            </div>
          </div>
          <div>
            <span className="font-serif-title font-bold text-lg sm:text-xl text-[#f9f6ee] tracking-tight group-hover:text-[#e9c349] transition-colors">
              Diamond Bawarchi
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#e9c349] font-medium tracking-wider uppercase">
                Shadnagar, TS
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-green-400 font-medium">Open</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveSection(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeSection === link.id
                  ? 'bg-[#e9c349] text-[#13140f] shadow-md font-bold'
                  : 'text-[#e5e2db]/80 hover:text-[#e9c349] hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Book Table & Cart & Phone */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#800000] text-[#ffe088] border border-[#e9c349]/40 hover:bg-[#690000] hover:border-[#e9c349] transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#e9c349]" />
            <span>Book Table</span>
          </button>

          <a
            href="tel:09666886613"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-[#e5e2db] hover:bg-white/20 transition-all border border-white/10"
            title="Call Restaurant"
          >
            <Phone className="w-3.5 h-3.5 text-[#e9c349]" />
            <span>096668 86613</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-[#800000] text-[#e9c349] border border-[#e9c349]/50 hover:bg-[#a00000] transition-transform active:scale-95 shadow-md flex items-center justify-center"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e9c349] text-[#13140f] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#e5e2db] hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13140f] border-b border-[#af8d11]/30 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors ${
                activeSection === link.id
                  ? 'bg-[#800000] text-[#e9c349] border border-[#e9c349]/40'
                  : 'text-[#e5e2db] hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-lg text-[#e9c349]">{link.icon}</span>
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setIsBookingOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#e9c349] text-[#13140f] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Table
            </button>
            <a
              href="tel:09666886613"
              className="flex-1 py-2.5 rounded-xl bg-[#800000] text-[#e5e2db] font-bold text-xs flex items-center justify-center gap-2 border border-[#e9c349]/30"
            >
              <Phone className="w-4 h-4 text-[#e9c349]" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
