import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageCallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
          <li key={index}>
            <div>
              <ImageCard
                imageUrl={image.urls.regular}
                altText={image.alt_description}
                onClick={openModal}
              />
            </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
