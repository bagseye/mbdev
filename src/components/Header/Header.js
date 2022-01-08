import React, { useContext } from "react";
import MenuContext from "../MenuContext";
import { HeaderGlobalStyles } from "./HeaderStyles";
import PropTypes from "prop-types";

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

  return (
    <>
      <HeaderGlobalStyles
        variants={headerVariants}
        animate={isOpen ? "open" : "closed"}
      >
        {children}
      </HeaderGlobalStyles>
    </>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};
