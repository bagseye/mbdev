import React from "react";
import Layout from "../components/Layout";
import ContactMethods from "../components/ContactMethods";
import Project from "../components/Projects/Project";
import useAllProjects from "../hooks/use-all-projects";

const projectsPage = () => {
  const allProjects = useAllProjects();

  return (
    <Layout>
      <section className="section topgap">
        <div className="container">
          <div className="content__area">
            <h1>All Projects</h1>
            <h2>
              View current and past web development projects using WordPress or
              Gatsby.
            </h2>
          </div>
        </div>
        {allProjects.map((node, index) => {
          return <Project key={index} project={node} />;
        })}
      </section>
      <ContactMethods />
    </Layout>
  );
};

export default projectsPage;
