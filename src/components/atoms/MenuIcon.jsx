import React from 'react';

const MenuIcon = (props) => {
  const { imageSrc } = props;
  return (
    <div>
      <img
        src={imageSrc}
        // src={require(imageSrc)}
        alt="Icon"
      />
    </div>
  )
}

export default MenuIcon;
