import { Review } from '../types';

export const PLATFORM_RATINGS = [
  { platform: 'Google', rating: 4.2, max: 5, totalReviews: '1,850+ reviews' },
  { platform: 'Swiggy', rating: 4.0, max: 5, totalReviews: '2,400+ orders' },
  { platform: 'magicpin', rating: 4.2, max: 5, totalReviews: '950+ vouchers' },
  { platform: 'Justdial', rating: 3.8, max: 5, totalReviews: '620+ ratings' },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mr. Ramesh Kumar',
    role: 'Wedding Reception Client',
    rating: 5,
    platform: 'Google',
    comment: 'We ordered the 100-member package for my daughter\'s wedding reception. The biryani was absolutely authentic, perfectly spiced, and the meat was incredibly tender. Our guests couldn\'t stop praising the food. Thank you, Diamond Bawarchi, for making our day memorable!',
    date: '1 week ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy_VZvaQqbEtpB8gLS1z7NCihMpUTx_v0fB8vyg3O797BbFTcFElD0t4RZI4qGGEp4puWIidXFecCVVWvN-YXbKzPpnb2mwD7VoknwMCeDcEUEfcy8NobcFj6Z3ot43R8uUnSQkoqPCbYe-83WZrM1b8noubyCrog-LLY3_mOatCWM5AdyxXnmZ-990tx7tuxlcL-aeEwId8u7Xql3-ssmt4YES_q6TlXBsd48KZp8-4wHlioYukzT'
  },
  {
    id: 'rev-2',
    author: 'Suresh Reddy',
    role: 'Local Resident & Regular Diner',
    rating: 5,
    platform: 'Swiggy',
    comment: 'Best Chicken Biryani in Shadnagar area! The masala ratio is spot on, and the handi pack feeds a family very comfortably. Quick delivery and piping hot food every single time.',
    date: '3 days ago'
  },
  {
    id: 'rev-3',
    author: 'Priya Sharma',
    role: 'Highway Traveler',
    rating: 4,
    platform: 'magicpin',
    comment: 'Stopped by on our way from Bengaluru to Hyderabad. Extremely clean ambiance, polite staff, and the Paneer Majestic starter was superb. Also rented a room for a short rest - very neat and AC worked great.',
    date: '2 weeks ago'
  },
  {
    id: 'rev-4',
    author: 'Md. Imran Khan',
    role: 'Corporate Event Organizer',
    rating: 5,
    platform: 'Google',
    comment: 'Booked their Diamond Banquet Hall for a company get-together for 150 members. Outstanding service, delicious Mutton Biryani, and smooth valet parking.',
    date: '1 month ago'
  }
];
