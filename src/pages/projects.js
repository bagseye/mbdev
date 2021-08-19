import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Development from "../components/Development";
import { SplitContainerStyles } from "../styles/GlobalStyles";
import GeneralContent from "../components/GeneralContent/GeneralContent";

const ExtendedSplitContainerStyles = styled(SplitContainerStyles)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gridGap);
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
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP]
              quality: 90
            )
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
      <div className="container__body">
        <GeneralContent title="Projects" />
      </div>
      <ExtendedSplitContainerStyles>
        {developmentData.map(({ node }) =>
          node.slug ? (
            <Development key={node.name} noPrefix project={node} />
          ) : null
        )}
      </ExtendedSplitContainerStyles>
    </>
  );
};

export default projectsPage;
