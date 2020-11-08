import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import Development from '../components/Development';
import Grid from '../components/Grid';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const getProjects = graphql`
  query {
    allContentfulProjects {
      edges {
        node {
          name
          slug
          excerpt
          images {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const projectsPage = ({ data }) => {
  const developmentData = data.allContentfulProjects.edges;

  return (
    <>
      <Layout>
        <Hero>
          <Banner description="Projects" />
        </Hero>
        <SplitContainerStyles>
          <Grid>
            {developmentData.map(({ node }) => (
              <Development noPrefix project={node} />
            ))}
          </Grid>
        </SplitContainerStyles>
      </Layout>
    </>
  );
};

export default projectsPage;
