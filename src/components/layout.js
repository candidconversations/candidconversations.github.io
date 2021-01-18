import * as React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {!!title ? `${title} - Candid Conversations` : "Candid Conversations"}
        </title>
      </Helmet>
      {children}
      <footer className="bg-gray-100 p-8 text-center">
        © {new Date().getFullYear()} Candid Conversations
      </footer>
    </>
  );
};

export default Layout;
