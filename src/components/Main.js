import React from 'react';
import Card from './Card.js';
import editButtonImage from '../images/profile__edit-button_image.svg';
import {
    userInfoPostfix,
    cardsPostfix,
} from '../utils/constants.js';
import api from '../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setDescription] = React.useState('');
    const [userAvatar, setAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.fetchData(userInfoPostfix)
        .then((data) => {
            setUserName(data.name);
            setDescription(data.about);
            setAvatar(data.avatar);
        })

        api.fetchData(cardsPostfix)
        .then((data) => {console.log("data",JSON.stringify(data) ); setCards(data); console.log("cards",JSON.stringify(cards))} )
        
    },[]); // [] for single mount
    
    return (
        <main class="content">
            <section class="profile">
                <div class="profile__wrapper">
                    <img class="profile__avatar" src={userAvatar} alt="Фото профиля" />
                    <img class="profile__avatar-edit" src={editButtonImage} alt="Редактировать" onClick={props.onEditAvatar} />
                </div>
                <div class="profile__profile-info">
                    <h2 class="profile__full-name">{userName}</h2>
                    <button class="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p class="profile__vocation">{userDescription}</p>
                </div>
                <button class="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section class="elements">
                { cards.map((card) => (<Card title={card.name} src={card.link} alt={card.name} /*likeCounter={card.likes.length} */ />) ) }
                <h1>ese</h1>
                
            </section>
        </main>
    );
}

export default Main

