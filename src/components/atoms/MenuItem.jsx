import React from 'react';
import MenuIcon from './MenuIcon';

const MenuItem = (props) => {
  const { text, imageSrc } = props;
  return (
    <div className="navigation-bar__menu-item">
      <p className="navigation-bar__menu-item-text">{text}</p>
      <MenuIcon imageSrc={imageSrc} />
    </div>
  )
}

export default MenuItem;
