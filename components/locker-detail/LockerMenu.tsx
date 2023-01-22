import './LockerMenu.scss';
import Link from 'next/link';

const LockerMenu = ({ active }: { active: boolean }) => {
  return (
    <ul
      className={
        active ? 'locker-menu_active locker_menu-list' : 'locker_menu-list'
      }
    >
      <li>Menu1</li>
      <li>Menu1</li>
      <li>Menu1</li>
      <li>Menu1</li>
    </ul>
  );
};
export default LockerMenu;
