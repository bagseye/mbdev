import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Development from "./Development";
import Layout from "./Layout";
import SEO from "./SEO";
import styled from "styled-components";

const ProjectsAreaTitle = styled.div`
  max-width: 1580px;
  padding: 0 var(--gridGap);
  margin: 150px auto;

  h1 {
    grid-column: 1 / 7;
  }
`;

const DashboardArea = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgency {
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

  const agencyData = data.allContentfulAgency.edges;
  return (
    <>
      <SEO title="Agency Projects" noIndex />
      <Layout>
        <ProjectsAreaTitle>
          <div className="container-grid">
            <h1>Agency Projects</h1>
          </div>
        </ProjectsAreaTitle>

        {agencyData.map(({ node }) =>
          node.slug ? (
            <Development key={node.name} noPrefix project={node} />
          ) : null
        )}
      </Layout>
    </>
  );
};

export default DashboardArea;
