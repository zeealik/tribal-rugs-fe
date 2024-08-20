import Features from '@/components/ui/description-product';
import ImageCarousel from '@/components/ui/image-carousel';
import IraniRug1 from '@/assets/rugs/irani-rug-1.jpeg';
import IraniRug2 from '@/assets/rugs/irani-rug-2.jpeg';
import IraniRug3 from '@/assets/rugs/irani-rug-3.jpeg';
import MainLayout from '@/layouts/main-layout';

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
    <MainLayout>
      <ImageCarousel images={images} />
      <Features />
    </MainLayout>
  );
}

export default LandingPage;
