import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/Contact/Contact";
import Layout from "../components/Layout";

const Contact = () => (
  <>
    <SEO title="Contact the developer" />
    <Layout>
      <section className="section sectiongap topgap">
        <div className="container">
          <div className="content__area">
            <h2 className="as__h1">
              Get in touch today to discuss your next project, or find out more
              about the Jamstack and Gatsby.
            </h2>
            <p className="leadin">
              Just enter a few of your details and what you are looking for in
              terms of web development.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default Contact;
