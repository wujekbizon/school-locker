import './Submenu.scss';
import { useRef, useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Products from './Products';

type Props = {
  active: string;
  handleEvent: React.MouseEventHandler<HTMLDivElement>;
};

const Submenu = ({ active, handleEvent }: Props) => {
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

  const schoolLinks = links.filter((link) => link.idTag === 'one');
  const editorLinks = links.filter((link) => link.idTag === 'two');
  const botLinks = links.filter((link) => link.idTag === 'three');

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      {items && (
        <Products active={active} handleEvent={handleEvent} items={items} />
      )}

      {active === '0' && (
        <div className="submenu-center">
          {schoolLinks.map((link, index) => {
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
      )}
      {active === '1' && (
        <div className="submenu-center">
          {editorLinks.map((link, index) => {
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
      )}
      {active === '2' && (
        <div className="submenu-center">
          {botLinks.map((link, index) => {
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
      )}
    </aside>
  );
};

export default Submenu;
