import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import RichText from "../../components/RichText";
import TagItem from "../../components/TagItems/TagItem";
import { TagItemsGlobalStyles } from "../../components/TagItems/TagItemsStyles";

const StoryContent = styled.article`
  width: 100%;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  padding: 150px var(--gridGap) var(--gridGap) var(--gridGap);

  @media (min-width: 768px) {
    padding-top: 180px;
  }

  .container {
    max-width: 500px;
    margin-left: 0;

    @media (min-width: 768px) {
      max-width: 750px;
    }
  }

  .story__author,
  hr {
    margin-top: calc(var(--gridGap) * 2);
    margin-bottom: calc(var(--gridGap) * 2);
  }
`;

const StoriesTemplate = ({ data }) => {
  const { title, createdAt, mainContent, metadata } = data.storiesPage;
  const { tags } = metadata;

  return (
    <>
      <Seo title={title} description={title} />
      <Layout>
        <StoryContent>
          <div className="container">
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
            <aside className="story__author">
              <h3>Written by Morgan Baker</h3>
              <p>
                I'm a front end developer from Inverness, working with WordPress
                and Gatsby. Take a look at my recent projects{" "}
                <Link to="/projects">here</Link>.
              </p>
            </aside>

            <Button to="/journal" text="To journal home" />
          </div>
        </StoryContent>
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
