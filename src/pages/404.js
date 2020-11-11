import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid';

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const MainContent = styled.div`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  grid-column: 1 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  color: #aaa;

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const error = () => (
  <Layout>
    <SEO title="Error" />
    <Hero>
      <Banner description="Page not found" />
    </Hero>
    <BodyContainer>
      <Grid>
        <MainContent>
          <p>This page has moved or no longer exists.</p>
          <p>
            Please choose another option from the menu above, or to return home,
            press the button below.
          </p>
          <Link className="link__std" to="/">
            Return Home
          </Link>
        </MainContent>
      </Grid>
    </BodyContainer>
  </Layout>
);

export default error;
