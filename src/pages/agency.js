import React from "react";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import useAllAgency from "../hooks/use-all-agency";
import CardContainer from "../components/Cards/CardContainer";
import Card from "../components/Cards/Card";
import ServicesContainer from "../components/Services/ServicesContainer";
import SEO from "../components/SEO";

const agencyPage = () => {
  const allAgency = useAllAgency();

  return (
    <>
      <SEO noIndex />
      <Layout>
        <section className="topgap">
          <div className="container">
            <div className="content__area">
              <h1>All Agency Projects</h1>
              <h2>
                Past projects completed as an employee of digital agencies
              </h2>
            </div>
          </div>
          <CardContainer>
            {allAgency.map((node, index) => {
              return (
                <Card
                  route="/agency"
                  key={index}
                  to={node.gatsbyPath}
                  node={node}
                />
              );
            })}
          </CardContainer>
        </section>
        <div className="container sectiongap">
            <div className="content__area">
              <h2 className="as__h1">Looking for web design or branding serivces in Inverness?</h2>

              <p className="leadin">
                Choose from the options below, if you are looking for expert web development, or finely crafted branding services.
              </p>
            </div>
          </div>
          <ServicesContainer />
        <ContactMethods />
      </Layout>
    </>
  );
};

export default agencyPage;
