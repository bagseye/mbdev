import React from "react";
import Project from "./Project";
import useFeaturedProjects from "../../hooks/use-featured-projects";

const ProjectsFeatured = () => {
  const featuredProjects = useFeaturedProjects();

  return (
    <section className="sectiongap">
      {featuredProjects.map((node, index) => {
        return <Project key={index} project={node} />;
      })}
    </section>
  );
};

export default ProjectsFeatured;
