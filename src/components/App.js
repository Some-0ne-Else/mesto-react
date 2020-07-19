import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <div class="page">
        <Header />
        <Main />
        <Footer />
        <section class="popup popup_edit">
          <form class="popup__container popup__container_edit">
            <h2 class="popup__heading">Редактировать профиль</h2>
            <button type="button" class="popup__close-button"></button>
            <input type="text" class="popup__input" name="name" id="full-name" placeholder="Имя полностью" minlength="2"
              maxlength="40" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" required novalidate />
            <p class="popup__input-error" id="full-name-error"></p>
            <input type="text" class="popup__input" name="about" id="vocation" placeholder="Призвание" minlength="2"
              maxlength="200" required novalidate />
            <p class="popup__input-error" id="vocation-error"></p>
            <button type="submit" class="popup__action-button popup__action-button_edit">Сохранить</button>
          </form>
        </section>
        <section class="popup popup_add">
          <form class="popup__container popup__container_add">
            <h2 class="popup__heading">Новое место</h2>
            <button type="button" class="popup__close-button"></button>
            <input type="text" class="popup__input" name="name" id="name" placeholder="Название" minlength="2"
              maxlength="30" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" required novalidate />
            <p class="popup__input-error" id="name-error"></p>
            <input type="url" class="popup__input" name="url" id="url" placeholder="Ссылка на картинку" required novalidate />
            <p class="popup__input-error" id="url-error"></p>
            <button type="submit" class="popup__action-button">Создать</button>
          </form>
        </section>
        <section class="popup popup-enlarge">
          <div class="popup__container-enl">
            <img class="popup__image" alt="" /><button type="button" class="popup__close-button"></button>
            <p class="popup__caption"></p>
          </div>
        </section>
        <section class="popup popup_delete">
          <form class="popup__container popup__container_delete">
            <h2 class="popup__heading popup__heading_delete">Вы уверены?</h2>
            <button type="button" class="popup__close-button"></button>
            <button type="submit" class="popup__action-button popup__action-button_delete">Да</button>
          </form>
        </section>
        <section class="popup popup_avatar">
          <form class="popup__container popup__container_avatar">
            <h2 class="popup__heading">Обновить аватар</h2>
            <button type="button" class="popup__close-button"></button>
            <input type="url" class="popup__input" name="url" id="link" placeholder="Ссылка на картинку" required novalidate />
            <p class="popup__input-error" id="link-error"></p>
            <button type="submit" class="popup__action-button">Сохранить</button>
          </form>
        </section>
        <template class="element__template">
          <div class="element">
            <img class="element__image" alt="" />
            <button type="button" class="element__delete-button"></button>
            <p class="element__title"></p>
            <div class="element__wrapper">
              <button class="element__like"></button>
              <p class="element__like-counter"></p>
            </div>
          </div>
        </template>
      </div>

    </div>
  );
}

export default App;
