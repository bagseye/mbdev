import React from "react";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import useAllProjects from "../hooks/use-all-projects";
import CardContainer from "../components/Cards/CardContainer";
import Card from "../components/Cards/Card";
import ServicesContainer from "../components/Services/ServicesContainer";

const projectsPage = () => {
  const allProjects = useAllProjects();

  return (
    <Layout>
      <section className="topgap">
        <div className="container">
          <div className="content__area">
            <h1>All Projects</h1>
            <h2>
              View current and past web development projects using WordPress or
              Gatsby.
            </h2>
          </div>
        </div>
        <CardContainer>
          {allProjects.map((node, index) => {
            return (
              <Card
                route="/projects"
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
  );
};

export default projectsPage;
