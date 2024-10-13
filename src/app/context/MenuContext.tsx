"use client";

import React, { createContext, useState, useContext } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  isSideComponentOpen: boolean;
  toggleMenu: () => void;
  closeSideComponent: () => void;
  openSideComponent: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideComponentOpen, setIsSideComponentOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideComponent = () => {
    setIsSideComponentOpen(false)
  }
  const openSideComponent = () => {
    setIsSideComponentOpen(true)
  }

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        closeSideComponent,
        openSideComponent,
        isSideComponentOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
