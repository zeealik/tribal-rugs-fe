import ImageCarousel from '@/components/ui/image-carousel';
import MainLayout from '@/layouts/main-layout';
import GallerySection from '@/components/ui/sections/gallery-section';
import Rug1 from '@/assets/rugs/rug-1.png';
import Rug2 from '@/assets/rugs/rug-2.png';
import Rug3 from '@/assets/rugs/rug-3.png';
import Rug4 from '@/assets/rugs/rug-4.png';
import Rug5 from '@/assets/rugs/rug-5.png';
import Rug6 from '@/assets/rugs/rug-6.png';
import Rug9 from '@/assets/rugs/rug-9.png';
import Rug8 from '@/assets/rugs/rug-8.png';

const images = [
  {
    src: Rug8,
    alt: 'First Slide',
  },
  {
    src: Rug6,
    alt: 'Second Slide',
  },
  {
    src: Rug9,
    alt: 'Third Slide',
  },
  // Add more images as needed
];

const rugImages = [
  { image: Rug1, title: 'Persian & Irani Rugs', link: '/' },
  { image: Rug2, title: 'Turkish Traditional Rugs', link: '/' },
  { image: Rug3, title: 'Turkish Modern Rugs', link: '/' },
  { image: Rug4, title: 'Cowhide Rugs', link: '/' },
  { image: Rug5, title: 'Fur Rugs', link: '/' },
  // Add more images as needed
];

function LandingPage() {
  return (
    <MainLayout>
      <ImageCarousel images={images} />
      <GallerySection title="Rug Collections" images={rugImages} />
    </MainLayout>
  );
}

export default LandingPage;
