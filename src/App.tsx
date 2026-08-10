import React, { useState } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState<PageSection>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
    <div className="min-h-screen bg-[#13140f] text-[#e5e2db] font-sans selection:bg-[#800000] selection:text-[#ffe088] antialiased">
      
      {/* Fixed Navigation Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />

      {/* Main Content Sections */}
      <main className="pt-16 pb-12">
        {activeSection === 'home' && (
          <>
            <Hero setActiveSection={setActiveSection} setIsBookingOpen={setIsBookingOpen} />
            <AboutSection setActiveSection={setActiveSection} />
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
      <Footer setActiveSection={setActiveSection} />

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
        setActiveSection={setActiveSection}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />

      {/* Floating WhatsApp Quick Action Widget */}
      <WhatsAppWidget />

    </div>
  );
}
