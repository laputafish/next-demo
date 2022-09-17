import styles from './LeftMenu.module.scss';

import { useEffect } from 'react';
import { useState } from 'react';
import * as md from 'react-icons/md';

function LeftMenu(props) {
  const menu = props.menu;
  var selectedItemStyle='';
  const [activeItem, setActiveItem] = useState(menu[0]);

  const onMenuSelected = (item) => {
    setActiveItem(item);
  }

  const getItemStyle = (item) => {
    if (item.id === activeItem.id) {
      return ' bg-blue-500';
    } else {
      return '';
    }
  }
  
  const menuItemList = menu.map((item) => {
  //   return (<div key={item.id}>item {item.id}</div>)
  // });
    const tag = 'Md' + item.iconTag
    const MdIcon = md[tag]
    return (
      <div
        key={item.id}
        onClick={() => onMenuSelected(item)}
        className={
          'cursor-pointer menu-item p-1 ' +
          (item.id === activeItem.id ? 'selected' : '')
        }
      >
        <div
          className={
            'menu-item-content p-1 rounded hover:bg-blue-100 flex flex-row items-center' +
            getItemStyle(item)
          }>
          <div className="mr-1">
            <MdIcon />
          </div>
          <h1>{item.label}</h1>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-red-200 h-full">
      <div style={{ height: 0, minHeight: '100%', overflowY: 'auto' }}>
        <div>{menuItemList}</div>
      </div>
    </div>
  )
}

export default LeftMenu
