import { graphql } from "gatsby";
import * as React from "react";

import Index from "@components/index";

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          lang
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          lang
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const props = {
    lang: "es",
    posts: data.allMarkdownRemark.nodes.filter(
      node => node.fields.lang === "es"
    ),
  };
  return <Index {...props} />;
};

export default IndexPage;
