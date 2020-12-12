import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import menuItems from '../../constants/links';
import { getUser, isLoggedIn, logout } from '../../services/auth';
import MenuContext from '../MenuContext';

const menuVariants = {
  open: {
    width: '100%',
    transition: {
      width: { duration: 0.4, velocity: -50, stiffness: 500 },
    },
  },
  closed: {
    width: '0%',
    transition: {
      width: { duration: 0.4, delay: 0.35 },
    },
  },
};

const menuListVariants = {
  open: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, duration: 0.75 },
      opacity: { duration: 0.75 },
    },
  },
  closed: {
    y: 15,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
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
  overflow-x: hidden;
  background-color: #fff;

  ul {
    width: 100%;
    max-width: 1520px;
    padding: 0 var(--gridGap);
    margin: 0 auto;
    transition: opacity 0.5s ease;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0 var(--gridGap);
  }

  li {
    list-style: none;
    font-weight: 700;
    letter-spacing: var(--titleLargeLetterSpacing);
    font-size: var(--titleLarge);
    grid-column: 1 / 7;
    padding-top: 20px;
    line-height: var(--titleLargeLineHeight);

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--background);
      font-weight: 700;
      transition: opacity 0.75s ease;

      &:hover {
        opacity: 0.5;
      }
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
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
    >
      <motion.ul
        animate={isOpen ? 'open' : 'closed'}
        variants={menuListVariants}
      >
        {menuItems.map((item, index) => (
          <motion.li variants={menuItemVariants} key={index}>
            <Link to={item.path} onClick={toggleNav}>
              {item.text}
            </Link>
          </motion.li>
        ))}
        <motion.li variants={menuItemVariants}>
          <Link to="/dashboard/agency" onClick={toggleNav}>
            Dashboard
          </Link>
        </motion.li>
        {isLoggedIn() ? (
          <motion.li
            variants={menuItemVariants}
            onClick={(event) => {
              event.preventDefault();
              logout(() => navigate(`/dashboard/login`));
            }}
          >
            <Link to="/">Logout</Link>
          </motion.li>
        ) : null}
      </motion.ul>
    </SideMenuStyles>
  );
};

export default SideMenu;
