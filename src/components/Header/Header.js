import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import MenuContext from "../MenuContext";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { VscMail as Mail } from "react-icons/vsc";
import { RiUserLine as User } from "react-icons/ri";
import { logout, isAuthenticated } from "../../utils/auth";
import { HeaderGlobalStyles } from "./HeaderStyles";

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
      <HeaderGlobalStyles
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
      </HeaderGlobalStyles>
      <SideMenu />
    </>
  );
};

export default Header;
