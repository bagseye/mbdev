import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

const PostsStyles = styled.section`
  padding: 0 var(--gridGap);
  max-width: 1580px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .posts__content {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }
  }

  h2 {
    font-size: var(--titleLarge);
    line-height: var(--titleLargeLineHeight);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    color: #fff;

    a {
      font-weight: 700;
      text-decoration-thickness: 0.2rem;

      @media (min-width: 768px) {
        text-decoration-thickness: 0.35rem;
      }
    }
  }
`;

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allContentfulStories {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);
  return (
    <PostsStyles>
      <div className="container-grid">
        <div className="posts__content">
          <motion.h2
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            Read my recent entry -{" "}
            <Link to={data.allContentfulStories.edges[0].node.slug}>
              {data.allContentfulStories.edges[0].node.title}
            </Link>
            . Or, you can see past entries <Link to="/journal">here</Link>.
          </motion.h2>
        </div>
      </div>
    </PostsStyles>
  );
};

export default Posts;
