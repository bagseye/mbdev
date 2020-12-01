import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import menuItems from '../../constants/links';
import FadeLink from '../FadeLink';

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

const SideMenu = ({ status }) => (
  <Cont style={{ transform: status ? 'translateX(0)' : 'translateX(-100vw)' }}>
    <motion.ul
      animate={status ? 'open' : 'closed'}
      variants={menuListVariants}
      transition={{ ease: 'easeOut', duration: 1.35, delay: 0.75 }}
      style={{ opacity: status ? '1' : '0' }}
    >
      {menuItems.map((item, index) => (
        <motion.li variants={menuItemVariants} key={index}>
          <FadeLink linkTo={item.path}>{item.text}</FadeLink>
        </motion.li>
      ))}
    </motion.ul>
  </Cont>
);

export default SideMenu;
