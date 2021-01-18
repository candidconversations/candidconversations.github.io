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
    <div className="p-8 text-center">
      <p className="">{props.frontmatter.date}</p>
      <h2 className="font-serif leading-extra-none p-2 tracking-tight text-3xl">
        <Link
          className="hover:tracking-wide transition-all"
          to={`posts${props.fields.slug}`}
        >
          {props.frontmatter.title}
        </Link>
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
        <header className="border-b border-black p-12 text-center">
          <h1 className="font-bold font-serif leading-extra-none lowercase pb-8 text-6xl tracking-tight">
            Candid <br /> Conversations
          </h1>
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
