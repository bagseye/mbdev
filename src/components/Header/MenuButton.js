import React, { useContext } from "react";
import styled from "styled-components";
import MenuContext from "../MenuContext";

const Container = styled.button`
  border: none;
  transition: opacity 0.5s ease, color 0.5s ease;
  font-size: var(--menuBtn);
  font-weight: 500;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  background-color: transparent;

  .burger {
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 15px;

    span {
      width: 30px;
      height: 1px;
      background-color: #000;
      left: 0;
      transition: opacity 0.5s ease, transform 0.3s ease, top 0.3s ease,
        background-color 0.3s 0.3s ease, bottom 0.3s ease;

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
        background-color: #fff;

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
        type="button"
        style={{
          color: isOpen ? "var(--background)" : "#000",
          transitionDelay: isOpen ? "0.75s" : "1.5s",
        }}
      >
        {isOpen ? "Close" : "Menu"}
        <div className={isOpen ? "burger burger-open" : "burger"}>
          <span />
          <span />
          <span />
        </div>
      </Container>
    </>
  );
};

export default MenuButton;
