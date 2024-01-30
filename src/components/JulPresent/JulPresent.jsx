/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const JulPresent = ({ className, text = "JUL 2022 - PRESENT" }) => {
  return (
    <div className={`JUL-PRESENT ${className}`}>
      <div className="div">{text}</div>
    </div>
  );
};

JulPresent.propTypes = {
  text: PropTypes.string,
};
