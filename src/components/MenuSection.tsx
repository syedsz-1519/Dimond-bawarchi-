import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { CategoryId, MenuItem, CartItem } from '../types';
import { Search, Flame, Plus, Check, Filter, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, selectedSize?: string, selectedPrice?: number) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg' | 'vegan' | 'gluten-free' | 'nut-free'>('all');
  const [selectedSizeMap, setSelectedSizeMap] = useState<Record<string, string>>({});
  const [addedItemAnimation, setAddedItemAnimation] = useState<string | null>(null);

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: 'All Menu', icon: 'restaurant' },
    { id: 'biryani', label: 'Biryani Specials', icon: 'local_fire_department' },
    { id: 'starters', label: 'Starters', icon: 'kebab_dining' },
    { id: 'curries', label: 'Curries & Gravies', icon: 'soup_kitchen' },
    { id: 'kababs', label: 'Tandoori Kababs', icon: 'outdoor_grill' },
    { id: 'rotis', label: 'Rotis & Naan', icon: 'bakery_dining' },
    { id: 'rice_noodles', label: 'Fried Rice & Noodles', icon: 'ramen_dining' },
    { id: 'soups', label: 'Soups', icon: 'stasser' },
    { id: 'combos', label: 'Combo Platters', icon: 'stars' },
  ];

  const handleSizeSelect = (itemId: string, sizeName: string) => {
    setSelectedSizeMap((prev) => ({ ...prev, [itemId]: sizeName }));
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }
    // Dietary filter match
    if (dietaryFilter === 'veg' && !item.isVeg) return false;
    if (dietaryFilter === 'nonveg' && item.isVeg) return false;
    if (dietaryFilter === 'vegan' && (!item.tags?.includes('vegan') || !item.isVeg)) return false;
    if (dietaryFilter === 'gluten-free' && !item.tags?.includes('gluten-free')) return false;
    if (dietaryFilter === 'nut-free' && !item.tags?.includes('nut-free')) return false;

    return true;
  });

  const handleAdd = (item: MenuItem) => {
    let size: string | undefined;
    let price: number | undefined;

    if (item.priceOptions && item.priceOptions.length > 0) {
      size = selectedSizeMap[item.id] || item.priceOptions[0].size;
      const foundOpt = item.priceOptions.find((o) => o.size === size);
      if (foundOpt) price = foundOpt.price;
    }

    onAddToCart(item, size, price);

    // Trigger feedback animation
    setAddedItemAnimation(item.id);
    setTimeout(() => setAddedItemAnimation(null), 1000);
  };

  return (
    <section id="menu-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#800000]/30 text-[#e9c349] px-4 py-1.5 rounded-full border border-[#e9c349]/30 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#e9c349]" />
          Freshly Cooked &amp; Spiced
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#f9f6ee]">
          Our Authentic Menu
        </h2>
        <p className="text-xs sm:text-sm text-[#e2bfb9] max-w-xl mx-auto mt-2">
          Explore our wide range of biryanis, tandoori kababs, starters, curries, and breads. Bulk &amp; catering orders welcome for groups of 20 to 100+ members!
        </p>
      </div>

      {/* Search & Dietary Filters Control Bar */}
      <div className="bg-[#20201b] rounded-2xl p-4 mb-6 shadow-xl border border-[#af8d11]/30 flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Chicken Biryani, Paneer 65..."
            className="w-full bg-[#13140f] text-[#e5e2db] placeholder-[#e5e2db]/50 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#e9c349] text-sm"
          />
          <Search className="w-4 h-4 text-[#e9c349] absolute left-3.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#e5e2db]/60 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Dietary Filters Toggle */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto pb-1 md:pb-0">
          <Filter className="w-4 h-4 text-[#e9c349] shrink-0 mr-1 hidden sm:block" />
          
          {[
            { id: 'all', label: 'All Items' },
            { id: 'veg', label: '🟢 Veg Only' },
            { id: 'nonveg', label: '🔴 Non-Veg' },
            { id: 'vegan', label: '🌱 Vegan' },
            { id: 'gluten-free', label: '🌾 Gluten-Free' },
            { id: 'nut-free', label: '🥜 Nut-Free' },
          ].map((df) => (
            <button
              key={df.id}
              onClick={() => setDietaryFilter(df.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                dietaryFilter === df.id
                  ? 'bg-[#e9c349] text-[#13140f] font-bold shadow-md'
                  : 'bg-[#2a2a25] text-[#e5e2db]/80 hover:bg-[#353530]'
              }`}
            >
              {df.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs Scrollbar */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-4 mb-8 snap-x">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`snap-start shrink-0 px-5 py-2.5 rounded-full font-serif-title font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-[#800000] to-[#b22b1d] text-[#ffe088] border border-[#e9c349] shadow-[0_4px_12px_rgba(128,0,0,0.5)]'
                : 'bg-[#2a2a25] text-[#e5e2db]/80 hover:bg-[#353530] hover:text-[#e9c349]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px] text-[#e9c349]">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#20201b] rounded-2xl p-12 text-center border border-white/10">
          <p className="text-lg font-bold text-[#e2bfb9]">No dishes match your search/filter criteria.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setDietaryFilter('all');
            }}
            className="mt-4 px-6 py-2 bg-[#e9c349] text-[#13140f] font-bold rounded-xl text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const selectedSize = selectedSizeMap[item.id] || (item.priceOptions ? item.priceOptions[0].size : '');
            const currentPrice = item.priceOptions
              ? item.priceOptions.find((o) => o.size === selectedSize)?.price || item.price
              : item.price;

            return (
              <div
                key={item.id}
                className="bg-[#20201b] rounded-2xl overflow-hidden border border-[#af8d11]/20 hover:border-[#e9c349]/60 transition-all duration-300 shadow-xl flex flex-col group relative"
              >
                {/* Bestseller Badge */}
                {item.isBestseller && (
                  <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-[#800000] to-[#b22b1d] text-[#ffe088] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#e9c349]/40 shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#e9c349] fill-[#e9c349]" />
                    Bestseller
                  </div>
                )}

                {/* Veg / Non-Veg Badge Indicator */}
                <div className="absolute top-3 right-3 z-20 bg-[#13140f]/90 backdrop-blur p-1 rounded-md shadow-md border border-white/10">
                  {item.isVeg ? (
                    <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center p-0.5 rounded-sm">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border-2 border-[#800000] flex items-center justify-center p-0.5 rounded-sm">
                      <div className="w-2 h-2 rounded-full bg-[#800000]"></div>
                    </div>
                  )}
                </div>

                {/* Realistic Food Thumbnail Image */}
                <div className="h-52 w-full relative overflow-hidden bg-[#2a2a25]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20201b] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Card Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between -mt-6 relative z-10 bg-[#20201b] rounded-t-2xl">
                  <div>
                    <h3 className="font-serif-title font-bold text-xl text-[#f9f6ee] mb-1 group-hover:text-[#e9c349] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#e5e2db]/70 leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-[#2a2a25] text-[#e2bfb9] border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.serves && (
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-[#800000]/40 text-[#ffe088]">
                            {item.serves}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Price Options Selector (Mini, Plate, Handi, Family, Jumbo) */}
                    {item.priceOptions && item.priceOptions.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-4">
                        {item.priceOptions.map((opt) => (
                          <button
                            key={opt.size}
                            onClick={() => handleSizeSelect(item.id, opt.size)}
                            className={`px-2 py-1 rounded text-[10px] font-bold transition-all border flex justify-between items-center ${
                              selectedSize === opt.size
                                ? 'bg-[#800000] text-[#ffe088] border-[#e9c349]'
                                : 'bg-[#2a2a25] text-[#e5e2db]/80 border-white/10 hover:border-[#e9c349]/50'
                            }`}
                          >
                            <span>{opt.size}</span>
                            <span className="text-[#e9c349]">₹{opt.price}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Price & Add to Cart Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div>
                        <span className="text-xs text-[#e5e2db]/60 block uppercase font-semibold">
                          {item.priceOptions ? `Size: ${selectedSize}` : 'Price'}
                        </span>
                        <span className="font-serif-title text-xl font-extrabold text-[#e9c349]">
                          ₹{currentPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95 ${
                          addedItemAnimation === item.id
                            ? 'bg-green-600 text-white'
                            : 'bg-gradient-to-r from-[#e9c349] to-[#af8d11] text-[#13140f] hover:brightness-110'
                        }`}
                      >
                        {addedItemAnimation === item.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Added!
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bulk Order Banner Note */}
      <div className="mt-12 bg-gradient-to-r from-[#800000]/40 via-[#2a2a25] to-[#800000]/40 rounded-2xl p-6 border border-[#e9c349]/30 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-serif-title font-bold text-lg text-[#e9c349]">
            Planning a Wedding or Party in Shadnagar?
          </h3>
          <p className="text-xs sm:text-sm text-[#e5e2db]/80 mt-1">
            We deliver bulk biryani handis (Deghs) for gatherings of 20 to 100+ members with complete catering arrangements!
          </p>
        </div>
        <a
          href="tel:09666886613"
          className="px-6 py-3 bg-[#e9c349] text-[#13140f] font-bold rounded-xl text-xs sm:text-sm shrink-0 shadow-lg hover:bg-white transition-colors"
        >
          Call Bulk Orders: 096668 86613
        </a>
      </div>

    </section>
  );
};
