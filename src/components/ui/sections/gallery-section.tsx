import React from 'react';
import ImageCard from '../cards/image-card';

interface GallerySectionProps {
  title: string;
  images: { image: string; title: string; link: string }[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, images }) => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((imgData, index) => (
          <ImageCard key={index} {...imgData} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
