import { token, baseUrl, cohort } from './constants.js';

class Api {
  constructor(token, baseUrl, cohort) {
    this._token = token;
    this._baseUrl = `${baseUrl}${cohort}`;
  }
  fetchData(urlPostfix) {
    return fetch(`${this._baseUrl}${urlPostfix}`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject(`Ошибка: ${result.status}`);
      }
    });
  }
  editProfile(urlPostfix, name, about) {
    return fetch(`${this._baseUrl}${urlPostfix}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      }),
    }).then((result) => result.json());
  }

  postCard(urlPostfix, name, link) {
    return fetch(`${this._baseUrl}${urlPostfix}`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    }).then((result) => result.json());
  }

  deleteCard(urlPostfix) {
    return fetch(`${this._baseUrl}${urlPostfix}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    });
  }
  likeCard(urlPostfix, cardId, isLiked) {
    let methodValue;
    isLiked ? (methodValue = 'DELETE') : (methodValue = 'PUT');
    return fetch(`${this._baseUrl}${urlPostfix}/likes/${cardId}`, {
      method: methodValue,
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json());
  }

  updateAvatar(urlPostfix, link) {
    return fetch(`${this._baseUrl}${urlPostfix}/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: `${link}`,
      }),
    }).then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject(`Ошибка: ${result.status}`);
      }
    });
  }
}

const api = new Api(token, baseUrl, cohort);

export default api;
