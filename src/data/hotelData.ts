import { HotelRoom } from '../types';

export const HOTEL_ROOMS: HotelRoom[] = [
  {
    id: 'room-deluxe',
    name: 'Deluxe AC Room',
    pricePerNight: 2499,
    description: 'Spacious air-conditioned comfort with king-size bed, luxury linen, modern bathroom, and fine dining room service right above Diamond Bawarchi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsOCfq4XCNyAsLWA7K4FfeElrykL-sY-gwPlW7FvfX34AMYfeDomeYWeZd70WeDf-WZyJD38WqzDCIGFHQZQNOZHQxp72FRyOHegwctl3Ljp25oGMEtodP3uqMLj16bz000VoXwrSxvFzj8BF51NjpZdkLk7q9lbkUszmmgsBaeDLpFWjAbIJLURjKAethD_KB2cRHUh5jOuZbjEF0jaMAWRzY8eS_5FsHhKgH-esIODUhC7FwIraJ',
    badge: 'Popular Choice',
    amenities: [
      'Split Air Conditioner',
      'High Speed Free WiFi',
      '43" Smart LED TV',
      '24/7 Hot & Cold Water',
      'Complimentary Bottled Water',
      'Express Room Service'
    ]
  },
  {
    id: 'room-suite',
    name: 'Executive Family Suite',
    pricePerNight: 3999,
    description: 'Enhanced luxury featuring a master bedroom with plush king bed, separate seating lounge, mini fridge, and extra guest capacity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsOCfq4XCNyAsLWA7K4FfeElrykL-sY-gwPlW7FvfX34AMYfeDomeYWeZd70WeDf-WZyJD38WqzDCIGFHQZQNOZHQxp72FRyOHegwctl3Ljp25oGMEtodP3uqMLj16bz000VoXwrSxvFzj8BF51NjpZdkLk7q9lbkUszmmgsBaeDLpFWjAbIJLURjKAethD_KB2cRHUh5jOuZbjEF0jaMAWRzY8eS_5FsHhKgH-esIODUhC7FwIraJ',
    badge: 'Luxury Suite',
    amenities: [
      'Living Lounge Area',
      'Mini Fridge & Refreshments',
      '24/7 Dedicated Butler Service',
      'Complimentary Breakfast',
      '50" 4K Smart TV',
      'Valet Parking Included'
    ]
  }
];
