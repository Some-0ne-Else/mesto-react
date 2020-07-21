import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    console.log("click");
  }

  function handleAddPlaceClick() {
    console.log("addPlace")
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    console.log("click")
    setEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }
  return (
    <div className="App">
      <div class="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" actionCaption="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" class="popup__input" name="name" id="full-name" placeholder="Имя полностью" minLength="2"
            maxLength="40" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" required noValidate />
          <p class="popup__input-error" id="full-name-error"></p>
          <input type="text" class="popup__input" name="about" id="vocation" placeholder="Призвание" minLength="2"
            maxLength="200" required noValidate />
          <p class="popup__input-error" id="vocation-error"></p>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" actionCaption="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
          <input type="text" class="popup__input" name="name" id="name" placeholder="Название" minLength="2"
            maxLength="30" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" required noValidate />
          <p class="popup__input-error" id="name-error"></p>
          <input type="url" class="popup__input" name="url" id="url" placeholder="Ссылка на картинку" required noValidate />
          <p class="popup__input-error" id="url-error"></p>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" actionCaption="Да" />

        <PopupWithForm name="avatar" title="Обновить аватар" actionCaption="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" class="popup__input" name="url" id="link" placeholder="Ссылка на картинку" required noValidate />
          <p class="popup__input-error" id="link-error"></p>
        </PopupWithForm>

        <ImagePopup />


      </div>

    </div>
  );
}


export default App;

