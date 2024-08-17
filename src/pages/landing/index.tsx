import Hero from '@/components/landing/hero-section';
import Features from '@/components/ui/description-product';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navigation-bar';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
