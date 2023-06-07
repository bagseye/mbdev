import React from "react";
import { BsLinkedin as LinkedIn } from "react-icons/bs";
import { QuickLinksGlobalStyles } from "./HeaderStyles";
import SocialLink from "../SocialLink/SocialLink";

const QuickLinks = () => {
  return (
    <QuickLinksGlobalStyles>
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
