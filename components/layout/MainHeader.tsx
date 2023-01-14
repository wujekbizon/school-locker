import './MainHeader.scss';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Logo from '../logo/Logo';
import { links } from '../../data/data';
import { useGlobalContext } from '../../context/globalContext';
import Submenu from './Submenu';
import { useState } from 'react';

const MainHeader = () => {
  const { data: session, status } = useSession();
  const { openSidebar, openSubmenu, closeSubmenu, isSubmenuOpen } =
    useGlobalContext();

  const [active, setActive] = useState('0');

  const handleEvent: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setActive(e.currentTarget.id);
  };

  const displaySubmenu = (e: any) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e: any) => {
    if (e.target.className === 'link-btn') {
      setActive('0');
      return;
    } else {
      e.target.className === 'hero-wrapper';
      setActive('0');
      closeSubmenu();
    }
  };

  return (
    <>
      <header className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <Link href="/">
              <Logo />
            </Link>
            {/* <button className="btn toggle-btn" onClick={openSidebar}>
            <MenuIcon />
          </button> */}
          </div>

          <ul className="nav-links">
            {links.map((link, index) => (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          {!session && status === 'unauthenticated' && (
            <button className="btn signin-btn" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </header>
      <Submenu active={active} handleEvent={handleEvent} />
    </>
  );
};
export default MainHeader;
