import { graphql, useStaticQuery } from "gatsby";

const useAllTechItems = () => {
  const {
    allContentfulTechItem: { nodes },
  } = useStaticQuery(graphql`
    query allTechItemLinkQuery {
      allContentfulTechItem {
        nodes {
          techItemImage {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  return nodes;
};

export default useAllTechItems;
