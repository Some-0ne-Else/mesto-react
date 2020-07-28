import React from 'react';
import headerLogoImage from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoImage} alt="Логотип" />
    </header>
  );
}

export default Header;
