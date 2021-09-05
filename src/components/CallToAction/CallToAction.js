import React from "react";
import { Link } from "gatsby";
import { CallToActionStyles } from "./CallToActionStyles";

const CallToAction = ({
  children,
  message,
  subMessage,
  link,
  linkText,
  orientation,
  noImage,
}) => {
  return (
    <CallToActionStyles noImage={noImage} orientation={orientation}>
      <div className={`container align__${orientation ? orientation : "left"}`}>
        <div className="col">
          <h2>{message}</h2>
          <p>{subMessage}</p>
          <Link className="btn btn__white" to={link ? link : "/request-quote"}>
            {linkText ? linkText : "Get a Quote"}
          </Link>
        </div>
      </div>
      {!noImage ? children : null}
    </CallToActionStyles>
  );
};

export default CallToAction;
