import React from 'react';

interface ImageCardProps {
  image: string;
  title: string;
  link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, link }) => {
  return (
    <a href={link} className="block group">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-center text-lg font-medium">{title}</h3>
    </a>
  );
};

export default ImageCard;
