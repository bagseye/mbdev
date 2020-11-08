import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const JournalItemStyles = styled.article`
  border-top: var(--borderSmall) solid #fff;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 1 / 7;
  grid-gap: 0 var(--gridGap);
  margin-bottom: var(--margins);

  > h2 {
    margin-top: 0;
    grid-column: 1 / 4;
    font-size: var(--paragraph);
  }

  > div {
    display: flex;
    flex-direction: column;
    grid-column: 4 / 7;

    p {
      margin-top: 0;
      line-height: var(--paragraphLineHeight);
    }

    > p,
    > time {
      font-size: var(--paragraph);
      margin-bottom: 20px;
    }

    a {
      font-size: var(--paragraph);
    }

    > time {
      font-weight: 700;
      color: #777;
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
            date(formatString: "MMMM Do, YYYY")
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
              <time>{node.frontmatter.date}</time>
              <Link to={node.slug} className="link__std">
                Read Article
              </Link>
            </div>
          </JournalItemStyles>
        ) : null
      )}
    </>
  );
};
export default JournalItem;
