import React from "react";
import Project from "./Project";
import useFeaturedProjects from "../../hooks/use-featured-projects";

const ProjectsFeatured = ({ title, subTitle }) => {
  const featuredProjects = useFeaturedProjects();

  return (
    <section className="sectiongap container">
      {title && (
        <div className="content__area">
          <h2 className="as__h1">{title}</h2>
          {subTitle && <p className="leadin">{subTitle}</p>}
        </div>
      )}
      {featuredProjects.map((node, index) => {
        return <Project key={index} project={node} />;
      })}
    </section>
  );
};

export default ProjectsFeatured;
