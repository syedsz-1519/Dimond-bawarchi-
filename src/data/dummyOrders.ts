// TODO: PRODUCTION — replace with Supabase database schema & TypeScript models

export interface OrderItem {
  name: string;
  portion?: string;
  qty: number;
  price: number;
}

export type OrderFulfillment = 'takeaway' | 'dine-in' | 'delivery';
export type OrderStatus = 'received' | 'preparing' | 'out_for_delivery' | 'delivered';

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  fulfillment: OrderFulfillment;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string; // ISO timestamp
}

// TODO: PRODUCTION — replace with live orders fetched from Supabase database table `orders`
export const DUMMY_ORDERS: Order[] = [
  {
    id: 'ORD-1008',
    customerName: 'Rajesh Verma',
    phone: '0955098765',
    address: 'Bypass NH-44 Toll Plaza Office, Shadnagar',
    fulfillment: 'delivery',
    items: [
      { name: 'Dum Chicken Biryani', portion: 'JUMBO', qty: 1, price: 850 },
      { name: 'Chicken Majestic', qty: 2, price: 290 }
    ],
    total: 1430,
    status: 'received',
    createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString() // 2 mins ago
  },
  {
    id: 'ORD-1001',
    customerName: 'Suresh Reddy',
    phone: '0987654321',
    address: 'Plot 42, Highway Colony, Shadnagar',
    fulfillment: 'delivery',
    items: [
      { name: 'Dum Chicken Biryani', portion: 'HANDI', qty: 2, price: 350 },
      { name: 'Chicken 65', qty: 1, price: 280 },
      { name: 'Double Ka Meetha', qty: 2, price: 90 }
    ],
    total: 1160,
    status: 'received',
    createdAt: new Date(Date.now() - 6 * 60 * 1000).toISOString() // 6 mins ago
  },
  {
    id: 'ORD-1002',
    customerName: 'Mohammed Ismail',
    phone: '0966681234',
    address: 'Counter Pickup - Takeaway',
    fulfillment: 'takeaway',
    items: [
      { name: 'Special Mutton Biryani', portion: 'FAMILY', qty: 1, price: 850 },
      { name: 'Butter Naan', qty: 4, price: 45 },
      { name: 'Butter Chicken Curry', qty: 1, price: 320 }
    ],
    total: 1350,
    status: 'preparing',
    createdAt: new Date(Date.now() - 18 * 60 * 1000).toISOString() // 18 mins ago
  },
  {
    id: 'ORD-1003',
    customerName: 'Anil Kumar',
    phone: '0868889999',
    address: 'Table #4 - Main AC Dining',
    fulfillment: 'dine-in',
    items: [
      { name: 'Chicken Mandi Platter', portion: 'JUMBO', qty: 1, price: 990 },
      { name: 'Paneer 65', qty: 1, price: 240 },
      { name: 'Sweet Lassi', qty: 3, price: 70 }
    ],
    total: 1440,
    status: 'preparing',
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString() // 25 mins ago
  },
  {
    id: 'ORD-1004',
    customerName: 'Priya Sharma',
    phone: '0944011223',
    address: 'Flat 302, Sai Residency, Station Road, Shadnagar',
    fulfillment: 'delivery',
    items: [
      { name: 'Veg Dum Biryani', portion: 'HANDI', qty: 1, price: 290 },
      { name: 'Paneer Tikka Kabab', qty: 1, price: 260 },
      { name: 'Gulab Jamun', qty: 2, price: 60 }
    ],
    total: 670,
    status: 'out_for_delivery',
    createdAt: new Date(Date.now() - 38 * 60 * 1000).toISOString() // 38 mins ago
  },
  {
    id: 'ORD-1005',
    customerName: 'K. Venkat Rao',
    phone: '0970123456',
    address: 'Counter Pickup - Takeaway',
    fulfillment: 'takeaway',
    items: [
      { name: 'Dum Chicken Biryani', portion: 'PLATE', qty: 3, price: 290 },
      { name: 'Apollo Fish', qty: 1, price: 340 }
    ],
    total: 1210,
    status: 'delivered',
    createdAt: new Date(Date.now() - 52 * 60 * 1000).toISOString() // 52 mins ago
  },
  {
    id: 'ORD-1006',
    customerName: 'Dr. Ramesh Goud',
    phone: '0984908877',
    address: 'Government Hospital Road, Shadnagar',
    fulfillment: 'delivery',
    items: [
      { name: 'Special Mutton Biryani', portion: 'HANDI', qty: 2, price: 420 },
      { name: 'Tandoori Chicken (Full)', qty: 1, price: 480 },
      { name: 'Roti', qty: 6, price: 25 }
    ],
    total: 1470,
    status: 'delivered',
    createdAt: new Date(Date.now() - 75 * 60 * 1000).toISOString() // 75 mins ago
  },
  {
    id: 'ORD-1007',
    customerName: 'Fatima Begum',
    phone: '0912345678',
    address: 'Table #8 - Jail Mandi Room',
    fulfillment: 'dine-in',
    items: [
      { name: 'Juicy Mutton Mandi', portion: 'FAMILY', qty: 1, price: 1250 },
      { name: 'Chicken Soup', qty: 4, price: 120 }
    ],
    total: 1730,
    status: 'delivered',
    createdAt: new Date(Date.now() - 95 * 60 * 1000).toISOString() // 95 mins ago
  }
];
