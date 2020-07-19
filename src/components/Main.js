import React from 'react';
import editButtonImage from '../images/profile__edit-button_image.svg'

function Main() {
    return (
        <main class="content">
            <section class="profile">
                <div class="profile__wrapper">
                    <img class="profile__avatar" alt="Фото профиля" />
                    <img class="profile__avatar-edit" src={editButtonImage} alt="Редактировать" onClick={ (e) => {e.preventDefault();document.querySelector('.popup_avatar').classList.add("popup_opened");}} />
                </div>
                <div class="profile__profile-info">
                    <h2 class="profile__full-name"></h2>
                    <button class="profile__edit-button" onClick={ (e) => {e.preventDefault();document.querySelector('.popup_edit').classList.add("popup_opened");}}></button>
                    <p class="profile__vocation"></p>
                </div>
                <button class="profile__add-button" onClick={ (e) => {e.preventDefault();document.querySelector('.popup_edit').classList.add("popup_opened");}}></button>
            </section>
            <section class="elements">
            </section>
        </main>
    );
}

export default Main
