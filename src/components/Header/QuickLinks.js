import React from "react";
import { BsLinkedin as LinkedIn } from "react-icons/bs";
import { IoExitOutline as Exit } from "react-icons/io5";
import { QuickLinksGlobalStyles } from "./HeaderStyles";
import { logout, isAuthenticated } from "../../utils/auth";
import SocialLink from "../SocialLink/SocialLink";

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
      <SocialLink 
        type="Person" 
        prop="url" 
        link="https://www.linkedin.com/in/morgan-baker-development/"
        relation={['me', 'noopener', 'noreferrer']}
        classes="headerlink"
      >
        <LinkedIn />
      </SocialLink>
      <div itemScope itemType="http://schema.org/LocalBusiness">
        <a href="mailto:hello@morganbaker.dev">
          <span itemProp="email">hello@morganbaker.dev</span>
        </a>
      </div>
    </QuickLinksGlobalStyles>
  );
};

export default QuickLinks;
