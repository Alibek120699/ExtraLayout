import React from 'react';
import MenuHeader from '../atoms/MenuHeader';
import MenuFooter from '../atoms/MenuFooter';
import MenuItem from '../atoms/MenuItem';

const items = [
  { text: 'Главная', image: "../../static/chevrons.png" },
  { text: 'Компания', image: 'static/Company.png' },
  { text: 'Контент', image: 'static/Company.png' },
  { text: 'Рассылка', image: 'static/Company.png' },
  { text: 'Статистика', image: 'static/Company.png' },
  { text: 'Магазин', image: 'static/Company.png' },
  { text: 'Marketplace', image: 'static/Company.png' },
];

const NavigationBar = () => {
  return (
    <div className="navigation-bar__container">
        <MenuHeader />
        {
          items.map(i => (
            <MenuItem
              text={i.text}
              imageSrc={i.image}
            />
          ))
        }
        <MenuFooter />
    </div>
  );
};

export default NavigationBar;
