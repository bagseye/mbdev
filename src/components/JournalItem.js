import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { VscArrowRight as Arrow } from 'react-icons/vsc';

const JournalItemStyles = styled.article`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 1 / 7;
  grid-gap: 0 var(--gridGap);
  margin-bottom: var(--margins);

  > h2 {
    margin-top: 0;
    grid-column: 1 / 4;
    font-size: var(--paragraph);
    letter-spacing: -0.5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    grid-column: 4 / 7;

    p {
      margin-top: 0;
      line-height: var(--paragraphLineHeight);
      color: #aaa;
    }

    > p,
    > time {
      font-size: var(--paragraph);
      margin-bottom: 50px;
    }

    a {
      font-size: var(--paragraph);
    }

    > time {
      color: #aaa;
      margin-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-template-columns: 1fr 1fr 1fr;

    > h2 {
      grid-column: 1 / 2;
    }

    > div {
      grid-column: 2 / 4;
    }
  }
`;

const getPosts = graphql`
  query {
    posts: allMdx(limit: 2) {
      edges {
        node {
          slug
          excerpt
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const JournalItem = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <>
      {posts.edges.map(({ node }) =>
        node.slug ? (
          <JournalItemStyles key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <div>
              <p>{node.excerpt}</p>
              <Link className="link__arrow" to={`journal/${node.slug}`}>
                Read article <Arrow className="arrow" />
              </Link>
            </div>
          </JournalItemStyles>
        ) : null
      )}
    </>
  );
};
export default JournalItem;
