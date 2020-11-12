import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Grid from './Grid';
import FadeLink from './FadeLink';

const Container = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gridGap) var(--gridGap);

  hr {
    border: none;
    height: var(--borderSmall);
    background-color: rgba(255, 255, 255, 0.2);
    width: 100%;
    margin-bottom: 25px;
  }
`;

const Copyright = styled.div`
  grid-column: 1 / 4;
  margin-bottom: 0;
  letter-spacing: -1px;
  color: #aaa;
  font-size: 13px;
`;

const Privacy = styled.div`
  grid-column: 4 / 7;
  letter-spacing: -1px;

  a {
    font-size: 13px;
  }
`;

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
        <hr />
        <Grid>
          <Copyright>
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://www.linkedin.com/in/morgan-baker-developer-inverness/"
              target="_blank"
              rel="noopener noreferrer"
              className="link__std"
              style={{ fontSize: '13px' }}
            >
              {siteMetadata.author}
            </a>
          </Copyright>
          <Privacy>
            <FadeLink linkTo="/privacy">Privacy & Your Data</FadeLink>
          </Privacy>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
