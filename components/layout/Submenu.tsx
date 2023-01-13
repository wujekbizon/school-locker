import './Submenu.scss';
import { useRef, useEffect, useState } from 'react';
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

  const [active, setActive] = useState('0');
  const [isSchool, setIsSchool] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const handleEvent: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setActive(e.currentTarget.id);
  };

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
      {items && (
        <Products active={active} handleEvent={handleEvent} items={items} />
      )}
      <div className="submenu-center">
        {links.map((link, index) => {
          const { label, icon, url, title } = link;

          return (
            <div className="link-wrapper" key={index}>
              {icon}
              <Link href={url} className="link-title" onClick={closeSubmenu}>
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
