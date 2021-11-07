import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuContext from "../MenuContext";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { logout, isAuthenticated } from "../../utils/auth";

const HeaderStyles = styled(motion.header)`
  padding: 10px var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 1580px;
  font-size: 13px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &.nav__scrolled {
    background-color: var(--background);
    box-shadow: -1px 5px 11px 0px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: var(--gridGap);
    width: calc(100% - (var(--gridGap) * 2));
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    height: 80px;
  }

  .dash__link,
  .quote__link,
  .email__link {
    font-weight: 300;
    flex: 0 0 auto;
  }

  .dash__link {
    order: 4;
    margin-left: 10px;
    margin-right: 10px;

    @media (min-width: 1024px) {
      margin-right: var(--gridGap);
      margin-left: var(--gridGap);
    }
  }

  .email__link {
    order: 5;
  }

  .quote__link {
    display: none;

    @media (min-width: 1024px) {
      display: inline-flex;
      order: 6;
      margin-left: var(--gridGap);
    }
  }
`;

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
      <HeaderStyles
        variants={headerVariants}
        animate={isOpen ? "open" : "closed"}
        className={scroll ? "nav__scrolled" : null}
      >
        <Logo className="logo__link" />
        {isAuthenticated() ? (
          <>
            <Link className="dash__link" to="/dashboard">
              Dashboard
            </Link>
            <a
              href="#logout"
              onClick={(e) => {
                logout();
                e.preventDefault();
              }}
              style={{ order: "3" }}
            >
              Log Out
            </a>
          </>
        ) : null}

        <Link className="quote__link" to="/contact">
          Request a quote
        </Link>
        <a className="email__link" href="mailto:hello@morganbaker.dev">
          hello@morganbaker.dev
        </a>

        {children}
      </HeaderStyles>
      <SideMenu />
    </>
  );
};

export default Header;
