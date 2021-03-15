import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { VscArrowRight as Arrow } from "react-icons/vsc";
import Development from "./Development";
import Heading from "./Heading";

const FeaturedProjectsStyles = styled.section`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin: var(--margins) auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0 calc(var(--gridGap) * 2);
  content-visibility: auto;
  contain-intrinsic-size: 600px;

  .title,
  .view-more {
    flex: 0 0 100%;
  }

  .view-more {
    display: flex;
    margin-top: var(--margins);
    justify-content: flex-end;
    margin-bottom: var(--margins);
  }
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
              description
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
                quality: 90
                aspectRatio: 1.333
              )
            }
          }
        }
      }
    }
  `);

  const developmentData = data.allContentfulProjects.edges;

  return (
    <FeaturedProjectsStyles>
      <div className="title">
        <Heading content="Recent " highlight="Projects" />
      </div>
      {developmentData.map(({ node }) =>
        node.slug ? (
          <Development key={node.name} base="projects" project={node} />
        ) : null
      )}
      <div className="view-more">
        <Link className="link__arrow" to="/projects">
          View all projects <Arrow className="arrow" />
        </Link>
      </div>
    </FeaturedProjectsStyles>
  );
};

export default FeatureDevelopments;
