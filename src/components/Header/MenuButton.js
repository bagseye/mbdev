import React, { useContext } from "react";
import styled from "styled-components";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";

const Container = styled(motion.button)`
  border: none;
  transition: opacity 0.5s ease, color 0.5s ease;
  font-size: var(--menuBtn);
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding-left: 0;
  order: 2;
  justify-content: flex-end;
  flex: 0 0 30%;

  @media (min-width: 1024px) {
    flex-basis: auto;
    order: 7;
    margin-left: var(--gridGap);
  }

  .burger {
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 15px;

    span {
      width: 30px;
      height: 1px;
      left: 0;
      transition: opacity 0.5s ease, transform 0.3s ease, top 0.3s ease,
        background-color 0.3s ease, bottom 0.3s ease;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        position: absolute;
      }

      &:nth-child(1) {
        transform: rotate(0);
        top: 20%;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(3) {
        bottom: 20%;
      }
    }

    &.burger-open {
      span {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 15px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 15px;
        }
      }
    }
  }

  &:active {
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }
`;

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
      <Container
        onClick={toggleNav}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        variants={menuButtonVariants}
        animate={isOpen ? "open" : "closed"}
      >
        {isOpen ? "Close" : "Menu"}
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
        </div>
      </Container>
    </>
  );
};

export default MenuButton;
