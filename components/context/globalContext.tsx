import React, { useState, useContext, createContext } from 'react';
import sublinks from '../../data/data';
import { Pages } from '../../data/data';

const AppContext = createContext({
  isSidebarOpen: false,
  isSubmenuOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  openSubmenu: (text: string, coordinates: number) => {},
  closeSubmenu: () => {},
  location: {},
  page: {
    page: '',
    links: [{ label: '', icon: <p></p>, url: '' }],
  },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState<Pages>();

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openSubmenu = (text: string, coordinates: number) => {
    const page = sublinks.find((link) => link.page === text);

    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  if (!page) {
    return <p>No links...</p>;
  }

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
