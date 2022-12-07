import { graphql, useStaticQuery } from "gatsby";

const useFeaturedProjects = () => {
  const {
    allContentfulProjects: { nodes },
  } = useStaticQuery(graphql`
    query allFeaturedProjectsLinkQuery {
      allContentfulProjects(limit: 4, filter: { featured: { eq: true } }) {
        nodes {
          name
          gatsbyPath(filePath: "/projects/{contentfulProjects.slug}")
          excerpt
          images {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              quality: 90
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  return nodes;
};

export default useFeaturedProjects;
