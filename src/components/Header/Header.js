import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuContext from "../MenuContext";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { VscMail as Mail } from "react-icons/vsc";
import { RiUserLine as User } from "react-icons/ri";
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
  z-index: 20;
  display: flex;
  align-items: center;
  max-width: 1580px;
  font-size: 13px;
  height: 75px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  .header__links {
    position: absolute;
    height: 50px;
    top: 12px;
    right: 75px;
    display: flex;
    gap: 0 15px;
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

  .headerlink {
    min-width: 40px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      font-size: 30px;
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
        <div className="header__links">
          {/* {isAuthenticated() ? (
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
              >
                Log Out
              </a>
            </>
          ) : null} */}
          <Link className="headerlink" to="/dashboard">
            <User />
            <span>Dash</span>
          </Link>
          <Link className="headerlink" to="/contact">
            <Mail />
            <span>Contact</span>
          </Link>
        </div>

        {children}
      </HeaderStyles>
      <SideMenu />
    </>
  );
};

export default Header;
