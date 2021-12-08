import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql, Link } from "gatsby";
import { INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";
import JournalNavigation from "../../components/JournalNavigation";

const StoryContent = styled.article`
  width: 100%;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  padding: var(--gridGap);
  padding-top: 150px;

  @media (min-width: 768px) {
    padding-top: 300px;
  }

  .container-grid {
    > * {
      grid-column: 1 / 7;

      @media (min-width: 768px) {
        grid-column: 2 / 6;
      }
    }
  }

  .meta {
    margin-top: var(--gridGap);
    margin-bottom: var(--gridGap);
    padding-top: var(--gridGap);
    padding-bottom: var(--gridGap);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    p {
      margin: 0;
    }
  }

  .return {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: var(--gridGap);
    padding: var(--gridGap) 0;
  }

  h1,
  .published {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
    font-weight: 700;
  }

  .published {
    margin-bottom: 50px;

    @media (min-width: 768px) {
      margin-bottom: 100px;
    }
  }

  .story__author {
    max-width: 400px;
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-top: var(--gridGap);
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

const StoriesTemplate = ({ data, pageContext }) => {
  const {
    title,
    createdAt,
    mainContent,
    updatedAt,
    mainContent: { raw },
  } = data.storiesPage;

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
  };

  return (
    <>
      <Seo title={title} description={title} />
      <Layout>
        <StoryContent>
          <div className="container-grid">
            <h1>{title}</h1>
            <p className="published">Posted on {createdAt}</p>
            {renderRichText(mainContent, options)}
            <hr />
            <aside className="story__author">
              <h3>Written by Morgan Baker</h3>
              <h4>First posted on {createdAt}</h4>
              <p>
                I'm a front end developer from Inverness, working with WordPress
                and Gatsby. Take a look at my recent projects{" "}
                <Link to="/projects">here</Link>.
              </p>
            </aside>
          </div>
        </StoryContent>
        {/* <JournalNavigation next={nextProject} /> */}
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
      }
    }
  }
`;

export default StoriesTemplate;
