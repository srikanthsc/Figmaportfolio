/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SCPresent } from "../SCPresent";
import { Developer } from "../Developer";
import { ShopifyExpertWith } from "../ShopifyExpertWith";
import { SoundsGoodAgency } from "../SoundsGoodAgency";
import "./style.css";

export const ResumeItem = ({
  className,
  SCPresentText = "SC 2022 - PRESENT",
  soundsGoodAgencyText = "Sounds Good Agency",
  DeveloperText = "Lead Developer",
  shopifyExpertWithText = "Shopify Expert with specialization in UI/UX<br/>Proficient in creating wireframes and prototypes using Figma<br/>Expertise in theme customization, feature creation, and design implementation<br/>Lead DEV responsibilities including:<br/>Git management<br/>Code review<br/>Mentoring team members<br/>Bug tracking<br/>Project management",
}) => {
  return (
    <div className={`resume-item ${className}`}>
      <div className="left">
        <SCPresent className="design-component-instance-node-2" text={SCPresentText} />
        <SoundsGoodAgency className="design-component-instance-node-2" text={soundsGoodAgencyText} />
      </div>
      <div className="seprator-line" />
      <div className="right">
        <Developer className="design-component-instance-node-2" text={DeveloperText} />
        <ShopifyExpertWith className="design-component-instance-node-2" text={shopifyExpertWithText} />
      </div>
    </div>
  );
};

ResumeItem.propTypes = {
  SCPresentText: PropTypes.string,
  soundsGoodAgencyText: PropTypes.string,
  DeveloperText: PropTypes.string,
  shopifyExpertWithText: PropTypes.string,
};
