import React from "react";
import { Link } from "gatsby";
import { VscMail as Mail } from "react-icons/vsc";
import { RiUserLine as User } from "react-icons/ri";
import { IoExitOutline as Exit } from "react-icons/io5";
import { QuickLinksGlobalStyles } from "./HeaderStyles";
import { logout, isAuthenticated } from "../../utils/auth";

const QuickLinks = () => {
  return (
    <QuickLinksGlobalStyles>
      {isAuthenticated() ? (
        <a
          className="headerlink"
          href="#logout"
          onClick={(e) => {
            logout();
            e.preventDefault();
          }}
        >
          <Exit />
          <span>Log Out</span>
        </a>
      ) : null}
      <Link className="headerlink" to="/dashboard">
        <User />
        <span>Dash</span>
      </Link>
      <Link className="headerlink" to="/contact">
        <Mail />
        <span>Contact</span>
      </Link>
    </QuickLinksGlobalStyles>
  );
};

export default QuickLinks;
