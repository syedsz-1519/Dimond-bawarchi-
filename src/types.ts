export type CategoryId = 
  | 'all'
  | 'biryani' 
  | 'starters' 
  | 'curries' 
  | 'soups' 
  | 'rice_noodles' 
  | 'rotis' 
  | 'kababs' 
  | 'combos';

export interface PriceOption {
  size: string; // e.g., 'MINI', 'PLATE', 'HANDI', 'FAMILY', 'JUMBO'
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  price: number; // default display price
  priceOptions?: PriceOption[];
  isVeg: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
  image: string;
  tags?: ('vegan' | 'gluten-free' | 'nut-free')[];
  serves?: string;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  sizeOption?: string;
  price: number;
  quantity: number;
  isVeg: boolean;
  image: string;
  specialInstructions?: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  members: number;
  price: number;
  isPopular?: boolean;
  items: string[];
  description: string;
  image?: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
  image: string;
  amenities: string[];
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  platform: 'Google' | 'Swiggy' | 'Justdial' | 'magicpin';
  comment: string;
  date: string;
  avatar?: string;
}

export type PageSection = 'home' | 'menu' | 'catering' | 'hotel' | 'gallery' | 'contact' | 'dashboard';

