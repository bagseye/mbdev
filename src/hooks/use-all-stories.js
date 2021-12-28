import { graphql, useStaticQuery } from "gatsby";

const useAllStories = () => {
  const {
    allContentfulStories: { nodes },
  } = useStaticQuery(graphql`
    query allStoriesLinksQuery {
      allContentfulStories {
        nodes {
          title
          gatsbyPath(filePath: "/journal/{contentfulStories.slug}")
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `);

  return nodes;
};

export default useAllStories;
