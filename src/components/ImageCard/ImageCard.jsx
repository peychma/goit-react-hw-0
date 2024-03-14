import React from 'react';
import css from "./ImageCard.module.css"

const ImageCard = ({ imageUrl, altText }) => {
  return (
    <div className={css.imagediv}>
      <img className={css.image} src={imageUrl} alt={altText} />
    </div>
  );
}

export default ImageCard;
