import React from 'react';
import headerLogoImage from '../images/header__logo.svg';

function Header(){
    return (
        <header class="header">
        <img class="header__logo" src={headerLogoImage} alt="Логотип" />
      </header>
    );

}

export default Header