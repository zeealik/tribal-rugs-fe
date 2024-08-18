import Features from '@/components/ui/description-product';
import Footer from '@/components/ui/footer';
import ImageCarousel from '@/components/ui/image-carousel';
import Navbar from '@/components/ui/navigation-bar';
import IraniRug1 from '@/assets/rugs/irani-rug-1.jpeg';
import IraniRug2 from '@/assets/rugs/irani-rug-2.jpeg';
import IraniRug3 from '@/assets/rugs/irani-rug-3.jpeg';

const images = [
  {
    src: IraniRug1,
    alt: 'First Slide',
  },
  {
    src: IraniRug2,
    alt: 'Second Slide',
  },
  {
    src: IraniRug3,
    alt: 'Third Slide',
  },
  // Add more images as needed
];

function LandingPage() {
  return (
    <div>
      <Navbar />
      <ImageCarousel images={images} />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
