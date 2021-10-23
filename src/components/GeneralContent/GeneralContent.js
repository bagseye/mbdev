import React from "react";
import { GeneralContentStyles } from "./GeneralContentStyles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const GeneralContent = ({ content, options }) => {
  return (
    <GeneralContentStyles>
      <div className="container container-grid">
        {content && (
          <div className="col">{renderRichText(content, options)}</div>
        )}
      </div>
    </GeneralContentStyles>
  );
};

export default GeneralContent;
