import React, { useContext } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import menuItems from "../../constants/links";
import { getUser, isLoggedIn, logout } from "../../services/auth";
import MenuContext from "../MenuContext";
import FadeLink from "../FadeLink";

const menuVariants = {
  open: {
    width: "100%",
    paddingLeft: "var(--gridGap)",
    paddingRight: "var(--gridGap)",
    transition: {
      width: { duration: 0.4, delay: 0.75, velocity: -50, stiffness: 500 },
      paddingLeft: {
        duration: 0.4,
        delay: 0.75,
        velocity: -50,
        stiffness: 500,
      },
      paddingRight: {
        duration: 0.4,
        delay: 0.75,
        velocity: -50,
        stiffness: 500,
      },
    },
  },
  closed: {
    width: "0%",
    paddingLeft: "0",
    paddingRight: "0",
    transition: {
      width: { duration: 0.4, delay: 1.5 },
      paddingLeft: { delay: 1.5 },
      paddingRight: { delay: 1.5 },
    },
  },
};

const menuListVariants = {
  open: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.95,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.15 },
      y: { duration: 0.75 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15 },
      y: { stiffness: 1000, velocity: -100, duration: 0.75 },
    },
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
  background-color: #fff;

  ul {
    padding: 0;
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0 var(--gridGap);
  }

  li,
  li a {
    font-size: var(--titleLarge);
    font-weight: 700;
    font-variation-settings: "wght" 600;
    list-style: none;
    color: var(--background);
    letter-spacing: var(--titleLargeLetterSpacing);
    grid-column: 1 / 7;
    padding-top: 20px;
    line-height: var(--titleLargeLineHeight);
    text-decoration: none;
    text-transform: capitalize;
    transition: opacity 0.75s ease;

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
      <motion.ul
        animate={isOpen ? "open" : "closed"}
        variants={menuListVariants}
      >
        {menuItems.map((item, index) => (
          <motion.li
            variants={menuItemVariants}
            onClick={toggleNav}
            key={index}
          >
            <FadeLink linkTo={item.path}>{item.text}</FadeLink>
          </motion.li>
        ))}
        <motion.li variants={menuItemVariants} onClick={toggleNav}>
          <FadeLink linkTo="/dashboard/agency">Dashboard</FadeLink>
        </motion.li>
        {isLoggedIn() ? (
          <motion.li
            variants={menuItemVariants}
            onClick={(event) => {
              toggleNav();
              event.preventDefault();
              logout(() => navigate(`/dashboard/login`));
            }}
          >
            <FadeLink linkTo="/">Logout</FadeLink>
          </motion.li>
        ) : null}
      </motion.ul>
    </SideMenuStyles>
  );
};

export default SideMenu;
