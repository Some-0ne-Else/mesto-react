import React from 'react';

function Card({ title, src, alt, likeCounter }) {
    return (
        <div class="element">
            <img class="element__image" src={src} alt={alt} />
            <button type="button" class="element__delete-button"></button>
            <p class="element__title">{title}</p>
            <div class="element__wrapper">
                <button class="element__like"></button>
                <p class="element__like-counter">{likeCounter}</p>
            </div>
        </div>

    );
}

export default Card