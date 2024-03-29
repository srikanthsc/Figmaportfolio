/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Developer = ({ className, text = "Lead Developer" }) => {
  return (
    <div className={`lead-developer ${className}`}>
      <div className="text-wrapper-3">{text}</div>
    </div>
  );
};

Developer.propTypes = {
  text: PropTypes.string,
};
