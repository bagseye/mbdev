import { graphql, useStaticQuery } from "gatsby";

const useAllAgency = () => {
  const {
    allContentfulAgency: { nodes },
  } = useStaticQuery(graphql`
    query allAgencyLinkQuery {
      allContentfulAgency {
        nodes {
          name
          gatsbyPath(filePath: "/agency/{contentfulAgency.slug}")
          excerpt
          slug
          images {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  return nodes;
};

export default useAllAgency;
