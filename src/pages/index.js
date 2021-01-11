import { graphql, Link } from "gatsby";
import * as React from "react";

import Layout from "@components/layout";

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
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

const PostItem = props => {
  return (
    <div>
      <p>{props.frontmatter.date}</p>
      <h2>
        <Link to={`posts${props.fields.slug}`}>{props.frontmatter.title}</Link>
      </h2>
      <p>{props.frontmatter.description}</p>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <Layout>
        <header>
          <h1>Candid Conversations</h1>
          <p>A deeper look into what life is like for fellow humans.</p>
        </header>
        <main>
          {posts.map(p => (
            <PostItem {...p} />
          ))}
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
