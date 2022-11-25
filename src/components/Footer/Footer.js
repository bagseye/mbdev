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
        <div className="col col__contact">
          <address>
            Morgan Baker Development,
            <br />
            Inverness,
            <br />
            <div itemscope itemtype="http://schema.org/LocalBusiness">
              <a href="mailto:hello@morganbaker.dev">
                <span itemprop="email">hello@morganbaker.dev</span>
              </a>
              <a style={{display: 'block'}} href="tel:00447736592188">
                <span itemprop="telephone">07736 592 188</span>
              </a>
            </div>
          </address>
        </div>
        <div className="col__full">
          &copy; {new Date().getFullYear()} {siteMetadata.author} |{" "}
          <Link to="/privacy">Privacy & Your Data</Link> |{" "}
          <Link to="/credits">Credits</Link>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
