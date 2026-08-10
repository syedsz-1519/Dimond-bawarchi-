import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiance' | 'dishes' | 'banquet' | 'rooms';
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Glowing Signage Storefront',
    category: 'ambiance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHOs6Rd9qo3-lyzXdqdVYNxopuxvRLXqBX-h2UbchR_GGwL8FNQvlqa0rnv7hIlENL5ZZn9oIWw8Dr1n37_DmZuD0yK82DPc28e05_29DvBk62JuJfAFeS2vuhkEhXgMhjeSgM7W0KaoQRhWpZ1VrnJ47hV7mgxwkyY37HOI1hLBDUn7h2Wc83iGkkmO8S3D4Gp0J3nJ2VthwizR4Pv9_P0Aq96BQ_GL4GXAkxLXZ0tANdBABdPZLc',
    description: 'Diamond Bawarchi night view in Shadnagar, Farooqnagar.'
  },
  {
    id: 'g2',
    title: 'Dum Biryani Copper Handi',
    category: 'dishes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAce113dSKpMY_AWwG7A6H-GSNAlXkriALKSrIEwFdDrJ5Fm82wvUz20A49Cih17lDVurC3Re5B0XSJcLGpsmvaCacwllUN3S0TS8gU3iMj2FXEBsgDrRLKeB_4un8cGr5hmcbRrAfs33_yjB8jGfnSCraBSGMamJ_hVFz2MAkB8jJMBunYXYPfN6zdHsupFw-j4LPj-bwKWMVFgM_0tuxuxUpwnu2D1Leg6eNyDWHsoA8ZZinZBo5g',
    description: 'Aromatic basmati rice cooked with tender chicken and saffron.'
  },
  {
    id: 'g3',
    title: 'Special Mutton Biryani Platter',
    category: 'dishes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgPXNN6YcVkTe4loo5_xUVwaCm7eYueCdO7GJDS-a0DIpsOryQYhIiH2TPnW8ODcdM92HWfS00zB15ZzJRrL8-llKqdX1Wrd16nWSXAfpruCTkm7CmpjS1zxdCtsoidB5eWNl4KePd2uHJQZXwybhvfaGaSmZ286_tTUTwMe5pl_0bhI3lmip73VZBE2URxCrG_KAQ1RgDkVZU4EGdZBcOH2kBX9ZySHttmsZ_SSstt8fTelffyiz',
    description: 'Succulent mutton slow-cooked with salan, raita, and salad.'
  },
  {
    id: 'g4',
    title: 'Chicken 65 Starter',
    category: 'dishes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-82Werx6mZWZ7JLoIR68VupOwL5iX8Z76N16IxgvZMVOs9TFA1ezXoG7lUSgZaGEZ2VnWx2wFcTdq_bQKCWKCVDXuFxsLvEdUMR-Mj4L97VYHCyA8Hwl3qU15LBGNNQ4DYEebAPjpLXcOuQXMoG_KOhIzTFSrCC-aT3zbAzmrkKav2Es1eUSDKRmeZ7sc5C7Vmju63jDc6EwQXirpO5czVKQ3Cidmpjh2BGt1aqMBnPn8l9MSYtNb',
    description: 'Crispy deep-fried chicken tossed with curry leaves & green chilies.'
  },
  {
    id: 'g5',
    title: 'Regal Banquet Hall Setup',
    category: 'banquet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHRsSzUUDWxikEF303zzatB0-0LOlMsvdbo9ygn0F-WhFX3cXa-WIyt9T21ktX6zkTF_kijJYhaXk5EpbBRLFmWrEjlHb5CDuXztoHKgcwJNPrlpV2VKUC8_23pgd_xB-DuouzAQmOZggE6x2TOKXjg8MdEqcR1DFJOqwssB7II54Q8PLTRLUrcMA7TfgYzjr4eLE10DizI4TXaff1ozQGmN1RbBOTpP1fIZ9vLtxQAcqvtBLjAUIR',
    description: 'Diamond Banquet Hall setup for grand wedding receptions.'
  },
  {
    id: 'g6',
    title: 'Bulk Catering Buffet Setup',
    category: 'banquet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5D35suxJbFoV7XZRJH5zGUjBP6Y0rk82Hvd9ckGc6PDQ_-TdHUCFtA0wi0Mspc5hwhk9Ssoshy12uCurS-9YrcEIXl8Ksx66rBLXdHsW2pweuYCH-NVKfCgLvyTUnteVxfO2hSgNXwXZps4AyZ7gQonh9AkK-vFP4pxlADJYRpawkZRm1bMNnTgzXr_SJP865VDlRvYyf7EQYL3AvYjZ2Ustt3jJehZOztU7GHFKId999B4VBTlBj',
    description: 'Buffet setup with traditional large copper biryani deghs.'
  },
  {
    id: 'g7',
    title: 'Luxury Hotel Room Interior',
    category: 'rooms',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsOCfq4XCNyAsLWA7K4FfeElrykL-sY-gwPlW7FvfX34AMYfeDomeYWeZd70WeDf-WZyJD38WqzDCIGFHQZQNOZHQxp72FRyOHegwctl3Ljp25oGMEtodP3uqMLj16bz000VoXwrSxvFzj8BF51NjpZdkLk7q9lbkUszmmgsBaeDLpFWjAbIJLURjKAethD_KB2cRHUh5jOuZbjEF0jaMAWRzY8eS_5FsHhKgH-esIODUhC7FwIraJ',
    description: 'Deluxe AC room interior with modern amenities and room service.'
  },
  {
    id: 'g8',
    title: 'Paneer Majestic Starter',
    category: 'dishes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgpZ454povOspXgzEsZmE44IK6hOPQ68UGkoQ6muhAS9_VAMJ6wx0TdEJkiB1AhyBMb14_2EhdRoBaga4BAZPEhUC_iyCAZievlTpoS28aoMHKoA26-oAkVd8ukWHHLpFqfNY2fUIiQX_25NSH4cY_r6634jX_jEgHPK_mQwNqI7-iSSOChIut1x-7NhQnz0AZgimmX7j8axcmkfPWlRc_v8oF4wP5j8LkCNKn1_QPwg27oEXyJcwx',
    description: 'Signature dry paneer toss in yogurt and yellow spices.'
  }
];

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ambiance' | 'dishes' | 'banquet' | 'rooms'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredGallery = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Visual Tour</span>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900 mt-1">
          Photo Gallery &amp; Ambiance
        </h2>
        <div className="h-0.5 w-24 bg-blue-700 mx-auto mt-2"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-8">
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'ambiance', label: 'Ambiance & Storefront' },
          { id: 'dishes', label: 'Food Plating' },
          { id: 'banquet', label: 'Banquet Hall' },
          { id: 'rooms', label: 'Hotel Rooms' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === tab.id
                ? 'bg-blue-900 text-white shadow-sm border border-blue-800'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 w-full p-4">
              <span className="text-[9px] uppercase font-bold text-amber-400 bg-blue-900/90 px-2 py-0.5 rounded border border-blue-800">
                {item.category}
              </span>
              <h4 className="font-serif-title font-bold text-sm text-white mt-1 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h4>
            </div>

            <div className="absolute top-3 right-3 bg-slate-900/80 p-1.5 rounded-full text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 text-white hover:text-amber-400 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-4 bg-white">
              <h3 className="font-serif-title font-bold text-lg text-slate-900">{activeImage.title}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
