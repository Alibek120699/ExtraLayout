import React from 'react';
import MenuHeader from '../atoms/MenuHeader';
import MenuItem from '../atoms/MenuItem';

const NavigationBar = (props) => {
  return (
    <div>
        <MenuHeader />
        {props.items.map((item) => <MenuItem item={item} />)}
    </div>
  );
};

export default NavigationBar;
