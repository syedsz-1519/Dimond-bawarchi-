import { CateringPackage } from '../types';

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'cat-20',
    name: 'Intimate Gathering Package',
    members: 20,
    price: 4999,
    description: 'Ideal for house parties, birthday celebrations, and small family reunions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5D35suxJbFoV7XZRJH5zGUjBP6Y0rk82Hvd9ckGc6PDQ_-TdHUCFtA0wi0Mspc5hwhk9Ssoshy12uCurS-9YrcEIXl8Ksx66rBLXdHsW2pweuYCH-NVKfCgLvyTUnteVxfO2hSgNXwXZps4AyZ7gQonh9AkK-vFP4pxlADJYRpawkZRm1bMNnTgzXr_SJP865VDlRvYyf7EQYL3AvYjZ2Ustt3jJehZOztU7GHFKId999B4VBTlBj',
    items: [
      '4 kg Signature Dum Chicken or Mutton Biryani',
      'Authentic Mirchi Ka Salan (2 Ltrs)',
      'Fresh Cucumber & Mint Raita (2 Ltrs)',
      'Garden Fresh Salad & Onion Lemon Platter',
      'Disposables, Plates & Cutlery Kit'
    ]
  },
  {
    id: 'cat-50',
    name: 'Festive Celebration Package',
    members: 50,
    price: 11999,
    isPopular: true,
    description: 'Our most popular package for engagement functions, corporate lunches, and anniversary events.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5D35suxJbFoV7XZRJH5zGUjBP6Y0rk82Hvd9ckGc6PDQ_-TdHUCFtA0wi0Mspc5hwhk9Ssoshy12uCurS-9YrcEIXl8Ksx66rBLXdHsW2pweuYCH-NVKfCgLvyTUnteVxfO2hSgNXwXZps4AyZ7gQonh9AkK-vFP4pxlADJYRpawkZRm1bMNnTgzXr_SJP865VDlRvYyf7EQYL3AvYjZ2Ustt3jJehZOztU7GHFKId999B4VBTlBj',
    items: [
      '10 kg Signature Dum Biryani in Traditional Degh',
      'Complimentary Starter Platter (Chicken 65 / Paneer 65)',
      'Mirchi Ka Salan & Creamy Mint Raita',
      'Double Ka Meetha or Gulab Jamun Dessert',
      'Complete Buffet Counter Setup & On-site Staff Options'
    ]
  },
  {
    id: 'cat-100',
    name: 'Grand Banquet Package',
    members: 100,
    price: 22999,
    description: 'Grand scale feast tailored for grand weddings, receptions, and major milestone events.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHRsSzUUDWxikEF303zzatB0-0LOlMsvdbo9ygn0F-WhFX3cXa-WIyt9T21ktX6zkTF_kijJYhaXk5EpbBRLFmWrEjlHb5CDuXztoHKgcwJNPrlpV2VKUC8_23pgd_xB-DuouzAQmOZggE6x2TOKXjg8MdEqcR1DFJOqwssB7II54Q8PLTRLUrcMA7TfgYzjr4eLE10DizI4TXaff1ozQGmN1RbBOTpP1fIZ9vLtxQAcqvtBLjAUIR',
    items: [
      '20 kg Signature Dum Biryani (2 Large Copper Deghs)',
      'Choice of 2 Starters (Chicken 65 & Paneer Majestic)',
      'Choice of 2 Desserts (Double Ka Meetha & Shahi Tukda)',
      'Unlimited Salan, Raita, Salad & Papad Bar',
      'Dedicated Catering Manager & Uniformed Service Personnel'
    ]
  }
];
