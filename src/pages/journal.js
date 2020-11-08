import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import Grid from '../components/Grid';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const JournalPageItem = styled.article`
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);
  margin-bottom: var(--margins);

  > hr {
    grid-column: 1 /7;
    border: none;
    height: var(--borderSmall);
    background-color: #fff;
    width: 100%;
    margin-bottom: 20px;
  }

  > h2 {
    grid-column: 1 / 4;
    font-size: var(--paragraph);
    margin-top: 0;
  }

  > div {
    grid-column: 4 / 7;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 0;
      line-height: var(--paragraphLineHeight);
    }

    p,
    time {
      margin-bottom: 20px;
    }

    time {
      font-weight: 700;
      color: #777;
    }

    p,
    time,
    a {
      font-size: var(--paragraph);
    }
  }

  @media (min-width: 768px) {
    > hr {
      grid-column: 1 / 5;
    }

    > h2 {
      grid-column: 1 / 2;
    }

    > div {
      grid-column: 3 / 5;
    }
  }
`;

export const getProjects = graphql`
  query {
    allContentfulPosts {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          introduction
          postId: contentful_id
        }
      }
    }
  }
`;

const journalPage = ({ data }) => {
  const item = data.allContentfulPosts.edges;

  return (
    <>
      <Layout>
        <Hero>
          <Banner description="Journal" />
        </Hero>
        <SplitContainerStyles>
          <Grid>
            {item.map(({ node }) => (
              <JournalPageItem key={node.postId}>
                <hr />
                <h2>{node.title}</h2>
                <div>
                  <p>{node.introduction}</p>
                  <time>{node.published}</time>
                  <Link className="link__std" to={node.slug}>
                    Read Article
                  </Link>
                </div>
              </JournalPageItem>
            ))}
          </Grid>
        </SplitContainerStyles>
      </Layout>
    </>
  );
};
export default journalPage;
