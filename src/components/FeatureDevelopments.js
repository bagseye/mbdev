import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { VscArrowRight as Arrow } from 'react-icons/vsc';
import Grid from './Grid';
import Development from './Development';
import Heading from './Heading';
import FadeLink from './FadeLink';

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

const ViewMore = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--margins);
  font-size: var(--paragraph);
`;

const FeatureDevelopments = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(limit: 2, filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            slug
            excerpt
            images {
              fluid(quality: 90, maxWidth: 1000) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const developmentData = data.allContentfulProjects.edges;

  return (
    <Container>
      <Grid>
        <TitleArea>
          <Heading content="Featured " highlight="Developments" />
        </TitleArea>
      </Grid>
      <Grid>
        {developmentData.map(({ node }) =>
          node.slug ? <Development project={node} /> : null
        )}
      </Grid>
      <ViewMore>
        <FadeLink linkClass="link__arrow" linkTo="/projects">
          View all projects <Arrow className="arrow" />
        </FadeLink>
      </ViewMore>
    </Container>
  );
};

export default FeatureDevelopments;
