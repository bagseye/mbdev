import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { VscArrowLeft as Arrow } from "react-icons/vsc";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import Grid from "../components/Grid";
import FadeLink from "../components/FadeLink";

const Border = styled.hr`
  border: none;
  height: var(--borderSmall);
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-column: 1 / 7;
  margin-top: 0;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Author = styled.div`
  grid-column: 1 / 3;
  font-size: var(--paragraph);
  font-weight: 500;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Name = styled.div`
  grid-column: 3 / 5;
  font-size: var(--paragraph);
  color: #aaa;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const Date = styled.div`
  grid-column: 5 / 7;
  font-size: var(--paragraph);
  color: #aaa;

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }
`;

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const MainArticle = styled.div`
  padding-top: var(--margins);
  width: 100%;
  grid-column: 1 / 7;
  margin-bottom: var(--margins);
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  color: #aaa;

  h2 {
    font-size: var(--paragraph);
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.5px;
  }

  h2,
  p,
  pre {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  pre {
    padding: 25px 15px;
    background-color: #111;
    border-radius: 4px;
    color: #aaa;
  }

  > *:first-child {
    margin-top: 0;
  }

  .link__arrow {
    margin-top: var(--margins);
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

export default function PageTemplate({ data }) {
  const { title, date, author, description } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <>
      <SEO title={title} description={description} />
      <Banner description={title} />

      <BodyContainer>
        <Grid>
          <Border />
          <Author>Written by</Author>
          <Name>{author}</Name>
          <Date>{date}</Date>
          <MainArticle>
            <MDXRenderer>{body}</MDXRenderer>
            <FadeLink linkClass="link__arrow" linkTo="/journal">
              <Arrow className="arrow__left" /> Return to journal
            </FadeLink>
          </MainArticle>
        </Grid>
      </BodyContainer>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        author
        date(formatString: "MMMM, Do, YYYY")
        description
      }
    }
  }
`;
