import React from 'react';

const ContentItem = (props) => {
  const { header, title } = props;

  return (
    <div className="content-item col-3 ml-20">
      <h5 className="content-item__header">{header}</h5>
      <p className="content-item__title text-grey">{title}</p>
    </div>
  )
}

export default ContentItem;
