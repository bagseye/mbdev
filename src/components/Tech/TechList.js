import React from "react";
import { TechListGlobalStyles } from "./TechStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useAllTechItems from "../../hooks/use-all-tech-items";
import Tech from "./Tech";

const TechList = () => {
  const techItems = useAllTechItems();
  return (
    <TechListGlobalStyles className="sectiongap">
      <hr />
      <div className="container">
        <div className="content__area">
          <p className="leadin">Websites & Applications powered using</p>
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
      <hr />
    </TechListGlobalStyles>
  );
};

export default TechList;
