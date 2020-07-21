import React from 'react';

function PopupWithForm(props){
    return (
        <section className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}> 
        <form className={`popup__container popup__container_${props.name}`}>
          <h2 class="popup__heading">{props.title}</h2>
          <button type="button" class="popup__close-button" onClick={props.onClose}></button>
            {props.children}
    <button type="submit" className={`popup__action-button popup__action-button_${props.name}`}>{props.actionCaption}</button>
        </form>
      </section>
    )
}
export default PopupWithForm