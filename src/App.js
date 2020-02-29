import React from 'react';
import NavigationBar from './components/molecules/NavigationBar';
import './App.css';

const App = () => {

  const items = ['Главная', 'Компания', 'Контент', 'Рассылка', 'Статистика', 'Магазин', 'Marketplace'];
  return (
    <div className="container">
      <div className="navigation-bar__menu">
        <NavigationBar items={items} />
      </div>
      <div>
        Content
      </div>
    </div>
  );
}

export default App;
