import React from 'react';


const content = [
  { text: "Вернуться" },
  { text: "Помощь" },
];

const MenuFooter = () => {
  return (
    <div className="navigation-bar__menu-footer">
      {
        content.map(c => <p className="text-dark">{c.text}</p>)
      }
    </div>
  );
}

export default MenuFooter;
