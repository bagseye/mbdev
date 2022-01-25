import { graphql, useStaticQuery } from "gatsby";

const useFeaturedStories = () => {
  const {
    allContentfulStories: { nodes },
  } = useStaticQuery(graphql`
    query allFeaturedStoriesLinksQuery {
      allContentfulStories(limit: 3) {
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
    }
  `);

  return nodes;
};

export default useFeaturedStories;
