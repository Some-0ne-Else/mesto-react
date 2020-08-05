import React from 'react';

function Card({
  title,
  src,
  alt,
  likeCounter,
  onCardClick,
  ownerId,
  currentUser,
  likes,
  onCardLike,
  onCardDelete,
  card,
}) {
  const isOwn = ownerId === currentUser;
  const isLiked = likes.some((i) => i._id === currentUser);
  const elementDeleteButtonClassName = `element__delete-button ${
    isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'
  }`;
  const elementLikeButtonClassName = `element__like ${
    isLiked ? 'element__like_active' : 'element__like_unactive'
  }`;
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={src}
        alt={alt}
        onClick={onCardClick}
      />
      <button
        type="button"
        className={elementDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <p className="element__title">{title}</p>
      <div className="element__wrapper">
        <button
          className={elementLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
        <p className="element__like-counter">{likeCounter}</p>
      </div>
    </div>
  );
}

export default Card;
