import React from 'react';
import Item from './Item';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <Item  key={menuItem.id} item={menuItem}/>
      })}
    </div>
  );
};

export default Menu;
