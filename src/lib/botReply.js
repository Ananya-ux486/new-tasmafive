import { SITE } from '@/data/site';

const RULES = [
  [/(price|cost|rate|package|charges|₹|rs)/i, 'Website packages (India): Landing page ₹10k, Static site ₹15k, Dynamic site ₹30k, E-commerce ₹40k. Domain and hosting are included. Marketing, CRM and cloud work is quoted per requirement. Want a custom quote? Use the Contact page.'],
  [/(website|web|ecommerce|e-commerce|landing)/i, 'We build static sites, landing pages, dynamic sites with an admin panel, and e-commerce stores. See Services > Web Development for what each package includes.'],
  [/(seo|audit|google|gmb|marketing|ads|social)/i, 'Our digital marketing covers SEO (with a free audit report), Google & Meta Ads, social media promotion, Google My Business ranking, graphic design and verified listings. Ask for the free audit on the Contact page.'],
  [/(crm|lead|hr|ticket|support desk)/i, 'Our CRM has six modules: lead management, service desk, client management, HR, email management and a finance dashboard. Pricing is scoped to your workflow.'],
  [/(cloud|aws|azure|hosting|migration)/i, 'We set up, migrate and manage AWS and Azure environments, including auto scaling, CDN, CI/CD and security policies.'],
  [/(gov|government|tender|bid|department)/i, 'We support government and public-sector IT work: portals, e-governance software, cloud hosting and digitisation. See the Government page, and sign in to view our certificates.'],
  [/(certificate|iso|gst|udyam|startup)/i, 'We hold Startup India recognition, ISO 9001:2015, GST and Udyam registrations. Sign in and open the Certificates page to view them.'],
  [/(pay|payment|invoice)/i, 'Use the Pay Now button at the top. You will need to sign in first.'],
  [/(contact|call|phone|email|address|office|whatsapp|time|hours)/i, `Call ${SITE.phones[0]} or email ${SITE.email}. Office: ${SITE.address}. Hours: ${SITE.hours}.`],
  [/(hi|hello|hey|namaste)/i, 'Hello! I can help with services, pricing, certificates or contacting our team. What do you need?'],
];

export function botReply(text) {
  for (const [re, answer] of RULES) if (re.test(text)) return answer;
  return `I'm not sure about that one. Our team can help directly: call ${SITE.phones[0]} or use the Contact page.`;
}
