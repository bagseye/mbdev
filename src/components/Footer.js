import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import FadeLink from "./FadeLink";

const Container = styled.div`
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gridGap) var(--gridGap);
  display: flex;
  flex-wrap: wrap;
`;

const Copyright = styled.div`
  margin-bottom: 0;
  margin-right: 30px;
`;

const Privacy = styled.div``;

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
    <>
      <Container>
        <Copyright>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/morgan-baker-developer-inverness/"
            target="_blank"
            rel="noopener noreferrer"
            className="link__std"
          >
            {siteMetadata.author}
          </a>
        </Copyright>
        <Privacy>
          <FadeLink linkTo="/privacy">Privacy & Your Data</FadeLink>
        </Privacy>
      </Container>
    </>
  );
};

export default Footer;
