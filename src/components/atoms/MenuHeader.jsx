import React from 'react';

const MenuHeader = () => {
  return (
    <div className="navigation-bar__menu-header">
      <img
        className="navigation-bar__menu-header-image"
        // src="./menu-header.svg"
        src={require("./menu-header.svg")}
        alt="logo"
      />
      <p className="navigation-bar__menu-header-text text-warning">Gamisoft</p>
      <img
        className="navigation-bar__menu-header-image"
        // src={require("./chevrons.png")}
        src={require("../../static/chevrons.png")}
        alt="chevrons"
      />
    </div>
  );
};

export default MenuHeader;
