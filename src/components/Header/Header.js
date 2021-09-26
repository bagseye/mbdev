import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuContext from "../MenuContext";
import { IoExitOutline as ExitIcon } from "react-icons/io5";

import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { HeaderIcon } from "../../styles/IconStyles";
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

  .email__link {
    order: 3;
    flex: 0 0 70%;
    font-weight: 300;

    @media (min-width: 1024px) {
      order: 3;
      flex-basis: auto;
      margin-left: var(--gridGap);
    }
  }

  .quote__link {
    order: 4;
    display: none;
    font-weight: 300;

    @media (min-width: 1024px) {
      display: inline-flex;
      order: 2;
      flex: 0 0 auto;
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
            <HeaderIcon>
              <motion.a
                variants={iconVariants}
                animate={isOpen ? "open" : "closed"}
                href="#logout"
                onClick={(e) => {
                  logout();
                  e.preventDefault();
                }}
              >
                <span className="sr-only">Log Out</span>
                <ExitIcon style={{ transform: "rotate(180deg)" }} />
              </motion.a>
            </HeaderIcon>
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
