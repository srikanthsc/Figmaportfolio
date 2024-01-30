/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ShopifyExpertWith = ({
  className,
  text = "Shopify Expert with specialization in UI/UX<br/>Proficient in creating wireframes and prototypes using Figma<br/>Expertise in theme customization, feature creation, and design implementation<br/>Lead DEV responsibilities including:<br/>Git management<br/>Code review<br/>Mentoring team members<br/>Bug tracking<br/>Project management",
}) => {
  return (
    <div className={`shopify-expert-with ${className}`}>
      <p className="p">{text}</p>
    </div>
  );
};

ShopifyExpertWith.propTypes = {
  text: PropTypes.string,
};
