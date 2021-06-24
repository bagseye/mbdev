import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { VscArrowLeft as Arrow } from "react-icons/vsc";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const options = {
  // Pass in the node and dril down to the required data
  // renderNode: {
  //   // Render the contentful rich content image
  //   "embedded-asset-block": (node) => (
  //     <div className="content-image">
  //       <img
  //         src={node.data.target.fields.file["en-US"].url}
  //         alt={node.data.target.fields.title["en-US"]}
  //       />
  //     </div>
  //   ),
  // },
};

const serviceTemplate = ({ data }) => {
  const { title, excerpt, content } = data.service;
  return (
    <>
      <SEO title={title} description={excerpt} />
      <Layout>
        <Banner heading={title} excerpt={excerpt} />
        <About id="about" content={content} options={options} />
        <BodyContainer>
          <Contact />
          <Link className="link__arrow" to="/">
            <Arrow className="arrow" /> Back to home
          </Link>
        </BodyContainer>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    service: contentfulService(slug: { eq: $slug }) {
      title
      excerpt
      content {
        raw
      }
    }
  }
`;

export default serviceTemplate;
