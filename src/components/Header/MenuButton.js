import React, { useContext } from "react";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";
import {
  MenuButtonGlobalStyles,
  menuButtonVariants,
  burgerVariants,
} from "./HeaderStyles";

const MenuButton = () => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <>
      <MenuButtonGlobalStyles
        onClick={toggleNav}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        variants={menuButtonVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <div className={isOpen ? "burger burger-open" : "burger"}>
          <motion.span
            variants={burgerVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            variants={burgerVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            variants={burgerVariants}
            animate={isOpen ? "open" : "closed"}
          />
          {isOpen ? "Close" : "Menu"}
        </div>
      </MenuButtonGlobalStyles>
    </>
  );
};

export default MenuButton;
