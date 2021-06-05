import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

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
            {siteMetadata.author}
        </Copyright>
        <Privacy>
          <Link to="/privacy">Privacy & Your Data</Link>
        </Privacy>
      </Container>
    </>
  );
};

export default Footer;
