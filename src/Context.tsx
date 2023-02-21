import { createContext } from "react";
import { useState, useContext } from "react";
import sublinks, { iLinks } from "./data";

interface AppContextType {
  SubmenuOpen: boolean;
  sidebarOpen: boolean;
  openSidebar: () => void;
  openSubmenu: (text: string, coordinates: ILocation) => void;
  closeSidebar: () => void;
  closeSubmenu: () => void;
  location: ILocation | null;
  pageLinks: iLinks
}

interface ILocation {
  center: number;
  bottom: number;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [SubmenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState<ILocation | null>(null);
  const [pageLinks, setPageLinks] = useState<iLinks>({page:'', links:[{label:'', url:''}]})

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSubmenu = (text: string, coordinates: ILocation) => {
    const page = sublinks.find((link) => link.page === text)
    if(page){setPageLinks(page)}
    setLocation(coordinates);
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        SubmenuOpen,
        sidebarOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        pageLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
