import React from 'react';

import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitch from '../assets/header/theme-switch.png';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} className="punk-logo" alt="logo" />
      </div>

      <div className="search-bar">
        <div className="search-icon--container">
          <img src={searchIcon} alt="search" />
        </div>
        <input className="search-input" placeholder="Collection, item or user..." />
      </div>

      <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header-actions">
        <div className="theme-switch">
          <img src={themeSwitch} alt="change-theme" />
        </div>
      </div>

      <div className="login">
        GET IN
      </div>
    </div>
  );
}

export default Header;
