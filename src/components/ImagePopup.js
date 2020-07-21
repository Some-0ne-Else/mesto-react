import React from 'react';

function ImagePopup(){
    return(
        <section class="popup popup-enlarge">
        <div class="popup__container-enl">
          <img class="popup__image" alt="" /><button type="button" class="popup__close-button"></button>
          <p class="popup__caption"></p>
        </div>
      </section>
    )
}

export default ImagePopup