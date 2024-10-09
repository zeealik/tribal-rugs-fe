import React from 'react';

interface ImageCardProps {
  image: React.ReactNode; // Accept ReactNode (string, JSX, etc.)
  title: string;
  link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, link }) => {
  return (
    <a href={link} className="block group">
      <div className="overflow-hidden rounded-lg shadow-md">
        {image} {/* Now we can pass a component (JSX.Element) */}
      </div>
      <h3 className="mt-2 text-center text-lg font-medium">{title}</h3>
    </a>
  );
};

export default ImageCard;
