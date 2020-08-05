import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { userInfoPostfix } from '../utils/constants.js';
import { CardsContext } from '../contexts/CardsContext.js';
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
  const cards = React.useContext(CardsContext);

  React.useEffect(() => {
    api
      .fetchData(userInfoPostfix)
      .then((userInfo) => {
        setCurrentUser(userInfo);
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
      .then(() => {
        currentUser.name = name;
        currentUser.about = about;
        closeAllPopups();
      }) /*probally it's bad practice, mb better way will be get a new data from server and set it in the state */
      .catch((err) => {
        console.log(err);
      });
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
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
              name="add"
              title="Новое место"
              actionCaption="Создать"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
            >
              <input
                type="text"
                className="popup__input"
                name="name"
                id="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+"
                required
                noValidate
              />
              <p className="popup__input-error" id="name-error"></p>
              <input
                type="url"
                className="popup__input"
                name="url"
                id="url"
                placeholder="Ссылка на картинку"
                required
                noValidate
              />
              <p className="popup__input-error" id="url-error"></p>
            </PopupWithForm>

            <PopupWithForm
              name="delete"
              title="Вы уверены?"
              actionCaption="Да"
            />

            <PopupWithForm
              name="avatar"
              title="Обновить аватар"
              actionCaption="Сохранить"
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            >
              <input
                type="url"
                className="popup__input"
                name="url"
                id="link"
                placeholder="Ссылка на картинку"
                required
                noValidate
              />
              <p className="popup__input-error" id="link-error"></p>
            </PopupWithForm>
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
