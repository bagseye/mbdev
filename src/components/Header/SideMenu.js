import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import menuItems from '../../constants/links';
import FadeLink from '../FadeLink';
import { getUser, isLoggedIn, logout } from '../../services/auth';
import MenuContext from '../MenuContext';

const menuListVariants = {
  open: { transition: { staggerChildren: 0.25, delayChildren: 0.35 } },
  // closed: { opacity: 0, x: '-100px' },
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

const Cont = styled.div`
  height: 100%;
  width: 100%;
  padding: 140px var(--gridGap) 0 var(--gridGap);
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: transform 0.5s ease;
  background-color: #fff;
  transform: translateX(-100vw);

  ul {
    max-width: 1520px;
    padding-left: 0;
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

  @media (min-width: 414px) {
    padding-top: 160px;
  }

  @media (min-width: 834px) {
    padding-top: 200px;
  }

  @media (min-width: 1600px) {
    padding-top: 230px;
  }
`;

const SideMenu = () => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <Cont
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100vw)' }}
    >
      <motion.ul
        animate={isOpen ? 'open' : 'closed'}
        variants={menuListVariants}
        transition={{ ease: 'easeOut', duration: 1.35, delay: 0.75 }}
        style={{ opacity: isOpen ? '1' : '0' }}
      >
        {menuItems.map((item, index) => (
          <motion.li
            variants={menuItemVariants}
            key={index}
            onClick={toggleNav}
          >
            <FadeLink linkTo={item.path}>{item.text}</FadeLink>
          </motion.li>
        ))}
        <motion.li variants={menuItemVariants}>
          <FadeLink linkTo="/dashboard/agency">Dashboard</FadeLink>
        </motion.li>
        {isLoggedIn() ? (
          <motion.li
            variants={menuItemVariants}
            onClick={(event) => {
              event.preventDefault();
              logout(() => navigate(`/dashboard/login`));
            }}
          >
            <FadeLink linkTo="/">Logout</FadeLink>
          </motion.li>
        ) : null}
      </motion.ul>
    </Cont>
  );
};

export default SideMenu;
