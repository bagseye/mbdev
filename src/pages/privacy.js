import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid';

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const MainContent = styled.div`
  border-top: var(--borderSmall) solid #fff;
  padding-top: 20px;
  grid-column: 1 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const privacyPage = () => (
  <Layout>
    <SEO title="Privacy & Your Data" />
    <Hero>
      <Banner description="Privacy & your data" />
    </Hero>
    <BodyContainer>
      <Grid>
        <MainContent>
          <p>
            This site uses cookies, but only for the purpose of improving the
            user experience. This site uses Google Analytics for the purpose of
            understanding user behaviour and traffic numbers. Any data processed
            by Google Analytics is anonymised.
          </p>
          <p>
            Your email address will never be sent on to a marketing company and
            will only be used to reply to correspondence.
          </p>
        </MainContent>
      </Grid>
    </BodyContainer>
  </Layout>
);

export default privacyPage;
