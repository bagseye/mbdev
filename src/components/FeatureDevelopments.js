import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Grid from './Grid';
import Development from './Development';
import Heading from './Heading';

const Container = styled.section`
  padding: 0 var(--gridGap);
  max-width: 1440px;
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
                ...GatsbyContentfulFluid_tracedSVG
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
        {developmentData.map(({ node }) => (
          <Development project={node} />
        ))}
      </Grid>
      <ViewMore>
        <Link className="link__std" to="/projects">
          View all projects
        </Link>
      </ViewMore>
    </Container>
  );
};

export default FeatureDevelopments;
