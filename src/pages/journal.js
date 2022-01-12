import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button/Button";
import useAllStories from "../hooks/use-all-stories";
import TagFilter from "../components/TagFilter";

const JournalListStyles = styled.div`
  padding: 150px var(--gridGap) 0 var(--gridGap);
  max-width: 1580px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 180px;
  }

  .intro__area {
    max-width: 500px;
    margin-bottom: var(--sectionGap);

    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: 768px) {
      max-width: 750px;
    }

    > h1,
    > h4 {
      margin-top: 0;
    }
  }
`;

const JournalItem = styled(Link)`
  padding-top: var(--sectionGap);
  padding-bottom: var(--sectionGap);
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 500px;
  text-decoration: none;

  @media (min-width: 768px) {
    max-width: 750px;
  }

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: var(--titleLarge);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    line-height: var(--titleLargeLineHeight);
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-decoration-thickness: 0.2rem;
    transition: text-decoration-color 0.3s ease;

    @media (min-width: 768px) {
      text-decoration-thickness: 0.35rem;
    }
  }

  &:hover {
    h2 {
      text-decoration-color: rgba(142, 45, 226, 1);
    }
  }
`;

const journalsPage = () => {
  const allStories = useAllStories();

  return (
    <Layout>
      <JournalListStyles>
        <div className="container">
          <div className="intro__area">
            <h1>Web development journal and open-source project updates</h1>
            <h4>
              A deep-dive into my progress in web development, with a focus on
              WordPress, React, Gatsby and open-source.
            </h4>
          </div>
          <TagFilter />
          <div className="journal__content">
            {allStories.map((node, index) => {
              return (
                <JournalItem to={node.gatsbyPath} key={index}>
                  <h2>{node.title}</h2>
                  <h4>Posted on - {node.createdAt}</h4>
                  <Button as="span" text="Read Article" />
                </JournalItem>
              );
            })}
          </div>
        </div>
      </JournalListStyles>
    </Layout>
  );
};

export default journalsPage;
