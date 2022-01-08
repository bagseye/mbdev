import React, { useContext } from "react";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";
import { MenuButtonGlobalStyles } from "./HeaderStyles";

const menuButtonVariants = {
  open: {
    color: "var(--background)",
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    color: "var(--primary)",
    transition: {
      delay: 0.25,
    },
  },
};

const burgerVariants = {
  open: {
    backgroundColor: "var(--background)",
    transition: {
      delay: 0.65,
    },
  },
  closed: {
    backgroundColor: "var(--primary)",
    transition: {
      delay: 0.25,
    },
  },
};

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
