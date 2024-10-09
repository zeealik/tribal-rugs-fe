import ImageCarousel from '@/components/ui/image-carousel';
import MainLayout from '@/layouts/main-layout';
import GallerySection from '@/components/ui/sections/gallery-section';
import Rug1 from '@/assets/rugs/rug-1.webp';
import Rug2 from '@/assets/rugs/rug-2.webp';
import Rug3 from '@/assets/rugs/rug-3.webp';
import Rug4 from '@/assets/rugs/rug-4.webp';
import Rug5 from '@/assets/rugs/rug-5.webp';
import Rug6 from '@/assets/rugs/rug-6.webp';
import Rug8 from '@/assets/rugs/rug-8.webp';
import Rug9 from '@/assets/rugs/rug-9.webp';

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => (
  <picture>
    <source srcSet={`${src}?w=300`} media="(max-width: 600px)" />
    <source srcSet={`${src}?w=800`} media="(min-width: 601px)" />
    <img src={src} alt={alt} loading="lazy" className="w-full h-[300px] object-cover" />
  </picture>
);

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
];

const rugImages = [
  { image: Rug1, title: 'Persian & Irani Rugs', link: '/' },
  { image: Rug2, title: 'Turkish Traditional Rugs', link: '/' },
  { image: Rug3, title: 'Turkish Modern Rugs', link: '/' },
  { image: Rug4, title: 'Cowhide Rugs', link: '/' },
  { image: Rug5, title: 'Fur Rugs', link: '/' },
];

function LandingPage() {
  return (
    <MainLayout>
      <ImageCarousel
        images={images.map((img) => ({
          ...img,
          src: `${img.src}?w=800`,
        }))}
      />
      <GallerySection
        title="Rug Collections"
        images={rugImages.map((rug) => ({
          ...rug,
          image: <LazyImage src={rug.image} alt={rug.title} />,
        }))}
      />
    </MainLayout>
  );
}

export default LandingPage;
