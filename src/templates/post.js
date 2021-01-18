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
        <nav className="border-black border-b border-r content-center flex h-12 items-center justify-center w-12">
          <Link className="relative text-4xl top-2" to="/">
            *
          </Link>
        </nav>
        <main>
          <header className="mb-8 p-12 text-center max-w-prose mx-auto">
            <p className="mb-2">{post.date}</p>
            <h1 className="font-serif leading-extra-none text-5xl tracking-tight">
              {post.title}
            </h1>
          </header>
          <article className="mx-auto px-12 max-w-prose mb-48">
            {ReactHtmlParser(post.html)}
          </article>
        </main>
      </Layout>
    </>
  );
};

export default Post;
