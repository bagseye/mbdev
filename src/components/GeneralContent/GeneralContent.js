import React from "react";
import { GeneralContentStyles } from "./GeneralContentStyles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const GeneralContent = ({ title, content, options }) => {
  return (
    <GeneralContentStyles>
      <div className="container">
        {title && (
          <div className="col">
            <h2>{title}</h2>
          </div>
        )}
        {content && (
          <div className="col">{renderRichText(content, options)}</div>
        )}
      </div>
    </GeneralContentStyles>
  );
};

export default GeneralContent;
