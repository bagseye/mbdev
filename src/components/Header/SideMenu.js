import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mainLinks as menuItems, serviceLinks } from "../../constants/links";
import MenuContext from "../MenuContext";

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

  .container {
    padding: 0 var(--gridGap);
    max-width: 1580px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-start;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    padding: 0;
    box-sizing: content-box;

    @media (min-width: 768px) {
      flex: 0 0 calc(100% / 3);
      box-sizing: border-box;
      border-left: 2px solid rgba(255, 255, 255, 0.1);
      padding: 0 var(--gridGap);

      @media (prefers-color-scheme: dark) {
        border-left-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  li,
  li a {
    font-size: var(--h2);
    list-style: none;
    color: var(--background);
    letter-spacing: -0.05rem;
    padding-top: 20px;
    line-height: var(--h2LineHeight);
    text-decoration: none;
    text-transform: capitalize;
    transition: opacity 0.75s ease;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: var(--h2);

      &:first-child {
        padding-top: 0;
      }
    }

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
      <div className="container">
        <motion.ul variants={listVariants} animate={isOpen ? "open" : "closed"}>
          {serviceLinks.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </motion.ul>

        <motion.ul variants={listVariants} animate={isOpen ? "open" : "closed"}>
          {menuItems.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </SideMenuStyles>
  );
};

export default SideMenu;
