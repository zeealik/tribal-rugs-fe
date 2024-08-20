import { ReactNode } from 'react';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import WhatsAppChat from '@/components/ui/whatsapp-chat';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppChat />
    </>
  );
}
