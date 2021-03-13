/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Morgan Baker Dev",
    description:
      "I'm a web developer & designer from Inverness, building fast, stylish websites using WordPress & GatsbyJS",
    subline:
      "Coupling a love of design with web development I've created and continue to maintain a number of open-source themes",
    author: "Morgan Baker",
    twitterUsername: "@dave",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://www.morganbaker.dev",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.morganbaker.dev",
        sitemap: "https://www.morganbaker.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Morgan Baker Developer`,
    //     short_name: `MBDev`,
    //     description: `I'm a web developer & designer from Inverness, building fast, stylish websites using WordPress & GatsbyJS`,
    //     start_url: `/`,
    //     lang: `en`,
    //     background_color: `#1c1b1b`,
    //     theme_color: `#6f6f6f`,
    //     icon: `src/images/icon.png`,
    //     display: `standalone`,
    //   },
    // },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
