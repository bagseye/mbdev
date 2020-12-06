const path = require('path');

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
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.slug}`,
      component: path.resolve('src/templates/project-template.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `journal/${node.frontmatter.slug}`,
      component: path.resolve('src/templates/post-template.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = '/dashboard/*';

    // Update the page
    createPage(page);
  }
};
