/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { JulPresent } from "../JulPresent";
import { LeadDeveloper } from "../LeadDeveloper";
import { ShopifyExpertWith } from "../ShopifyExpertWith";
import { SoundsGoodAgency } from "../SoundsGoodAgency";
import "./style.css";

export const ResumeItem = ({
  className,
  JULPresentText = "JUL 2022 - PRESENT",
  soundsGoodAgencyText = "Sounds Good Agency",
  leadDeveloperText = "Lead Developer",
  shopifyExpertWithText = "Shopify Expert with specialization in UI/UX<br/>Proficient in creating wireframes and prototypes using Figma<br/>Expertise in theme customization, feature creation, and design implementation<br/>Lead DEV responsibilities including:<br/>Git management<br/>Code review<br/>Mentoring team members<br/>Bug tracking<br/>Project management",
}) => {
  return (
    <div className={`resume-item ${className}`}>
      <div className="left">
        <JulPresent className="design-component-instance-node-2" text={JULPresentText} />
        <SoundsGoodAgency className="design-component-instance-node-2" text={soundsGoodAgencyText} />
      </div>
      <div className="seprator-line" />
      <div className="right">
        <LeadDeveloper className="design-component-instance-node-2" text={leadDeveloperText} />
        <ShopifyExpertWith className="design-component-instance-node-2" text={shopifyExpertWithText} />
      </div>
    </div>
  );
};

ResumeItem.propTypes = {
  JULPresentText: PropTypes.string,
  soundsGoodAgencyText: PropTypes.string,
  leadDeveloperText: PropTypes.string,
  shopifyExpertWithText: PropTypes.string,
};
