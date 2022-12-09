import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql } from "gatsby";
import Button from "../../components/Button/Button";
import RichText from "../../components/RichText";
import TagItem from "../../components/TagItems/TagItem";
import { TagItemsGlobalStyles } from "../../components/TagItems/TagItemsStyles";
import Author from "../../components/Author/Author";
import ServicesContainer from "../../components/Services/ServicesContainer";
import { Helmet } from "react-helmet";

const StoriesTemplate = ({ data }) => {
  const { title, createdAt, updatedAt, mainContent, metadata } = data.storiesPage;
  const { tags } = metadata;
  const dateTimeFormat = new Date(Date.parse(createdAt));
  const updatedAtFormat = new Date(Date.parse(updatedAt));

  return (
    <>
      <Seo title={title} description={title} />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "headline": "${title}",
              "datePublished": "${createdAt}",
              "dateModified": "${updatedAtFormat}",
              "author": [{
                "@type": "Person",
                "name": "Morgan Baker",
                "jobTitle": "Web Developer",
                "url": "https://www.linkedin.com/in/morgan-baker-development/"
              }]
            }
          `}
        </script>
      </Helmet>
      <Layout>
        <div className="container topgap">
          <div className="container__blog">
            <h4 className="published">Posted on <time dateTime={dateTimeFormat}>{createdAt}</time></h4>
            <h1>{title}</h1>
            <hr />
            <RichText richText={mainContent} />
            <hr />
            <div>
              <h3>Categorised under</h3>
              <TagItemsGlobalStyles>
                <div className="tagfilter__container">
                  {tags.map((item) => {
                    return <TagItem id={item.contentful_id} name={item.name} />;
                  })}
                </div>
              </TagItemsGlobalStyles>
            </div>
            <Author />
            <Button to="/journal" text="To journal home" />
          </div>
        </div>
        <div className="container sectiongap">
          <div className="content__area">
            <h2 className="as__h1">Looking for web design or branding serivces in Inverness?</h2>

            <p className="leadin">
              Choose from the options below, if you are looking for expert web development, or finely crafted branding services.
            </p>
          </div>
        </div>
        <ServicesContainer />
      </Layout>
    </>
  );
};

export const data = graphql`
  query StoriesPageQuery($id: String) {
    storiesPage: contentfulStories(id: { eq: $id }) {
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      updatedAt(formatString: "MMMM DD, YYYY")
      mainContent {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            description
            gatsbyImageData(
              width: 750
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            __typename
          }
        }
      }
      metadata {
        tags {
          contentful_id
          name
        }
      }
    }
  }
`;

export default StoriesTemplate;
