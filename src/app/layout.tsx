import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import RevealInit from '@/components/RevealInit';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Studio5 Architects — Designing Spaces Where Humanity Can Thrive',
    template: '%s — Studio5 Architects',
  },
  description:
    'Studio5 Architects is a registered architectural practice delivering design excellence across Zimbabwe. Architecture that expresses purpose.',
  keywords: ['architecture', 'Zimbabwe', 'Harare', 'architectural design', 'Studio5'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans">
        <Navbar />
        <RevealInit />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ChatWidget />
      </body>
    </html>
  );
}
