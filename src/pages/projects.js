import React from "react";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import useAllProjects from "../hooks/use-all-projects";
import CardContainer from "../components/Cards/CardContainer";
import Card from "../components/Cards/Card";

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
      <ContactMethods />
    </Layout>
  );
};

export default projectsPage;
