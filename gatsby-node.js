const path = require("path");

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";

    // Update the page.
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      projects: allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
      service: allContentfulService {
        edges {
          node {
            slug
          }
        }
      }
      journal: allContentfulStories {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.slug}`,
      component: path.resolve("src/templates/project-template.js"),
      context: {
        slug: node.slug,
      },
    });
  });
  data.service.edges.forEach(({ node }) => {
    createPage({
      path: `services/${node.slug}`,
      component: path.resolve("src/templates/service-template.js"),
      context: {
        slug: node.slug,
      },
    });
  });
  data.journal.edges.forEach(({ node }) => {
    createPage({
      path: `journal/${node.slug}`,
      component: path.resolve("src/templates/stories-template.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
