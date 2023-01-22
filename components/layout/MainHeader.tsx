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
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

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
      setActive('0');
      closeSubmenu();
    }
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="nav"
      >
        <nav className="nav-center" onMouseOver={handleSubmenu}>
          <div className="navbar-gradient gradient-01" />
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

          {session && status === 'authenticated' && (
            <button className="btn">
              <Link href="/populate">My Locker</Link>
            </button>
          )}
        </nav>
      </motion.header>
      <Submenu active={active} handleEvent={handleEvent} />
    </>
  );
};
export default MainHeader;
