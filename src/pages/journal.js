import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { VscArrowRight as Arrow } from 'react-icons/vsc';
import Banner from '../components/Banner/Banner';
import Grid from '../components/Grid';
import Layout from '../components/Layout';

const SplitContainerStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
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
    background-color: rgba(255, 255, 255, 0.2);
    width: 100%;
    margin-bottom: 25px;
  }

  > h2 {
    grid-column: 1 / 4;
    font-size: var(--paragraph);
    margin-top: 0;
    letter-spacing: -0.5px;
  }

  > div {
    grid-column: 4 / 7;
    display: flex;
    flex-direction: column;

    p {
      color: #aaa;
      margin-top: 0;
      line-height: var(--paragraphLineHeight);
    }

    p,
    time {
      margin-bottom: 50px;
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
    allMdx {
      edges {
        node {
          slug
          excerpt
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`;

const journalPage = ({ data }) => {
  const item = data.allMdx.edges;

  return (
    <>
      <Layout>
        <Banner description="Journal" />
        <SplitContainerStyles>
          <Grid>
            {item.map(({ node }) =>
              node.slug ? (
                <JournalPageItem key={node.id}>
                  <hr />
                  <h2>
                    <Link to={node.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <div>
                    <p>{node.excerpt}</p>
                    <Link className="link__arrow" to={node.slug}>
                      View all projects <Arrow className="arrow" />
                    </Link>
                  </div>
                </JournalPageItem>
              ) : null
            )}
          </Grid>
        </SplitContainerStyles>
      </Layout>
    </>
  );
};
export default journalPage;
