// import React from "react"
// // import PageTransition from "gatsby-v2-plugin-page-transitions"
import React from "react";
import Layout from "./src/components/Layout";
import { MenuProvider } from "./src/components/MenuContext";

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      {/* <PageTransition> */}
      {element}
      {/* </PageTransition> */}
    </Layout>
  );
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}
