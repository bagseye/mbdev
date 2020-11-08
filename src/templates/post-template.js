import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid';

const Border = styled.hr`
  border: none;
  height: var(--borderSmall);
  background-color: #fff;
  width: 100%;
  grid-column: 1 / 7;
  margin-top: 0;
  margin-bottom: 20px;

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

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const Date = styled.div`
  grid-column: 5 / 7;
  font-size: var(--paragraph);

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }
`;

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1440px;
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

  h2 {
    font-size: var(--paragraph);
    font-weight: 700;
  }

  h2,
  p {
    margin-top: 20px;
    margin-bottom: 20px;
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
      {/* <PageTransition> */}
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
            <Back className="link__std">Return to journal</Back>
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
