import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GalleryItem } from "../styles/GlobalStyles";

const Gallery = ({ mainImage, projectImages }) => (
  <>
    {/* If the main image prop is passed */}
    {mainImage && (
      <GalleryItem>
        <GatsbyImage image={mainImage.gatsbyImageData} className="feature" />
      </GalleryItem>
    )}
    {/* If the remaining project images are passed */}
    {projectImages &&
      projectImages.map((item, index) => (
        <GalleryItem className={`standard-image__${index}`}>
          {item.description && (
            <>
              {/* Only render the description if one is present */}
              <h3>{item.description}</h3>
              <figure>
                {/* if the count is less than 10, we want to render the leading 0 */}
                Fig{index + 2 < 10 ? "0" : null}
                {index + 2}
              </figure>
            </>
          )}
          <GatsbyImage
            image={item.gatsbyImageData}
            className="standard"
            key={index}
          />
        </GalleryItem>
      ))}
  </>
);

export default Gallery;
