import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({children , type, prop, link, relation, classes}) => {
  return (
    <aside 
      itemScope 
      itemType={`http://schema.org/${type}`}
      className={Array.isArray(classes) ? [...classes].join(' ') : classes}
    >
      <a 
        itemProp={prop} 
        href={link} 
        target="_blank" 
        rel={Array.isArray(relation) ? [...relation].join(' ') : relation}
      >
        <span>
          {children}
        </span>
      </a>
    </aside>
  )
}

export default SocialLink;

SocialLink.propTypes = {
  children: PropTypes.object.isRequired,
  type: PropTypes.string,
  prop: PropTypes.string,
  link: PropTypes.string,
  relation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};