import React, { useState, useEffect } from 'react';
import { PageSection, CartItem, MenuItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { CateringSection } from './components/CateringSection';
import { HotelSection } from './components/HotelSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { PopularTimes } from './components/PopularTimes';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { TableBookingModal } from './components/TableBookingModal';
import { StickyNav } from './components/StickyNav';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { OrdersProvider } from './context/OrdersContext';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  const getInitialSection = (): PageSection => {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/dashboard') || path.startsWith('/admin')) {
      return 'dashboard';
    }
    return 'home';
  };

  const [activeSection, setActiveSection] = useState<PageSection>(getInitialSection);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Sync URL history state when activeSection changes
  const changeSection = (section: PageSection) => {
    setActiveSection(section);
    if (section === 'dashboard') {
      window.history.pushState({}, '', '/dashboard');
    } else if (window.location.pathname.startsWith('/dashboard') || window.location.pathname.startsWith('/admin')) {
      window.history.pushState({}, '', '/');
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/dashboard') || path.startsWith('/admin')) {
        setActiveSection('dashboard');
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Cart Handlers
  const handleAddToCart = (item: MenuItem, selectedSize?: string, selectedPrice?: number) => {
    const finalPrice = selectedPrice || item.price;
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) => ci.item.id === item.id && ci.selectedSize === selectedSize
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            item,
            quantity: 1,
            selectedSize,
            selectedPrice: finalPrice,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (id: string, size: string | undefined, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id && ci.selectedSize === size) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string, size: string | undefined) => {
    setCartItems((prev) => prev.filter((ci) => !(ci.item.id === id && ci.selectedSize === size)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <OrdersProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-900 selection:text-white antialiased">
        
        {/* Dedicated Admin Dashboard View */}
        {activeSection === 'dashboard' ? (
          <Dashboard onGoToStorefront={() => changeSection('home')} />
        ) : (
          <>
            {/* Fixed Customer Navigation Header */}
            <Header
              activeSection={activeSection}
              setActiveSection={changeSection}
              cartItems={cartItems}
              setIsCartOpen={setIsCartOpen}
              setIsBookingOpen={setIsBookingOpen}
            />

            {/* Main Content Sections */}
            <main className="pt-20 pb-12">
              {activeSection === 'home' && (
                <>
                  <Hero setActiveSection={changeSection} setIsBookingOpen={setIsBookingOpen} />
                  <AboutSection setActiveSection={changeSection} />
                  <MenuSection onAddToCart={handleAddToCart} />
                  <PopularTimes />
                  <ReviewsSection />
                  <ContactSection />
                </>
              )}

              {activeSection === 'menu' && (
                <>
                  <MenuSection onAddToCart={handleAddToCart} />
                  <PopularTimes />
                </>
              )}

              {activeSection === 'catering' && <CateringSection />}

              {activeSection === 'hotel' && <HotelSection />}

              {activeSection === 'gallery' && <GallerySection />}

              {activeSection === 'contact' && <ContactSection />}
            </main>

            {/* Footer */}
            <Footer setActiveSection={changeSection} />

            {/* Slide-over Cart Drawer */}
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />

            {/* Table Reservation Modal */}
            <TableBookingModal
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
            />

            {/* Mobile Sticky Quick Navigation */}
            <StickyNav
              activeSection={activeSection}
              setActiveSection={changeSection}
              cartCount={totalCartCount}
              setIsCartOpen={setIsCartOpen}
              setIsBookingOpen={setIsBookingOpen}
            />

            {/* Floating WhatsApp Quick Action Widget */}
            <WhatsAppWidget />
          </>
        )}

      </div>
    </OrdersProvider>
  );
}

