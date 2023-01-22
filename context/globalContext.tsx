import React, { useState, useContext, createContext } from 'react';
import sublinks from '../data/data';

type CoordinatesType = {
  center: number;
  bottom: number;
};

type PageText = 'Products' | 'Resources' | 'Metaverse' | 'Tools';

const AppContext = createContext({
  isSidebarOpen: false,
  isSubmenuOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  openSubmenu: (text: PageText, coordinates: CoordinatesType) => {},
  closeSubmenu: () => {},
  location: { center: 100, bottom: 100 },
  page: sublinks[0],
  menuActive: '',
  openLockerMenu: (index: string) => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({ center: 100, bottom: 100 });
  const [page, setPage] = useState(sublinks[0]);
  const [menuActive, setMenuActive] = useState('0');

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const openLockerMenu = (index: string) => {
    setMenuActive(index);
  };

  const openSubmenu = (text: PageText, coordinates: CoordinatesType) => {
    const page = sublinks.find((link) => link.page === text);
    if (page !== undefined) {
      setPage(page);
      setLocation(coordinates);
      setIsSubmenuOpen(true);
    }
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
        menuActive,
        openLockerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
