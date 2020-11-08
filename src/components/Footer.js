import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Grid from './Grid';

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gridGap) var(--gridGap);

  hr {
    border: none;
    height: var(--borderSmall);
    background-color: #fff;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Copyright = styled.div`
  grid-column: 1 / 4;
  margin-bottom: 0;
  font-weight: 700;
  letter-spacing: -1px;
  color: #777;
  font-size: var(--paragraph);

  a {
    font-size: var(--paragraph);
    color: #777;
    text-decoration: none;
    transition: color 0.75s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Privacy = styled.div`
  grid-column: 4 / 7;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: #777;
    transition: color 0.75s ease;
    font-size: var(--paragraph);
    font-weight: 700;

    &:hover {
      color: #fff;
    }
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
            >
              {siteMetadata.author}
            </a>
          </Copyright>
          <Privacy>
            <Link to="/privacy">Privacy & Your Data</Link>
          </Privacy>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
