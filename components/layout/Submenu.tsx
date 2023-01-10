import './Submenu.scss';
import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/globalContext';
import Link from 'next/link';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
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
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <Link key={index} href={url}>
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
