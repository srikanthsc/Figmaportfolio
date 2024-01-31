/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SCPresent = ({ className, text = "SC 2022 - PRESENT" }) => {
  return (
    <div className={`SC-PRESENT ${className}`}>
      <div className="div">{text}</div>
    </div>
  );
};

SCPresent.propTypes = {
  text: PropTypes.string,
};
