const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Candid Conversations",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    },
  ],
};
