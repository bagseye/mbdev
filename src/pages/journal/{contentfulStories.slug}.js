import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql } from "gatsby";
import Button from "../../components/Button/Button";
import RichText from "../../components/RichText";
import TagItem from "../../components/TagItems/TagItem";
import { TagItemsGlobalStyles } from "../../components/TagItems/TagItemsStyles";
import Author from "../../components/Author/Author";

const StoriesTemplate = ({ data }) => {
  const { title, createdAt, mainContent, metadata } = data.storiesPage;
  const { tags } = metadata;

  return (
    <>
      <Seo title={title} description={title} />
      <Layout>
        <div className="container topgap">
          <div className="container__blog">
            <h4 className="published">Posted on {createdAt}</h4>
            <h1>{title}</h1>
            <hr />
            <RichText richText={mainContent} />
            <hr />
            <div>
              <h3>Categorised under</h3>
              <TagItemsGlobalStyles>
                <div className="tagfilter__container">
                  {tags.map((item) => {
                    return <TagItem id={item.contentful_id} name={item.name} />;
                  })}
                </div>
              </TagItemsGlobalStyles>
            </div>
            <Author />
            <Button to="/journal" text="To journal home" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const data = graphql`
  query StoriesPageQuery($id: String) {
    storiesPage: contentfulStories(id: { eq: $id }) {
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      updatedAt(formatString: "MMMM DD, YYYY")
      mainContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            gatsbyImageData(
              width: 750
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            __typename
          }
        }
      }
      metadata {
        tags {
          contentful_id
          name
        }
      }
    }
  }
`;

export default StoriesTemplate;
