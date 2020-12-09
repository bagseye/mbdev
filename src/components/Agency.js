import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Banner from './Banner/Banner';
import Development from './Development';
import Grid from './Grid';
import Heading from './Heading';

const Container = styled.section`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleArea = styled.div`
  grid-column: 1 / 7;
  margin: 0 0 var(--margins) 0;
`;

const Agency = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgency {
        edges {
          node {
            name
            slug
            excerpt
            technology
            website
            richDescription {
              json
            }
            images {
              description
              fluid(maxWidth: 2000) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const agencyData = data.allContentfulAgency.edges;
  return (
    <>
      <Banner
        description="Work completed as part of a team of developers. "
        secondary="Please view these below and my contributions"
      />
      <Container>
        <Grid>
          <TitleArea>
            <Heading content="Agency " highlight="Developments" />
          </TitleArea>
        </Grid>
        <Grid>
          {agencyData.map(({ node }) =>
            node.slug ? <Development project={node} /> : null
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Agency;
