import './LockerMenu.scss';
import { useState } from 'react';
import Link from 'next/link';
import { lockerMenuLinks } from '../../data/data';

type LockerMenuProps = {
  active: boolean;
  lockerId: string;
};

const LockerMenu = ({ active, lockerId }: LockerMenuProps) => {
  const [menuActive, setMenuActive] = useState('0');

  return (
    <ul
      className={
        active ? 'locker-menu_active locker_menu-list' : 'locker_menu-list'
      }
    >
      {lockerMenuLinks.map((item, index) => (
        <li
          key={item.title + index}
          className={
            menuActive === index.toString() ? 'active-menu_list' : 'menu_list'
          }
          id={`${index}`}
          onClick={() => setMenuActive(index.toString())}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
export default LockerMenu;
