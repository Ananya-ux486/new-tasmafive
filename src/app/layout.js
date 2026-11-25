import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import ChatBot from '@/components/ChatBot';
import TawkTo from '@/components/TawkTo';
import TopBar from '@/components/TopBar';
import { SITE } from '@/data/site';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'TasmaFive Solutions | Smart IT Solutions for Digital Growth', template: '%s | TasmaFive Solutions' },
  description: 'Professional IT company in Kanpur providing website development, software solutions, digital marketing, cloud solutions and government project services.',
  keywords: ['TasmaFive Solutions', 'web development', 'IT company Kanpur', 'digital marketing', 'CRM', 'cloud solutions', 'government IT services'],
  openGraph: { title: 'TasmaFive Solutions', description: SITE.tagline, url: SITE.url, siteName: SITE.name, type: 'website' },
  icons: { icon: '/brand/logo.png' },
};

export const viewport = { themeColor: '#ffffff', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <AuthProvider>
          <TopBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingSocials />
          <ChatBot />
          <TawkTo />
        </AuthProvider>
      </body>
    </html>
  );
}
