import React from 'react';
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

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Banner
        description="I'm a web developer & designer from Inverness, "
        secondary="building fast, stylish websites using WordPress & GatsbyJS"
      />
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
  </Layout>
);

export default Index;
