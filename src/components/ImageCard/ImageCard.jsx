import React from 'react';
import css from "./ImageCard.module.css"

const ImageCard = ({ imageUrl, altText, onClick }) => {
  const handleClick = () => {
    onClick(imageUrl, altText);
  };

  return (
    <div className={css.imagediv}>
      <img className={css.image} src={imageUrl} alt={altText} onClick={handleClick}/>
    </div>
  );
}

export default ImageCard;
