import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuContext from "../MenuContext";

import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { logout, isAuthenticated } from "../../utils/auth";

const HeaderStyles = styled.header`
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

  .dash__link {
    order: 4;
    flex: 0 0 auto;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 300;

    @media (min-width: 1024px) {
      flex-basis: auto;
      margin-right: var(--gridGap);
      margin-left: var(--gridGap);
    }
  }

  .email__link {
    order: 5;
    flex: 0 0 auto;
    font-weight: 300;

    @media (min-width: 1024px) {
      flex-basis: auto;
      /* margin-left: var(--gridGap); */
    }
  }

  .quote__link {
    display: none;
    font-weight: 300;

    @media (min-width: 1024px) {
      display: inline-flex;
      order: 6;
      flex: 0 0 auto;
      margin-left: var(--gridGap);
    }
  }
`;

const iconVariants = {
  open: {
    color: "var(--background)",
    transition: {
      delay: 1,
    },
  },
  closed: {
    color: "var(--primary)",
    transition: {
      delay: 0.5,
    },
  },
};

const Header = ({ children }) => {
  // Access state globally using context
  const { isOpen } = useContext(MenuContext);

  return (
    <>
      <HeaderStyles>
        <Logo className="logo__link" />
        {isAuthenticated() ? (
          <>
            <Link className="dash__link" to="/dashboard">
              Dashboard
            </Link>
            <motion.a
              variants={iconVariants}
              animate={isOpen ? "open" : "closed"}
              href="#logout"
              onClick={(e) => {
                logout();
                e.preventDefault();
              }}
              style={{ order: "3" }}
            >
              Log Out
            </motion.a>
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
