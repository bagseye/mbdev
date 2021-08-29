import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuContext from "../MenuContext";
import {
  VscAccount as ProfileIcon,
  VscGithub as GitIcon,
} from "react-icons/vsc";
import { BsEnvelope as MailIcon } from "react-icons/bs";
import { IoExitOutline as ExitIcon } from "react-icons/io5";

import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { HeaderIcon } from "../../styles/IconStyles";
import { logout, isAuthenticated } from "../../utils/auth";

const HeaderStyles = styled.header`
  padding: 0 var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 20;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1580px;

  @media (min-width: 768px) {
    height: 80px;
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
  const [isOpen] = useContext(MenuContext);

  return (
    <>
      <HeaderStyles>
        <Logo />
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
        <HeaderIcon>
          <Link to="/dashboard">
            <motion.span
              variants={iconVariants}
              animate={isOpen ? "open" : "closed"}
            >
              <span className="sr-only">Dashboard</span>
              <ProfileIcon />
            </motion.span>
          </Link>
        </HeaderIcon>
        <HeaderIcon>
          <motion.a
            href="https://github.com/bagseye"
            target="_blank"
            rel="noopener noreferrer nofollow"
            variants={iconVariants}
            animate={isOpen ? "open" : "closed"}
          >
            <span className="sr-only">GitHub Profile</span>
            <GitIcon />
          </motion.a>
        </HeaderIcon>
        <HeaderIcon>
          <Link to="/contact">
            <motion.span
              variants={iconVariants}
              animate={isOpen ? "open" : "closed"}
            >
              <span className="sr-only">Contact</span>
              <MailIcon />
            </motion.span>
          </Link>
        </HeaderIcon>
        {children}
      </HeaderStyles>
      <SideMenu />
    </>
  );
};

export default Header;
