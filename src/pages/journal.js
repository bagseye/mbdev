import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import useAllStories from "../hooks/use-all-stories";

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
  margin-top: var(--sectionGap);
  margin-bottom: var(--sectionGap);
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 500px;

  @media (min-width: 768px) {
    max-width: 750px;
  }

  h2 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;
    font-weight: 700;

    a {
      font-weight: 700;
      text-decoration-thickness: 0.2rem;

      @media (min-width: 768px) {
        text-decoration-thickness: 0.35rem;
      }
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
          <div className="journal__content">
            {allStories.map((node, index) => {
              return (
                <JournalItem key={index}>
                  <h2>
                    <Link to={node.gatsbyPath}>{node.title}</Link>
                  </h2>
                  <h4>Posted on - {node.createdAt}</h4>
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
