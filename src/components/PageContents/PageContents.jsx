/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GalleryItem } from "../GalleryItem";
import { ResumeItem } from "../ResumeItem";
import "./style.css";

export const PageContents = ({
  page,
  className,
  text = "Chief",
  text1 = "AI-UI<br/>Architect",
  text2 = "Design &amp; Development",
  text3 = "An AI wizard, possesses a keen intellect and a natural affinity for technology. Constantly seeking out new ways to merge artificial intelligence with user interface design, they are a true innovator in their field. <br/> <br/>Leading a team of skilled designers and developers, they use their powers for good, striving to make the world a better place through exceptional user experiences. Whether it&#39;s crafting beautiful apps or designing seamless websites, no challenge is too great for them to tackle. <br/> <br/>With a deep understanding of the mystical arts of tech and design, always on the cutting-edge, seeking out new ways to improve and evolve. Join them on their journey to make a lasting impact on the world, one user at a time.",
  galleryItemImgClassName,
  galleryItemImg = "/img/img-30.png",
  galleryItemImgClassNameOverride,
  galleryItemImg1 = "/img/img-31.png",
  galleryItemImgClassName1,
  galleryItemImg2 = "/img/img-32.png",
  galleryItemImgClassName2,
  galleryItemImg3 = "/img/img-13.png",
  galleryItemImgClassName3,
  galleryItemImg4 = "/img/img-14.png",
  galleryItemImgClassName4,
  galleryItemImg5 = "/img/img-15.png",
  galleryItemImgClassName5,
  galleryItemImg6 = "/img/img-45.png",
  galleryItemImgClassName6,
  galleryItemImg7 = "/img/img-45.png",
  galleryItemImgClassName7,
  galleryItemImg8 = "/img/img-45.png",
  galleryItemImgClassName8,
  galleryItemImg9 = "/img/img-45.png",
}) => {
  return (
    <div className={`page-contents ${className}`}>
      <div className={`slider ${page}`}>
        <div className="about-2">
          <div className="chief">{text}</div>
          <div className="AI-UI-architect">{text1}</div>
          <div className="design-development">{text2}</div>
          <div className="text-content">
            <p className="design-development-2">{text3}</p>
          </div>
        </div>
        <div className="resume-list">
          <ResumeItem
            SCPresentText="SC 2022 - PRESENT"
            className="resume-item-instance"
            DeveloperText="Lead Developer"
            shopifyExpertWithText={
              <>
                Shopify Expert with specialization in UI/UX
                <br />
                Proficient in creating wireframes and prototypes using Figma
                <br />
                Expertise in theme customization, feature creation, and design implementation
                <br />
                Lead DEV responsibilities including:
                <br />
                Git management
                <br />
                Code review
                <br />
                Mentoring team members
                <br />
                Bug tracking
                <br />
                Project management
              </>
            }
            soundsGoodAgencyText="Sounds Good Agency"
          />
          <ResumeItem
            SCPresentText="JUN 2018 - PRESENT"
            className="resume-item-instance"
            DeveloperText="UI/UX Expert"
            shopifyExpertWithText={
              <>
                Developed and maintained Shopify projects for Toptal, a network of top 3% software engineering, design,
                and finance talent
                <br />
                Specialized in design to UI implementation using Figma
                <br />
                Managed bug tickets using Asana.com
                <br />
                Integrated 3rd party apps and Shopify API end-points
                <br />
                Developed new features and components, complex customizer configurations, meta fields, and templates
                using ThemeKit
              </>
            }
            soundsGoodAgencyText="Toptal"
          />
          <ResumeItem
            SCPresentText="NOV 2020 - FEB 2022"
            className="resume-item-instance"
            DeveloperText="Senior Front-End Developer &amp; UI/UX Designer"
            shopifyExpertWithText={
              <>
                Implemented &#34;creative search&#34; feature for admin system, including design and development
                <br />
                Migrated system from AngularJS to Angular 10
                <br />
                Redesigned UI/UX in Figma and implemented design changes throughout system using Angular
                <br />
                Transformed old system with new design language, as demonstrated in &#34;creative search&#34; feature
              </>
            }
            soundsGoodAgencyText="StudioNow"
          />
        </div>
        <div className="gallery-2">
          <div className="frame">
            <GalleryItem
              className="gallery-item-instance"
              img={galleryItemImg}
              imgClassName={galleryItemImgClassName}
            />
            <GalleryItem
              className="gallery-item-instance"
              img={galleryItemImg1}
              imgClassName={galleryItemImgClassNameOverride}
            />
            <GalleryItem className="instance-node" img={galleryItemImg2} imgClassName={galleryItemImgClassName1} />
          </div>
          <div className="frame">
            <GalleryItem
              className="gallery-item-instance"
              img={galleryItemImg3}
              imgClassName={galleryItemImgClassName2}
            />
            <GalleryItem
              className="gallery-item-instance"
              img={galleryItemImg4}
              imgClassName={galleryItemImgClassName3}
            />
            <GalleryItem className="instance-node" img={galleryItemImg5} imgClassName={galleryItemImgClassName4} />
          </div>
        </div>
        <div className="certificates-2">
          <div className="frame-2">
            <GalleryItem
              className={`${page === "certificates" ? "class" : "gallery-item-instance"}`}
              img={galleryItemImg6}
              imgClassName={galleryItemImgClassName5}
            />
            <GalleryItem
              className={`${page === "certificates" ? "class" : "gallery-item-instance"}`}
              img={galleryItemImg7}
              imgClassName={galleryItemImgClassName6}
            />
          </div>
          <div className="frame-2">
            <GalleryItem
              className={`${page === "certificates" ? "class" : "gallery-item-instance"}`}
              img={galleryItemImg8}
              imgClassName={galleryItemImgClassName7}
            />
            <GalleryItem
              className={`${page === "certificates" ? "class" : "gallery-item-instance"}`}
              img={galleryItemImg9}
              imgClassName={galleryItemImgClassName8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PageContents.propTypes = {
  page: PropTypes.oneOf(["about", "gallery", "resume", "certificates"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  galleryItemImg: PropTypes.string,
  galleryItemImg1: PropTypes.string,
  galleryItemImg2: PropTypes.string,
  galleryItemImg3: PropTypes.string,
  galleryItemImg4: PropTypes.string,
  galleryItemImg5: PropTypes.string,
  galleryItemImg6: PropTypes.string,
  galleryItemImg7: PropTypes.string,
  galleryItemImg8: PropTypes.string,
  galleryItemImg9: PropTypes.string,
};
