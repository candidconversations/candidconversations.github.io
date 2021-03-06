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
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const props = {
    lang: "en",
    posts: data.allMarkdownRemark.nodes.filter(
      node => node.fields.lang === "en"
    ),
  };
  return <Index {...props} />;
};

export default IndexPage;
