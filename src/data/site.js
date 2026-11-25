import kanpurImage from '../../assets/kanpur.jpg';
import haryanaImage from '../../assets/haryana.webp';

export const SITE = {
  name: 'TasmaFive Solutions',
  legal: 'TasmaFive Solutions LLP',
  tagline: 'Smart IT · Real Growth',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tasmafivesolutions.com',
  email: 'info@tasmafivesolutions.com',
  phones: ['+91-6307558730', '+91-9818272320'],
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '916307558730',
  address: '60/43 Nayaganj, Kanpur Nagar (UP) 208001',
  hours: 'Mon–Sat · 10 AM – 7 PM IST',
  social: {
    instagram: 'https://www.instagram.com/tasmafivesolutions?utm_source=qr&igsh=MWtocGlhdjI3OXp6YQ==',
    linkedin: 'https://www.linkedin.com/company/tasmafive-solution-llp/',
    facebook: 'https://www.facebook.com/share/1cVgJ6m1DL/',
  },
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'CRM Solutions', href: '/services/crm' },
      { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { label: 'Government Solutions', href: '/government' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

export const PROTECTED_PATHS = ['/projects', '/certificates', '/payment'];

export const INDIA_PRESENCE = [
  { city: 'Kanpur',   place: 'JK Temple (Radhakrishna Mandir)',  img: kanpurImage },
  { city: 'Delhi NCR', place: 'India Gate & Kartavya Path',      img: '/cities/delhi.jpg'   },
  { city: 'Gurgaon',  place: 'Gurugram Skyline & Cyber City',    img: '/cities/gurgaon.jpg' },
  { city: 'Noida',    place: 'Sector 18 & DLF Mall of India',    img: '/cities/noida.jpg'   },
  { city: 'Haryana',  place: 'Pinjore Gardens (Yadavindra Gardens)', img: haryanaImage },
];

export const WORLD_PRESENCE = [
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Germany', code: 'de' },
  { name: 'UAE', code: 'ae' },
  { name: 'Australia', code: 'au' },
  { name: 'Lebanon', code: 'lb' },
  { name: 'Egypt', code: 'eg' },
  { name: 'Dominican Republic', code: 'do' },
];

export const TECH = [
  { name: 'Next.js',         logo: '/logos/nextjs.svg',      bg: '#000000', light: false },
  { name: 'React',           logo: '/logos/react.svg',       bg: '#20232a', light: false },
  { name: 'Node.js',         logo: '/logos/nodejs.svg',      bg: '#f0fdf0', light: true  },
  { name: 'MongoDB',         logo: '/logos/mongodb.svg',     bg: '#f0fdf4', light: true  },
  { name: 'Laravel',         logo: '/logos/laravel.svg',     bg: '#fff5f5', light: true  },
  { name: 'MySQL',           logo: '/logos/mysql.svg',       bg: '#f0f7ff', light: true  },
  { name: 'AWS',             logo: '/logos/aws.svg',         bg: '#fff8ee', light: true  },
  { name: 'Microsoft Azure', logo: '/logos/azure.svg',       bg: '#eff6ff', light: true  },
  { name: 'Docker',          logo: '/logos/docker.svg',      bg: '#eff9ff', light: true  },
  { name: 'WordPress',       logo: '/logos/wordpress.svg',   bg: '#f0f7ff', light: true  },
  { name: 'Tailwind',        logo: '/logos/tailwind.svg',    bg: '#f0fdff', light: true  },
  { name: 'Google Cloud',    logo: '/logos/googlecloud.svg', bg: '#f8f8ff', light: true  },
];

export const INDUSTRIES = [
  'Real Estate', 'Education', 'Doctor / Hospital', 'Travel', 'E-commerce', 'Manufacturing',
  'Gym & Fitness', 'Logistics', 'Automobile', 'IT & Software', 'Hotel & Restaurants', 'Fashion',
];
