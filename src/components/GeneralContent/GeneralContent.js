import React from "react";
import { GeneralContentStyles } from "./GeneralContentStyles";
import RichText from "../RichText";

const GeneralContent = ({ content }) => {
  return (
    <GeneralContentStyles>
      <div className="container container-grid">
        {content && (
          <div className="col">
            <RichText richText={content} />
          </div>
        )}
      </div>
    </GeneralContentStyles>
  );
};

export default GeneralContent;
