import React from 'react';

const MenuItem = (props) => {
    const { item } = props;
    return (
        <div className="navigation-bar__menu-item">
            {item}
        </div>
    );
}

export default MenuItem;
