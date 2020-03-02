import React from 'react';

const MenuHeader = () => {
  return (
    <div className="navigation-bar__menu-header">
      <div className="navigation-bar__menu-header-logo">
        <img
          className="navigation-bar__menu-header-image mr-10"
          src={require("../../static/menu-header.svg")}
          alt="logo"
        />
        <p className="text-warning text-bold">Gamisoft</p>
      </div>
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
