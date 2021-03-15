import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import menuItems from "../../constants/links";
import MenuContext from "../MenuContext";
import FadeLink from "../FadeLink";

const menuVariants = {
  open: {
    width: "100%",
    transition: {
      width: { duration: 0.4, delay: 0.75, velocity: -50, stiffness: 500 },
    },
  },
  closed: {
    width: "0%",
    transition: {
      width: { duration: 0.4, delay: 0.5 },
    },
  },
};

const listVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 1.25,
    },
  },
  closed: {
    opacity: 0,
  },
};

const SideMenuStyles = styled(motion.div)`
  height: 100%;
  width: 0%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 4;
  top: 0;
  left: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: var(--primary);

  ul {
    padding: 0;
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    flex-shrink: 0;
    padding: 0 var(--gridGap);
  }

  li,
  li a {
    font-size: var(--titleLarge);
    list-style: none;
    color: var(--background);
    letter-spacing: var(--titleLargeLetterSpacing);
    padding-top: 20px;
    line-height: var(--titleLargeLineHeight);
    text-decoration: none;
    text-transform: capitalize;
    transition: opacity 0.75s ease;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const SideMenu = () => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <SideMenuStyles
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <motion.ul variants={listVariants} animate={isOpen ? "open" : "closed"}>
        {menuItems.map((item, index) => (
          <li onClick={toggleNav} key={index}>
            <FadeLink linkTo={item.path}>{item.text}</FadeLink>
          </li>
        ))}
      </motion.ul>
    </SideMenuStyles>
  );
};

export default SideMenu;
