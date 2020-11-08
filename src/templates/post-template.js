import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { VscArrowLeft as Arrow } from 'react-icons/vsc';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid';

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
  font-weight: 700;

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
    font-weight: 700;
    color: #fff;
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

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Back = styled(Link)`
  display: inline-block;
  margin-top: var(--margins);
  font-size: var(--paragraph);
`;

export default function PageTemplate({ data }) {
  const { title, date, author, description } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Hero>
        <Banner description={title} />
      </Hero>

      <BodyContainer>
        <Grid>
          <Border />
          <Author>Written by</Author>
          <Name>{author}</Name>
          <Date>{date}</Date>
          <MainArticle>
            <MDXRenderer>{body}</MDXRenderer>
            <Link className="link__arrow" to="/journal">
              <Arrow className="arrow__left" /> Return to journal
            </Link>
          </MainArticle>
        </Grid>
      </BodyContainer>
    </Layout>
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
