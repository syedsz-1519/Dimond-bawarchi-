import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { CategoryId, MenuItem } from '../types';
import { Search, Flame, Plus, Check, Filter, Sparkles, Utensils } from 'lucide-react';

type DietaryKey = 'veg' | 'nonveg' | 'spicy' | 'gluten-free' | 'vegan' | 'nut-free' | 'bestseller';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, selectedSize?: string, selectedPrice?: number) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDietaryFilters, setActiveDietaryFilters] = useState<DietaryKey[]>([]);
  const [selectedSizeMap, setSelectedSizeMap] = useState<Record<string, string>>({});
  const [addedItemAnimation, setAddedItemAnimation] = useState<string | null>(null);

  const categories: { id: CategoryId; label: string; icon: any }[] = [
    { id: 'all', label: 'All Menu', icon: Utensils },
    { id: 'biryani', label: 'Biryani Specials', icon: Flame },
    { id: 'starters', label: 'Starters', icon: Sparkles },
    { id: 'curries', label: 'Curries & Gravies', icon: Utensils },
    { id: 'kababs', label: 'Tandoori Kababs', icon: Flame },
    { id: 'rotis', label: 'Rotis & Naan', icon: Utensils },
    { id: 'rice_noodles', label: 'Fried Rice & Noodles', icon: Utensils },
    { id: 'soups', label: 'Soups', icon: Utensils },
    { id: 'combos', label: 'Combo Platters', icon: Sparkles },
  ];

  const dietaryOptions: { id: DietaryKey; label: string; icon: string }[] = [
    { id: 'veg', label: 'Vegetarian', icon: '🟢' },
    { id: 'nonveg', label: 'Non-Veg', icon: '🔴' },
    { id: 'spicy', label: 'Spicy', icon: '🌶️' },
    { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
    { id: 'vegan', label: 'Vegan', icon: '🌱' },
    { id: 'nut-free', label: 'Nut-Free', icon: '🥜' },
    { id: 'bestseller', label: 'Bestseller', icon: '🔥' },
  ];

  const toggleDietaryFilter = (key: DietaryKey) => {
    setActiveDietaryFilters((prev) => {
      if (prev.includes(key)) {
        return prev.filter((k) => k !== key);
      } else {
        let next = [...prev];
        if (key === 'veg') {
          next = next.filter((k) => k !== 'nonveg');
        } else if (key === 'nonveg') {
          next = next.filter((k) => k !== 'veg');
        }
        return [...next, key];
      }
    });
  };

  const clearAllFilters = () => {
    setActiveDietaryFilters([]);
    setSearchQuery('');
    setActiveCategory('all');
  };

  const handleSizeSelect = (itemId: string, sizeName: string) => {
    setSelectedSizeMap((prev) => ({ ...prev, [itemId]: sizeName }));
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }
    if (activeDietaryFilters.includes('veg') && !item.isVeg) return false;
    if (activeDietaryFilters.includes('nonveg') && item.isVeg) return false;
    if (activeDietaryFilters.includes('spicy') && !item.isSpicy) return false;
    if (activeDietaryFilters.includes('gluten-free') && !item.tags?.includes('gluten-free')) return false;
    if (activeDietaryFilters.includes('vegan') && (!item.tags?.includes('vegan') || !item.isVeg)) return false;
    if (activeDietaryFilters.includes('nut-free') && !item.tags?.includes('nut-free')) return false;
    if (activeDietaryFilters.includes('bestseller') && !item.isBestseller) return false;

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

    setAddedItemAnimation(item.id);
    setTimeout(() => setAddedItemAnimation(null), 1000);
  };

  return (
    <section id="menu-section" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-1.5 rounded-full border border-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-blue-700" />
          Freshly Cooked &amp; Spiced
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-slate-900">
          Our Authentic Menu
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
          Explore our wide range of biryanis, tandoori kababs, starters, curries, and breads. Bulk &amp; catering orders welcome for groups of 20 to 100+ members!
        </p>
      </div>

      {/* Interactive Preference & Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 mb-6 shadow-sm border border-slate-200 space-y-4">
        
        {/* Search Bar & Reset */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Chicken Biryani, Paneer 65, Naan..."
              className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm"
            />
            <Search className="w-4 h-4 text-blue-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Results Count & Clear All */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
            <div className="text-slate-600 font-medium bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
              Showing <span className="font-bold text-blue-900">{filteredItems.length}</span> dish{filteredItems.length === 1 ? '' : 'es'}
            </div>

            {(activeDietaryFilters.length > 0 || searchQuery !== '' || activeCategory !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="text-blue-700 hover:text-blue-900 underline font-semibold transition-colors px-2 py-1"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Dietary Preferences Filter Bar */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-serif-title font-bold text-slate-900 uppercase tracking-wider">
              Dietary Preferences &amp; Tags
            </span>
            {activeDietaryFilters.length > 0 && (
              <span className="bg-blue-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                {activeDietaryFilters.length} Active
              </span>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 snap-x">
            {dietaryOptions.map((opt) => {
              const isActive = activeDietaryFilters.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => toggleDietaryFilter(opt.id)}
                  className={`snap-start shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                    isActive
                      ? 'bg-blue-900 text-white font-extrabold border border-blue-800 shadow'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <span className="text-sm">{opt.icon}</span>
                  <span>{opt.label}</span>
                  {isActive && <Check className="w-3.5 h-3.5 stroke-[3] ml-0.5 text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Category Tabs Scrollbar */}
      <div className="flex gap-2 overflow-x-auto scrollbar-none pb-4 mb-8 snap-x">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-start shrink-0 px-5 py-2.5 rounded-full font-serif-title font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm ${
                isActive
                  ? 'bg-blue-900 text-white border border-blue-800 shadow-md font-extrabold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-900'
              }`}
            >
              <IconComp className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-blue-700'}`} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <p className="text-lg font-bold text-slate-700">No dishes match your search/filter criteria.</p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-6 py-2 bg-blue-900 text-white font-bold rounded-xl text-xs hover:bg-blue-800 transition-colors"
          >
            Reset All Filters
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col group relative"
              >
                {/* Bestseller Badge */}
                {item.isBestseller && (
                  <div className="absolute top-3 left-3 z-20 bg-blue-900 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-blue-800 shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                    Bestseller
                  </div>
                )}

                {/* Top Right Badges: Spicy & Veg / Non-Veg */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                  {item.isSpicy && (
                    <div className="bg-white/95 backdrop-blur px-2 py-0.5 rounded-md shadow-sm border border-slate-200 text-[10px] font-bold text-slate-800 flex items-center gap-0.5">
                      🌶️ <span className="hidden sm:inline">Spicy</span>
                    </div>
                  )}

                  <div className="bg-white/95 backdrop-blur p-1 rounded-md shadow-sm border border-slate-200" title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}>
                    {item.isVeg ? (
                      <div className="w-4 h-4 border-2 border-emerald-600 flex items-center justify-center p-0.5 rounded-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      </div>
                    ) : (
                      <div className="w-4 h-4 border-2 border-red-700 flex items-center justify-center p-0.5 rounded-sm">
                        <div className="w-2 h-2 rounded-full bg-red-700"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Food Thumbnail Image */}
                <div className="h-52 w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
                </div>

                {/* Card Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between -mt-6 relative z-10 bg-white rounded-t-2xl">
                  <div>
                    <h3 className="font-serif-title font-bold text-xl text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 font-normal">
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
                            className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.serves && (
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                            {item.serves}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Price Options Selector */}
                    {item.priceOptions && item.priceOptions.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-4">
                        {item.priceOptions.map((opt) => (
                          <button
                            key={opt.size}
                            onClick={() => handleSizeSelect(item.id, opt.size)}
                            className={`px-2 py-1 rounded text-[10px] font-bold transition-all border flex justify-between items-center ${
                              selectedSize === opt.size
                                ? 'bg-blue-900 text-white border-blue-800 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                            }`}
                          >
                            <span>{opt.size}</span>
                            <span className={selectedSize === opt.size ? 'text-amber-400' : 'text-blue-800'}>₹{opt.price}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Price & Add to Cart Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-xs text-slate-500 block uppercase font-semibold">
                          {item.priceOptions ? `Size: ${selectedSize}` : 'Price'}
                        </span>
                        <span className="font-serif-title text-xl font-extrabold text-blue-900">
                          ₹{currentPrice}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                          addedItemAnimation === item.id
                            ? 'bg-emerald-600 text-white'
                            : 'bg-blue-900 text-white hover:bg-blue-800 border border-blue-800'
                        }`}
                      >
                        {addedItemAnimation === item.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Added!
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-amber-400" />
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
      <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 rounded-2xl p-6 border border-blue-800 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-white shadow-md">
        <div>
          <h3 className="font-serif-title font-bold text-lg text-amber-400">
            Planning a Wedding or Party in Shadnagar?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            We deliver bulk biryani handis (Deghs) for gatherings of 20 to 100+ members with complete catering arrangements!
          </p>
        </div>
        <a
          href="tel:09666886613"
          className="px-6 py-3 bg-white text-blue-950 font-extrabold rounded-xl text-xs sm:text-sm shrink-0 shadow-md hover:bg-blue-50 transition-colors"
        >
          Call Bulk Orders: 096668 86613
        </a>
      </div>

    </section>
  );
};

