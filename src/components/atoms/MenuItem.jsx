import React from 'react';

const MenuItem = (props) => {
    const { item } = props;
    console.log(item);
    return (
        <div className="navigation-bar__menu-item">
            <img
              src={item.image}
              alt="image"
            />
            {item.text}
        </div>
    );
};

export default MenuItem;
