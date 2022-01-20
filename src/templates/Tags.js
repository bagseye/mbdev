import React from "react";
import { graphql } from "gatsby";
import JournalItem from "../components/Journal/JournalItem";
import { JournalListStyles } from "../components/Journal/JournalGlobalStyles";
import Layout from "../components/Layout";

const SingleTagPage = ({ data, pageContext }) => {
  const { catStory } = data;

  return (
    <Layout>
      <JournalListStyles className="topgap">
        <div className="container">
          <div className="intro__area">
            <h1>{pageContext.name} Categorised Journal Items</h1>
          </div>
          <div className="journal__content">
            {catStory.nodes.map((item, index) => {
              return (
                <JournalItem
                  key={index}
                  path={item.gatsbyPath}
                  title={item.title}
                  createdAt={item.createdAt}
                  tagsMeta={item.metadata.tags}
                />
              );
            })}
          </div>
        </div>
      </JournalListStyles>
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
