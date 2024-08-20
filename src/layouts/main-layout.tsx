import { ReactNode } from 'react';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
