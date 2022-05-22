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
      <a href="mailto:hello@morganbaker.dev">hello@morganbaker.dev</a>
    </QuickLinksGlobalStyles>
  );
};

export default QuickLinks;
