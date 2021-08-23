import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        author
        siteUrl
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, noIndex }) => {
  const { site } = useStaticQuery(getData);

  const { siteDesc, siteTitle, siteUrl, image, twitterUsername } =
    site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="image" content={image} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image" content="400" />
      <meta property="og:image:height" content="300" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "${siteUrl}",
            "name": "${siteTitle}",
            "image": "${siteUrl}/static${image}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
