/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SoundsGoodAgency = ({ className, text = "Sounds Good Agency" }) => {
  return (
    <div className={`sounds-good-agency ${className}`}>
      <div className="text-wrapper-2">{text}</div>
    </div>
  );
};

SoundsGoodAgency.propTypes = {
  text: PropTypes.string,
};
