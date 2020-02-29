import React from 'react';
import NavigationBar from './components/molecules/NavigationBar';
import './App.css';

const App = () => {

  // const items = ['Главная', 'Компания', 'Контент', 'Рассылка', 'Статистика', 'Магазин', 'Marketplace'];
  const items = [
    { text: 'Главная', image: '../../static/Company.png' },
    { text: 'Компания', image: '../../static/Company.png' },
    { text: 'Контент', image: '../../static/Company.png' },
    { text: 'Рассылка', image: '../../static/Company.png' },
    { text: 'Статистика', image: '../../static/Company.png' },
    { text: 'Магазин', image: '../../static/Company.png' },
    { text: 'Marketplace', image: '../../static/Company.png' },
  ];
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
