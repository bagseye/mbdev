import React, { useState } from "react";

const defaultState = {
  isOpen: false,
};
// Create the menu context

const MenuContext = React.createContext(defaultState);

export function MenuProvider({ children }) {
  // Place state in here
  // Access this around the site
  const [isOpen, setNav] = useState([]);

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
