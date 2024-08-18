import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the type for the image prop
interface Image {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

interface ImageCarouselProps {
  images: Image[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative w-full">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[550px]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white">
              {image.title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h2>
              )}
              {image.subtitle && <p className="text-xl md:text-2xl mb-4">{image.subtitle}</p>}
              {image.description && <p className="text-lg md:text-xl mb-4">{image.description}</p>}
              {/* <button className="bg-white text-black px-4 py-2 rounded-md">Shop Now</button> */}
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => slider?.slickPrev()}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => slider?.slickNext()}
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
};

export default ImageCarousel;
