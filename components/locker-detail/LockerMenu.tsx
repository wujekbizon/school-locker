import './LockerMenu.scss';
import { lockerMenuLinks } from '../../data/data';
import { useGlobalContext } from '../../context/globalContext';

type LockerMenuProps = {
  active: boolean;
  closeHandler: () => void;
  lockerId?: string;
};

const LockerMenu = ({ active, closeHandler }: LockerMenuProps) => {
  const { menuActive, openLockerMenu } = useGlobalContext();

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
          onClick={() => {
            closeHandler();
            openLockerMenu(index.toString());
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
export default LockerMenu;
