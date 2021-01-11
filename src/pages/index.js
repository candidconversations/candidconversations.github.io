import { graphql, Link } from "gatsby";
import * as React from "react";
import { Helmet } from 'react-helmet';

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
        <Link to={props.fields.slug}>{props.frontmatter.title}</Link>
      </h2>
      <p>{props.frontmatter.description}</p>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <Helmet>
        <title>Candid Converstations</title>
      </Helmet>
      <header>
        <h1>Candid Conversations</h1>
        <p>A deeper look into what life is like for fellow humans.</p>
      </header>
      <main>
        {posts.map(p => (
          <PostItem {...p} />
        ))}
      </main>
      <footer>© {new Date().getFullYear()} Candid Conversations</footer>
    </>
  );
};

export default IndexPage;
