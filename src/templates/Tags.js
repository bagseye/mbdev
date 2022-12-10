import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostContainer from "../components/Posts/PostContainer";
import Post from "../components/Posts/Post";

const SingleTagPage = ({ data, pageContext }) => {
  const { catStory } = data;

  return (
    <Layout>
      <div className="container topgap">
        <div className="intro__area">
          <h1>{pageContext.name} Categorised Journal Items</h1>
        </div>
      </div>
      <PostContainer noscroll={true}>
        {catStory.nodes.map((node, i) => {
          return <Post key={i} node={node} />;
        })}
      </PostContainer>
    </Layout>
  );
};

export default SingleTagPage;

export const query = graphql`
  query ($id: String!) {
    catStory: allContentfulStories(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $id } } } }
      }
    ) {
      nodes {
        title
        createdAt(formatString: "MMMM DD, YYYY")
        gatsbyPath(filePath: "/journal/{contentfulStories.slug}")
        metadata {
          tags {
            contentful_id
            name
          }
        }
      }
    }
  }
`;
