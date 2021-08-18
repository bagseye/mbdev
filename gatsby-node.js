const path = require("path");

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
      agency: allContentfulAgency {
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
  data.agency.edges.forEach(({ node }) => {
    createPage({
      path: `dashboard/${node.slug}`,
      component: path.resolve("src/templates/agency-template.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";

    createPage(page);
  }
};
