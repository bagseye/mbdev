import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FooterStyles } from "./FooterStyles";
import { mainLinks as menuItems, serviceLinks } from "../../constants/links";

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <FooterStyles>
      <div className="container">
        <div className="col">
          <ul>
            {serviceLinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
            <li>
              <Link to="/dashboard">For Employers</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div itemScope itemType="http://schema.org/LocalBusiness" className="col col__contact">
          <address itemProp="address">
            Morgan Baker Development,
            <br />
            Inverness,
            IV2 5AB
          </address>
          <div>
            <a href="mailto:hello@morganbaker.dev" title="Email Address">
              <span itemProp="email">hello@morganbaker.dev</span>
            </a>
            <a style={{display: 'block'}} href="tel:00447736592188" title="Telephone Number">
              <span itemProp="telephone">07736 592 188</span>
            </a>
          </div>
        </div>
        <div className="col__full">
          &copy; {new Date().getFullYear()}{" "} 
          {siteMetadata.author}
          {" "}|{" "}
          <Link to="/privacy">Privacy & Your Data</Link> |{" "}
          <Link to="/credits">Credits</Link>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
