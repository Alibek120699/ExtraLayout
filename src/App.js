import React from 'react';
import NavigationBar from './components/molecules/NavigationBar';
import Content from './components/molecules/Content';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="navigation-bar__menu">
        <NavigationBar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
