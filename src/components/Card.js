import React from 'react';

function Card({
  title,
  src,
  alt,
  likeCounter,
  onCardClick,
  ownerId,
  currentUser,
}) {
  const isOwn = ownerId === currentUser;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const elementDeleteButtonClassName = `element__delete-button ${
    isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'
  }`;
  console.log(isOwn);
  return (
    <div className="element">
      <img
        className="element__image"
        src={src}
        alt={alt}
        onClick={onCardClick}
      />
      <button type="button" className={elementDeleteButtonClassName}></button>
      <p className="element__title">{title}</p>
      <div className="element__wrapper">
        <button className="element__like"></button>
        <p className="element__like-counter">{likeCounter}</p>
      </div>
    </div>
  );
}

export default Card;
