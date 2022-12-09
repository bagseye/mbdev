const path = require("path");

async function turnTagsIntoPages({ graphql, actions }) {
  // Get a template for the page
  const tagTemplate = path.resolve("./src/templates/Tags.js");

  // Query all tags
  const { data } = await graphql(`
    query {
      tags: allContentfulTag {
        nodes {
          name
          contentful_id
        }
      }
    }
  `);

  data.tags.nodes.forEach((tag) => {
    let slugifyName = tag.contentful_id.replace(
      /[A-Z]/g,
      (m) => "-" + m.toLowerCase()
    );
    actions.createPage({
      path: `category/${slugifyName}`,
      component: tagTemplate,
      context: {
        name: tag.name,
        id: tag.contentful_id,
      },
    });
  });
}
exports.createPages = async (params) => {
  const { actions } = params;
  actions.createSlice({
    id: `sideMenu`,
    component: require.resolve('./src/components/Header/SideMenu.js'),
  });
  actions.createSlice({
    id: `footerArea`,
    component: require.resolve('./src/components/Footer/Footer.js'),
  });
  actions.createSlice({
    id: `logoArea`,
    component: require.resolve('./src/components/Header/Logo.js'),
  });
  actions.createSlice({
    id: `quickQuote`,
    component: require.resolve('./src/components/QuickQuote/QuickQuote.js'),
  });
  await turnTagsIntoPages(params);
};

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
