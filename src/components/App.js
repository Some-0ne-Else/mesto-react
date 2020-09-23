import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { CardsContext } from '../contexts/CardsContext.js';
import { userInfoPostfix, cardsPostfix } from '../utils/constants.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');
  const [isLoading, setIsLoading] = React.useState('');
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .likeCard(cardsPostfix, card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardDelete(card) {
    /* cards state updated only in case of response success */
    api
      .deleteCard(`${cardsPostfix}/${card._id}`)
      .then(() => setCards(cards.filter((c) => c._id !== card._id)))
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    api
      .fetchData(userInfoPostfix)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(true);
    api
      .fetchData(cardsPostfix)
      .then((dataCards) => {
        setCards(
          dataCards.map((item) => ({
            _id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            ownerId: item.owner._id,
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(e) {
    setSelectedCard(e.target);
    setImagePopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile(userInfoPostfix, name, about)
      .then((result) => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar(userInfoPostfix, avatar)
      .then((result) => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit({ name, url }) {
    api
      .postCard(cardsPostfix, name, url)
      .then((newCard) => {
        setCards([...cards, newCard]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard('');
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="App">
          <div className="page">
            <Header />
            <Main
              cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              isLoading={isLoading}
            />
            <Footer />

            <PopupWithForm
              name="delete"
              title="Вы уверены?"
              actionCaption="Да"
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

            <ImagePopup
              isOpen={isImagePopupOpen}
              card={selectedCard}
              onClose={closeAllPopups}
            />
          </div>
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
