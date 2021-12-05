import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";

const JournalListStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1580px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .journal__content {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }
  }
`;

const JournalItem = styled(Link)`
  margin-bottom: var(--gridGap);
  display: block;
  h2,
  p {
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

export const getJournals = graphql`
  query {
    allContentfulStories {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

const journalsPage = ({ data }) => {
  const journalData = data.allContentfulStories.edges;

  return (
    <Layout>
      <JournalListStyles>
        <div className="container-grid">
          <div className="journal__content">
            {journalData.map(({ node }) => {
              return (
                <JournalItem>
                  <h2>
                    <Link to={`/journal/${node.slug}`}>{node.title}</Link>
                  </h2>
                  <p>Posted on - {node.createdAt}</p>
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
