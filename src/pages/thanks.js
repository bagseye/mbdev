import React from "react";
import { Link } from "gatsby";
import { VscArrowLeft as Arrow } from "react-icons/vsc";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Thanks = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="sectiongap topgap">
        <div className="container">
          <div className="content__area">
            <h1>Thank you for your request. We'll be in touch soon.</h1>
            <Link className="link__arrow" to="/">
              <Arrow className="arrow" /> Return to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Thanks;
