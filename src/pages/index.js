import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
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
import FadeIn from '../components/FadeIn';

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const Index = () => {
  const queryResponse = useStaticQuery(data);

  const [ref, inView] = useInView({
    threshold: 0.35,
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner description={queryResponse.site.siteMetadata.description} />
      </Hero>
      <FullWidthImage />
      <About id="about" />
      <FeatureDevs />
      <SplitContainerStyles>
        <FadeIn>
          <Grid>
            <Journal />
            <ContactMethods />
          </Grid>
        </FadeIn>
      </SplitContainerStyles>
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
