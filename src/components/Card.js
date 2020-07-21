import React from 'react';

function Card({ title, src, alt, likeCounter, onCardClick }) {
    return (
        <div className="element">
            <img className="element__image" src={src} alt={alt} onClick={onCardClick} />
            <button type="button" className="element__delete-button"></button>
            <p className="element__title">{title}</p>
            <div className="element__wrapper">
                <button className="element__like"></button>
                <p className="element__like-counter">{likeCounter}</p>
            </div>
        </div>
    );
}

export default Card