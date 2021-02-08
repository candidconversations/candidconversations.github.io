const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const rawSlug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "lang",
      value: rawSlug.includes("es/") ? "es" : "en",
    });
    createNodeField({
      node,
      name: "slug",
      value: rawSlug.replace("es/", ""),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
              lang
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path:
        node.fields.lang === "es"
          ? `es/posts${node.fields.slug}`
          : `posts${node.fields.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id
      },
    });
  });
};
