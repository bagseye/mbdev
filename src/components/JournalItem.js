import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { VscArrowRight as Arrow } from "react-icons/vsc";
import FadeLink from "./FadeLink";

const JournalItemStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 1 / 7;
  grid-gap: 0 var(--gridGap);
  margin-bottom: var(--margins);

  > h2 {
    margin-top: 0;
    grid-column: 1 / 7;
    font-size: var(--h2);
    letter-spacing: -0.5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 7;

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
    > h2 {
      grid-column: 1 / 3;
    }

    > div {
      grid-column: 4 / 7;
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
            <h2>
              <FadeLink linkTo={`journal/${node.slug}`}>
                {node.frontmatter.title}
              </FadeLink>
            </h2>
            <div>
              <p>{node.excerpt}</p>
              <FadeLink linkClass="link__arrow" linkTo={`journal/${node.slug}`}>
                Read article <Arrow className="arrow" />
              </FadeLink>
            </div>
          </JournalItemStyles>
        ) : null
      )}
    </>
  );
};
export default JournalItem;
