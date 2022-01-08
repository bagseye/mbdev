import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../MenuContext";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { HeaderGlobalStyles } from "./HeaderStyles";

const headerVariants = {
  open: {
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: {
      delay: 0.75,
    },
  },
  closed: {
    color: "var(--background)",
    transition: {
      delay: 0.65,
    },
  },
};

const Header = ({ children }) => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <HeaderGlobalStyles
        variants={headerVariants}
        animate={isOpen ? "open" : "closed"}
        className={scroll ? "nav__scrolled" : null}
      >
        <Logo className="logo__link" />
        {children}
      </HeaderGlobalStyles>
      <SideMenu />
    </>
  );
};

export default Header;
