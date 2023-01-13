import './Submenu.scss';
import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Products from './Products';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links, items },
    closeSubmenu,
  } = useGlobalContext();

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const submenu = container.current;

    submenu.style.left = `${location.center}px`;
    submenu.style.top = `${location.bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      {items && <Products items={items} />}
      <div className="submenu-center">
        {links.map((link, index) => {
          const { label, icon, url, title } = link;
          return (
            <div className="link-wrapper">
              {icon}
              <Link
                key={index}
                href={url}
                className="link-title"
                onClick={closeSubmenu}
              >
                <div className="link-arrow">
                  <h4>{label}</h4>
                  <ArrowRightAltIcon className="icon" />
                </div>
                <p>{title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
