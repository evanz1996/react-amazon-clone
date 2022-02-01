import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons';
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__Search">
        <input className="header__searchInput" type="text"></input>
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>
      <div className="header__nav">
        <div className="header_option">
          <span className="header__optionLineOne">Hello Guess</span>
          <span className="header__optionLineTwo">Sign IN</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;