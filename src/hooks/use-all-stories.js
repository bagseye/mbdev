import { graphql, useStaticQuery } from "gatsby";

const useAllStories = () => {
  const {
    allContentfulStories: { nodes },
  } = useStaticQuery(graphql`query allStoriesLinksQuery {
  allContentfulStories(sort: {createdAt: DESC}) {
    nodes {
      title
      gatsbyPath(filePath: "/journal/{contentfulStories.slug}")
      createdAt(formatString: "MMMM DD, YYYY")
      metadata {
        tags {
          name
          contentful_id
        }
      }
    }
  }
}`);

  return nodes;
};

export default useAllStories;
