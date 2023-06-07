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
