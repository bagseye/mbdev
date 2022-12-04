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
            "@type": "ProfessionalService",
            "name": "Morgan Baker Development",
            "founder": {
              "@type": "Person",
                "name": "Morgan Baker"
            },
            "foundingLocation": {
              "@type": "Place",
                "name": "Inverness"
            },
            "keywords": "Web Design, Web Development, WordPress",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Briargrove Terrace",
              "addressLocality": "Inverness",
              "addressRegion": "Highland",
              "postalCode": "IV2 5AB",
              "addressCountry": {
                "@type": "Country",
                "name": "Scotland"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Invernesss"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ecommerce Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gatsby Design & Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Whitelabel WordPress Development"
                  }
                }
              ]
            },
            "url": "https://www.morganbaker.dev",
            "telephone": "+447736592188",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
