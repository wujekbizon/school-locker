import './MainHeader.scss';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Logo from '../logo/Logo';
import { links } from '../../data/data';

const MainHeader = () => {
  const { data: session, status } = useSession();
  // temp isAdmin flag
  const isAdmin = false;

  const displaySubmenu = (e: any) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
  };

  return (
    <header className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <Logo />
          </Link>
          {/* <button className="btn toggle-btn">
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
  );
};
export default MainHeader;
