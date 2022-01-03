import { graphql, useStaticQuery } from "gatsby";

const useAllProjects = () => {
  const {
    allContentfulProjects: { nodes },
  } = useStaticQuery(graphql`
    query allProjectsLinkQuery {
      allContentfulProjects {
        nodes {
          name
          gatsbyPath(filePath: "/projects/{contentfulProjects.slug}")
          excerpt
          images {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  return nodes;
};

export default useAllProjects;
