import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql, Link } from "gatsby";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StoriesTemplate = ({ data }) => {
  const { title, createdAt, mainContent } = data.storiesPage;

  const options = {
    renderMark: {
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },

    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData } = node.data.target;
        return (
          <GatsbyImage
            className="contentimg"
            image={getImage(gatsbyImageData)}
          />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <IframeContainer>
              <iframe
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
        } else if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <IframeContainer>
              <iframe
                src={node.data.uri}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
        } else if (node.data.uri.includes("giphy.com/embed")) {
          return (
            <iframe
              src={node.data.uri}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          );
        }
      },
    },
  };

  return (
    <>
      <Seo title={title} description={title} />
      <Layout>
        <StoryContent>
          <div className="container">
            <h4 className="published">Posted on {createdAt}</h4>
            <h1>{title}</h1>
            <hr />
            {renderRichText(mainContent, options)}
            <hr />
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
            gatsbyImageData(
              width: 750
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            __typename
          }
        }
      }
    }
  }
`;

export default StoriesTemplate;
