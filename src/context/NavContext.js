// NavContext.js
import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState('/');

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};
