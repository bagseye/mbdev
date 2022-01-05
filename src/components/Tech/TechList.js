import React from "react";
import { TechListGlobalStyles } from "./TechStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useAllTechItems from "../../hooks/use-all-tech-items";
import Tech from "./Tech";

const TechList = () => {
  const techItems = useAllTechItems();
  return (
    <TechListGlobalStyles className="sectiongap">
      <div className="container">
        <div className="content__area">
          <h2 className="as__h1">
            During my career I have gained experience using the following
            technologies
          </h2>
        </div>
      </div>
      <div className="container">
        {techItems.map((node, index) => {
          const { techItemImage } = node;
          let techImage = getImage(techItemImage);

          return (
            <Tech key={index}>
              <GatsbyImage image={techImage} />
            </Tech>
          );
        })}
      </div>
    </TechListGlobalStyles>
  );
};

export default TechList;
