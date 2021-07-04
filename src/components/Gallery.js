import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GalleryItem } from "../styles/GlobalStyles";

const Gallery = ({ mainImage, projectImages }) => (
  <>
    {/* If the main image prop is passed */}
    {mainImage && (
      <GalleryItem>
        <GatsbyImage
          image={mainImage.gatsbyImageData}
          className="feature"
          alt={
            mainImage.description ? mainImage.description : "Project Main Image"
          }
        />
      </GalleryItem>
    )}
    {/* If the remaining project images are passed */}
    {projectImages &&
      projectImages.map((item, index) => (
        <GalleryItem
          key={index}
          className={`standard__image standard-image__${index}`}
        >
          <GatsbyImage
            image={item.gatsbyImageData}
            className="standard"
            alt={item.description ? item.description : `Project Image ${index}`}
          />
        </GalleryItem>
      ))}
  </>
);

export default Gallery;
