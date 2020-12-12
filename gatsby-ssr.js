// import React from "react"
// import Layout from "./src/components/Layout"
// // import PageTransition from "gatsby-v2-plugin-page-transitions"

// export function wrapPageElement({ element, props }) {
//   return (
//     <Layout {...props}>
//       {/* <PageTransition> */}
//       {element}
//       {/* </PageTransition> */}
//     </Layout>
//   )
// }

import React from 'react';
import { MenuProvider } from './src/components/MenuContext';

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}

export function onRouteUpdate({ location, prevLocation }) {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
}
