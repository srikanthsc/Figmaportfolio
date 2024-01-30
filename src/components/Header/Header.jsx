/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { Link } from "../Link";
import "./style.css";

export const Header = ({ className, text = "NERIA KATZ", linkPrimaryText = "Gallery" }) => {
  return (
    <div className={`header ${className}`}>
      <div className="title-name">{text}</div>
      <div className="navigation">
        <Link className="design-component-instance-node" primaryText="About" stateProp="normal" />
        <Link
          className="design-component-instance-node"
          primaryText="Resume"
          stateProp="normal"
          textClassName="link-instance"
        />
        <Link
          className="design-component-instance-node"
          primaryText={linkPrimaryText}
          stateProp="normal"
          textClassName="link-instance"
        />
        <Link
          className="design-component-instance-node"
          primaryText="Certificates"
          stateProp="normal"
          textClassName="link-instance"
        />
        <Button className="design-component-instance-node" text="Contact" />
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  linkPrimaryText: PropTypes.string,
};
