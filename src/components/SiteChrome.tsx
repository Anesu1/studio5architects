'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import RevealInit from './RevealInit';

// Dynamically import ChatWidget to avoid SSR issues
import dynamic from 'next/dynamic';
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');

  if (isStudio) return <>{children}</>;

  return (
    <>
      <Navbar />
      <RevealInit />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  );
}
