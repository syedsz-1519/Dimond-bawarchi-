import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- BIRYANI CATEGORY ---
  {
    id: 'b1',
    name: 'Dum Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken, infused with saffron, ghee, and secret spices in a sealed handi.',
    category: 'biryani',
    price: 290,
    priceOptions: [
      { size: 'MINI', price: 220 },
      { size: 'PLATE', price: 290 },
      { size: 'HANDI', price: 350 },
      { size: 'FAMILY', price: 680 },
      { size: 'JUMBO', price: 850 },
    ],
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAce113dSKpMY_AWwG7A6H-GSNAlXkriALKSrIEwFdDrJ5Fm82wvUz20A49Cih17lDVurC3Re5B0XSJcLGpsmvaCacwllUN3S0TS8gU3iMj2FXEBsgDrRLKeB_4un8cGr5hmcbRrAfs33_yjB8jGfnSCraBSGMamJ_hVFz2MAkB8jJMBunYXYPfN6zdHsupFw-j4LPj-bwKWMVFgM_0tuxuxUpwnu2D1Leg6eNyDWHsoA8ZZinZBo5g',
    tags: ['gluten-free', 'nut-free'],
    serves: 'Available in Mini to Jumbo Packs'
  },
  {
    id: 'b2',
    name: 'Special Mutton Biryani',
    description: 'Succulent pieces of tender mutton marinated in rich yogurt and traditional Hyderabadi spices, slow dum-cooked with long grain basmati rice.',
    category: 'biryani',
    price: 340,
    priceOptions: [
      { size: 'MINI', price: 260 },
      { size: 'PLATE', price: 340 },
      { size: 'HANDI', price: 420 },
      { size: 'JUMBO', price: 850 },
    ],
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgPXNN6YcVkTe4loo5_xUVwaCm7eYueCdO7GJDS-a0DIpsOryQYhIiH2TPnW8ODcdM92HWfS00zB15ZzJRrL8-llKqdX1Wrd16nWSXAfpruCTkm7CmpjS1zxdCtsoidB5eWNl4KePd2uHJQZXwybhvfaGaSmZ286_tTUTwMe5pl_0bhI3lmip73VZBE2URxCrG_KAQ1RgDkVZU4EGdZBcOH2kBX9ZySHttmsZ_SSstt8fTelffyiz',
    tags: ['gluten-free'],
    serves: 'Available in Mini to Jumbo Packs'
  },
  {
    id: 'b3',
    name: 'Egg Biryani',
    description: 'Boiled eggs golden fried and simmered in a spiced masala layer, layered with fragrant saffron biryani rice.',
    category: 'biryani',
    price: 230,
    priceOptions: [
      { size: 'PLATE', price: 230 },
      { size: 'FAMILY', price: 520 },
    ],
    isVeg: false,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free', 'nut-free'],
    serves: 'Serves 1-2'
  },
  {
    id: 'b4',
    name: 'Prawns Biryani',
    description: 'Fresh juicy prawns marinated in coastal spices, slow-cooked with basmati rice and fried onions.',
    category: 'biryani',
    price: 380,
    priceOptions: [
      { size: 'PLATE', price: 380 },
      { size: 'FAMILY', price: 820 },
    ],
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 1-2'
  },
  {
    id: 'b5',
    name: 'Royal Kaju Paneer Biryani',
    description: 'Fresh cottage cheese cubes and whole roasted cashews tossed in rich gravy, dum-cooked with fragrant basmati.',
    category: 'biryani',
    price: 280,
    priceOptions: [
      { size: 'PLATE', price: 280 },
      { size: 'FAMILY', price: 620 },
    ],
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 1-2'
  },
  {
    id: 'b6',
    name: 'Special Mushroom Veg Biryani',
    description: 'Button mushrooms and garden vegetables infused with kewra water, mint, and whole biryani spices.',
    category: 'biryani',
    price: 240,
    priceOptions: [
      { size: 'PLATE', price: 240 },
      { size: 'FAMILY', price: 540 },
    ],
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free', 'nut-free'],
    serves: 'Serves 1-2'
  },

  // --- STARTERS CATEGORY ---
  {
    id: 's1',
    name: 'Chicken 65',
    description: 'Crispy deep-fried chicken bites tossed with fresh curry leaves, green chilies, and fiery South Indian red spice mix.',
    category: 'starters',
    price: 240,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-82Werx6mZWZ7JLoIR68VupOwL5iX8Z76N16IxgvZMVOs9TFA1ezXoG7lUSgZaGEZ2VnWx2wFcTdq_bQKCWKCVDXuFxsLvEdUMR-Mj4L97VYHCyA8Hwl3qU15LBGNNQ4DYEebAPjpLXcOuQXMoG_KOhIzTFSrCC-aT3zbAzmrkKav2Es1eUSDKRmeZ7sc5C7Vmju63jDc6EwQXirpO5czVKQ3Cidmpjh2BGt1aqMBnPn8l9MSYtNb',
    tags: ['nut-free'],
    serves: 'Serves 2'
  },
  {
    id: 's2',
    name: 'Paneer Majestic',
    description: 'Signature dry paneer strips marinated in yogurt, green chili paste, and turmeric, fried to perfection.',
    category: 'starters',
    price: 220,
    isVeg: true,
    isBestseller: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgpZ454povOspXgzEsZmE44IK6hOPQ68UGkoQ6muhAS9_VAMJ6wx0TdEJkiB1AhyBMb14_2EhdRoBaga4BAZPEhUC_iyCAZievlTpoS28aoMHKoA26-oAkVd8ukWHHLpFqfNY2fUIiQX_25NSH4cY_r6634jX_jEgHPK_mQwNqI7-iSSOChIut1x-7NhQnz0AZgimmX7j8axcmkfPWlRc_v8oF4wP5j8LkCNKn1_QPwg27oEXyJcwx',
    tags: ['gluten-free', 'nut-free'],
    serves: 'Serves 2'
  },
  {
    id: 's3',
    name: 'Chilli Paneer',
    description: 'Indo-Chinese classic paneer cubes tossed in rich garlic soy sauce with crisp bell peppers and onions.',
    category: 'starters',
    price: 210,
    isVeg: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH_E96Af1Ksn_ddMri0PjfucCPKRsMwWAjCoNqmdQvPtTV2AKLvN7RGNEXT4FGErWGUUIOSDVsttHq3_Rl_PdHyHARtbZfVtljUhxs4QBV00Pno9WwO-r0b87rB3ig_3voyr9e2KM-fzqs5pTeUrPYt7iVyGDBeaXhyl1Yfs1bSma-kDlV5JHbF4BKGYbudIhBJZcTI9mBwRqSH2oCSfEWFz0OFgQx9a77JM1PNXvI2X_FDevKNm1r',
    tags: ['nut-free'],
    serves: 'Serves 2'
  },
  {
    id: 's4',
    name: 'Chicken Lollipop',
    description: 'Crispy winged drumettes fried until golden brown, served with hot spicy garlic sauce.',
    category: 'starters',
    price: 260,
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['nut-free'],
    serves: '6 Pieces'
  },
  {
    id: 's5',
    name: 'Gobi Manchurian',
    description: 'Crispy cauliflower florets tossed in tangy ginger-garlic Manchurian sauce with spring onions.',
    category: 'starters',
    price: 180,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'nut-free'],
    serves: 'Serves 2'
  },
  {
    id: 's6',
    name: 'Mushroom 65',
    description: 'Crispy fried button mushrooms coated in aromatic South Indian spicy batter.',
    category: 'starters',
    price: 210,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'nut-free'],
    serves: 'Serves 2'
  },

  // --- KABAB & TANDOOR CATEGORY ---
  {
    id: 'k1',
    name: 'Tangdi Kabab',
    description: 'Juicy chicken drumsticks marinated in rich cream, cashew paste, and tandoori spices, char-grilled over clay oven.',
    category: 'kababs',
    price: 280,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: '3 Large Legs'
  },
  {
    id: 'k2',
    name: 'Chicken Tikka',
    description: 'Boneless chicken cubes marinated in spicy hung curd mix, skewered and roasted in clay tandoor.',
    category: 'kababs',
    price: 270,
    isVeg: false,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free', 'nut-free'],
    serves: '6 Pieces'
  },
  {
    id: 'k3',
    name: 'Malai Chicken Tikka',
    description: 'Melt-in-mouth chicken pieces coated in rich cream, cheese, and mild cardamom marinade.',
    category: 'kababs',
    price: 290,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: '6 Pieces'
  },

  // --- CURRIES CATEGORY ---
  {
    id: 'c1',
    name: 'Butter Chicken',
    description: 'Tandoori chicken pieces simmered in silky tomato, butter, and cashew cream gravy.',
    category: 'curries',
    price: 280,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 2'
  },
  {
    id: 'c2',
    name: 'Achari Chicken Curry',
    description: 'Spicy chicken curry infused with pickling spices, fennel seeds, and mustard oil for an tangy kick.',
    category: 'curries',
    price: 270,
    isVeg: false,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free', 'nut-free'],
    serves: 'Serves 2'
  },
  {
    id: 'c3',
    name: 'Paneer Butter Masala',
    description: 'Soft cottage cheese cubes cooked in rich tomato gravy topped with fresh cream and kasuri methi.',
    category: 'curries',
    price: 240,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 2'
  },
  {
    id: 'c4',
    name: 'Dal Tadka',
    description: 'Yellow lentils cooked soft and tempered with ghee, cumin seeds, garlic, and dried red chilies.',
    category: 'curries',
    price: 170,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'gluten-free', 'nut-free'],
    serves: 'Serves 2'
  },

  // --- ROTIS CATEGORY ---
  {
    id: 'r1',
    name: 'Butter Naan',
    description: 'Leavened flatbread baked in clay tandoor and brushed generously with salted butter.',
    category: 'rotis',
    price: 45,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    tags: ['nut-free'],
    serves: '1 Piece'
  },
  {
    id: 'r2',
    name: 'Garlic Butter Naan',
    description: 'Clay-oven naan topped with minced fresh garlic, coriander, and melted butter.',
    category: 'rotis',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['nut-free'],
    serves: '1 Piece'
  },
  {
    id: 'r3',
    name: 'Tandoori Roti',
    description: 'Whole wheat flatbread baked on the walls of traditional tandoor oven.',
    category: 'rotis',
    price: 25,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'nut-free'],
    serves: '1 Piece'
  },

  // --- SOUPS & RICE/NOODLES ---
  {
    id: 'n1',
    name: 'Chicken Fried Rice',
    description: 'Wok-tossed aromatic rice with tender shredded chicken, scrambled egg, and crisp vegetables.',
    category: 'rice_noodles',
    price: 210,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tags: ['nut-free'],
    serves: 'Serves 1-2'
  },
  {
    id: 'n2',
    name: 'Veg Soft Noodles',
    description: 'Classic Hakka noodles tossed with capsicum, cabbage, carrots, and dark soy sauce.',
    category: 'rice_noodles',
    price: 180,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['vegan', 'nut-free'],
    serves: 'Serves 1-2'
  },
  {
    id: 'sp1',
    name: 'Hot & Sour Chicken Soup',
    description: 'Tangy and spicy chicken broth packed with shredded vegetables, chilies, and egg drops.',
    category: 'soups',
    price: 130,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free', 'nut-free'],
    serves: '1 Bowl'
  },

  // --- COMBOS & SPECIAL PLATTERS ---
  {
    id: 'cb1',
    name: 'Diamond Special Grand Platter',
    description: 'Royal feast featuring Dum Chicken Biryani, Tangdi Kabab (2pcs), Chicken 65, Mirchi Ka Salan, Raita, Butter Naan, and Double Ka Meetha.',
    category: 'combos',
    price: 799,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 2-3 Members'
  },
  {
    id: 'cb2',
    name: 'Jail Mandi Family Platter',
    description: 'Authentic Arab style Mandi rice topped with juicy roasted chicken, dry fruits, fried onions, and salan gravy.',
    category: 'combos',
    price: 899,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['gluten-free'],
    serves: 'Serves 3-4 Members'
  }
];
