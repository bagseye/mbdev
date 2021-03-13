import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FullWidthImage = () => {
  return (
    <section
      style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
    >
      <StaticImage
        src="../../images/bonneville-bag-mockup.jpg"
        alt="Bonneville logo used on a bag"
        placeholder="traced"
        layout="fullWidth"
        aspectRatio={4 / 3}
        loading="lazy"
      />
    </section>
  );
};

export default FullWidthImage;
