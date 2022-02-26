import React from 'react';

const Item = ({ item }) => {
  const { id, title, img, price, desc } = item;

  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='photo'></img>
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>
            <span>$ {price}</span>
          </h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};

export default Item;
