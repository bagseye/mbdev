import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import SEO from '../components/SEO';
import FullWidthImage from '../components/FullWidthImage/FullWidthImage';
import FeatureDevs from '../components/FeatureDevelopments';
import Layout from '../components/Layout';
import Journal from '../components/Journal';
import Grid from '../components/Grid';
import ContactMethods from '../components/ContactMethods';
import { SplitContainerStyles } from '../styles/SiteStyles';

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Banner description="I'm a web developer & designer from Inverness, building fast, stylish websites using WordPress & GatsbyJS" />
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
