import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GalleryItem } from "../styles/GlobalStyles";

const Gallery = ({ projectImages }) => (
  <>
    {/* If the remaining project images are passed */}
    {projectImages &&
      projectImages.map((item, index) => (
        <GalleryItem key={index}>
          <GatsbyImage
            image={item.gatsbyImageData}
            className="feature"
            alt={item.description ? item.description : `Project Image ${index}`}
          />
        </GalleryItem>
      ))}
  </>
);

export default Gallery;
