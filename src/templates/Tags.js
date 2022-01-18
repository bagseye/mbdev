import React from "react";
import { graphql } from "gatsby";

const SingleTagPage = () => {
  return (
    <p>
      <span>Single Tag</span>
    </p>
  );
};

export default SingleTagPage;

export const query = graphql`
  query ($slug: String!) {
    catStory: contentfulStories(
      metadata: { tags: { contentful_id: { eq: $slug } } }
    ) {
      title
    }
  }
`;
