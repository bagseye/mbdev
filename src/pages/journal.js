import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { SplitContainerStyles } from "../styles/GlobalStyles";
import GeneralContent from "../components/GeneralContent/GeneralContent";
import Layout from "../components/Layout";

const ExtendedSplitContainerStyles = styled(SplitContainerStyles)`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gridGap);
`;

const JournalItem = styled(Link)`
  padding-top: var(--gridGap);
  padding-bottom: var(--gridGap);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: #fff;
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
      <div className="container__body">
        <GeneralContent title="Journal" />
      </div>
      <ExtendedSplitContainerStyles>
        {journalData.map(({ node }) => {
          return (
            <JournalItem to={`/journal/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>First published - {node.createdAt}</p>
            </JournalItem>
          );
        })}
      </ExtendedSplitContainerStyles>
    </Layout>
  );
};

export default journalsPage;
