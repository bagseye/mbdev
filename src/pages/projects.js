import React from "react";
import { graphql } from "gatsby";
import Development from "../components/Development";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";

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
    <Layout>
      {developmentData.map(({ node }) =>
        node.slug ? (
          <Development key={node.name} noPrefix project={node} />
        ) : null
      )}
      <ContactMethods />
    </Layout>
  );
};

export default projectsPage;
