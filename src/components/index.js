import { Link } from "gatsby";
import * as React from "react";

import Layout from "@components/layout";
import { translateDateToES } from "../utils";

const PostItem = props => {
  return (
    <div className="p-8 text-center">
      <p className="">
        {props.fields.lang === "es"
          ? translateDateToES(props.frontmatter.date)
          : props.frontmatter.date}
      </p>
      <h2 className="font-serif leading-extra-none p-2 tracking-tight text-3xl">
        <Link
          className="hover:tracking-wide transition-all"
          to={`posts${props.fields.slug}`}
        >
          {props.frontmatter.title}
        </Link>
      </h2>
    </div>
  );
};

const content = {
  en: {
    tagline: "A deeper look into what life is like for fellow humans.",
  },
  es: {
    tagline: "Una mirada a cómo es la vida para cada quien.",
  },
};
const Index = ({ posts, lang }) => {
  return (
    <>
      <Layout>
        <header className="border-b border-black p-12 text-center">
          <h1 className="font-bold font-serif leading-extra-none lowercase pb-8 text-6xl tracking-tight">
            Candid <br /> Conversations
          </h1>
          <p>{content[lang].tagline}</p>
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

export default Index;
