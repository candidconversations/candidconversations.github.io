import { graphql, Link } from "gatsby";
import * as React from "react";
import ReactHtmlParser from "react-html-parser";

import Layout from "@components/layout";

export const query = graphql`
  query PostBySlug($id: StringQueryOperatorInput = {}) {
    markdownRemark(id: $id) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
      }
      html
    }
  }
`;

const Post = ({ data }) => {
  const post = {
    ...data.markdownRemark.frontmatter,
    html: data.markdownRemark.html,
  };
  return (
    <>
      <Layout title={post.title}>
        <nav>
          <Link to="/">*</Link>
        </nav>
        <main>
          <header>
            <p>{post.date}</p>
            <h1>{post.title}</h1>
          </header>
          <article>{ReactHtmlParser(post.html)}</article>
        </main>
      </Layout>
    </>
  );
};

export default Post;
