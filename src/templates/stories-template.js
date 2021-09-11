import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { graphql } from "gatsby";
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";

const StoryContent = styled.article`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: var(--gridGap);
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
  const {
    title,
    mainContent,
    mainContent: { raw },
  } = data.story;

  const options = {
    renderNode: {
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
    // Pass in the node and dril down to the required data
    // renderNode: {
    //   // Render the contentful rich content image
    //   "embedded-asset-block": (node) => (
    //     <div className="content-image">
    //       <img
    //         src={node.data.target.fields.file["en-US"].url}
    //         alt={node.data.target.fields.title["en-US"]}
    //       />
    //     </div>
    //   ),
    // },
  };

  return (
    <>
      <Seo />
      <Layout>
        <StoryContent>
          <h1>{title}</h1>
          {renderRichText(mainContent, options)}
        </StoryContent>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    story: contentfulStories(slug: { eq: $slug }) {
      title
      mainContent {
        raw
      }
    }
  }
`;

export default StoriesTemplate;
