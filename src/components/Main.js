import React from 'react';
import Card from './Card.js';
import editButtonImage from '../images/profile__edit-button_image.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { cardsPostfix } from '../utils/constants.js';
import api from '../utils/Api.js';
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .likeCard(cardsPostfix, card._id, isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardDelete(card) {
    console.log('delete work');
  }
  React.useEffect(() => {
    api
      .fetchData(cardsPostfix)
      .then((dataCards) =>
        setCards(
          dataCards.map((item) => ({
            _id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            ownerId: item.owner._id,
          }))
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
          <img
            className="profile__avatar-edit"
            src={editButtonImage}
            alt="Редактировать"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__profile-info">
          <h2 className="profile__full-name">{currentUser.name}</h2>
          <button
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__vocation">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            title={card.name}
            src={card.link}
            alt={card.name}
            key={card._id}
            currentUser={currentUser._id}
            ownerId={card.ownerId}
            likes={card.likes}
            likeCounter={card.likes.length}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
