/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Link = ({ primaryText = "Nav Link", stateProp, className, textClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
  });

  return (
    <div
      className={`link ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="base">
        <div className={`text ${textClassName}`}>{primaryText}</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}

Link.propTypes = {
  primaryText: PropTypes.string,
  stateProp: PropTypes.oneOf(["click", "hover", "normal"]),
};
