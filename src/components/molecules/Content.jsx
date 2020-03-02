import React from 'react';
import Button from '../atoms/Button';
import ContentItem from '../atoms/ContentItem';

const contentItems = [
  { header: "Название компании", title: "Адрес компании" },
  { header: "Тариф", title: "Название" },
  { header: "Пользователей", title: "23/200" },
  { header: "Окончание подписки", title: "11.07.2020" },
]

const Content = () => {
  return (
    <div className="content__container">
      <div className="row align-center">
        <h2 className="content__header text-dark">Компания</h2>
        <Button />
      </div>
      <div className="row align-center">
        <img src={require("../../static/menu-header.svg")} alt="logo" height="48px;" width="48px;" />
        {
          contentItems.map(c => <ContentItem header={c.header} title={c.title} />)
        }
      </div>
    </div>
  );
}

export default Content;
