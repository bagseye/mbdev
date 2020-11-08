import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import SEO from '../components/SEO';
import FullWidthImage from '../components/FullWidthImage/FullWidthImage';
import FeatureDevs from '../components/FeatureDevelopments';
import Layout from '../components/Layout';
import Journal from '../components/Journal';
import Grid from '../components/Grid';
import ContactMethods from '../components/ContactMethods';

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const Index = () => {
  const queryResponse = useStaticQuery(data);

  return (
    <Layout>
      <PageTransition>
        <SEO title="Home" />
        <Hero>
          <Banner description={queryResponse.site.siteMetadata.description} />
        </Hero>
        <FullWidthImage />
        <About id="about" />
        <FeatureDevs />
        <SplitContainerStyles>
          <Grid>
            <Journal />
            <ContactMethods />
          </Grid>
        </SplitContainerStyles>
      </PageTransition>
    </Layout>
  );
};

const data = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Index;
