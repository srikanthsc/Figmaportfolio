/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Header } from "../Header";
import { PageContents } from "../PageContents";
import "./style.css";

export const Page = ({
  contentCardClassName,
  backgroundImage = "/img/background-image.png",
  headerLinkPrimaryText = "Gallery",
  headerHeaderClassName,
  headerText = "Srikanth",
  pageContentsGalleryItemImg = "/img/img-45.png",
  pageContentsGalleryItemImgClassName,
  pageContentsText = "An AI wizard, possesses a keen intellect and a natural affinity for technology. Constantly seeking out new ways to merge artificial intelligence with user interface design, they are a true innovator in their field. <br/> <br/>Leading a team of skilled designers and developers, they use their powers for good, striving to make the world a better place through exceptional user experiences. Whether it&#39;s crafting beautiful apps or designing seamless websites, no challenge is too great for them to tackle. <br/> <br/>With a deep understanding of the mystical arts of tech and design, always on the cutting-edge, seeking out new ways to improve and evolve. Join them on their journey to make a lasting impact on the world, one user at a time.",
  pageContentsGalleryItemImg1 = "/img/img-45.png",
  pageContentsGalleryItemImg2 = "/img/img-45.png",
  pageContentsGalleryItemImg3 = "/img/img-45.png",
  pageContentsGalleryItemImgClassNameOverride,
  pageContentsGalleryItemImgClassName1,
  pageContentsGalleryItemImg4 = "/img/img-45.png",
  pageContentsGalleryItemImgClassName2,
  pageContentsGalleryItemImgClassName3,
  pageContentsGalleryItemImgClassName4,
  pageContentsText1 = "Design &amp; Development",
  pageContentsGalleryItemImg5 = "/img/img-45.png",
  pageContentsGalleryItemImgClassName5,
  pageContentsGalleryItemImgClassName6,
  pageContentsGalleryItemImg6 = "/img/img-45.png",
  pageContentsGalleryItemImgClassName7,
  pageContentsGalleryItemImgClassName8,
  pageContentsText2 = "Chief",
  pageContentsGalleryItemImg7 = "/img/img-45.png",
  pageContentsGalleryItemImg8 = "/img/img-45.png",
  pageContentsText3 = "AI-UI<br/>Architect",
  pageContentsGalleryItemImg9 = "/img/img-45.png",
}) => {
  return (
    <div className="page">
      <div className={`content-card ${contentCardClassName}`}>
        <img className="background-image" alt="Background image" src={backgroundImage} />
        <Header className={headerHeaderClassName} linkPrimaryText={headerLinkPrimaryText} text={headerText} />
        <div className="content">
          <div className="right-pane">
            <PageContents
              className="page-contents-instance"
              galleryItemImg={pageContentsGalleryItemImg1}
              galleryItemImg1={pageContentsGalleryItemImg3}
              galleryItemImg2={pageContentsGalleryItemImg4}
              galleryItemImg3={pageContentsGalleryItemImg5}
              galleryItemImg4={pageContentsGalleryItemImg2}
              galleryItemImg5={pageContentsGalleryItemImg7}
              galleryItemImg6={pageContentsGalleryItemImg}
              galleryItemImg7={pageContentsGalleryItemImg8}
              galleryItemImg8={pageContentsGalleryItemImg9}
              galleryItemImg9={pageContentsGalleryItemImg6}
              galleryItemImgClassName={pageContentsGalleryItemImgClassName5}
              galleryItemImgClassName1={pageContentsGalleryItemImgClassName8}
              galleryItemImgClassName2={pageContentsGalleryItemImgClassName6}
              galleryItemImgClassName3={pageContentsGalleryItemImgClassName1}
              galleryItemImgClassName4={pageContentsGalleryItemImgClassName7}
              galleryItemImgClassName5={pageContentsGalleryItemImgClassName}
              galleryItemImgClassName6={pageContentsGalleryItemImgClassNameOverride}
              galleryItemImgClassName7={pageContentsGalleryItemImgClassName2}
              galleryItemImgClassName8={pageContentsGalleryItemImgClassName3}
              galleryItemImgClassNameOverride={pageContentsGalleryItemImgClassName4}
              page="about"
              text={pageContentsText2}
              text1={pageContentsText3}
              text2={pageContentsText1}
              text3={pageContentsText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  backgroundImage: PropTypes.string,
  headerLinkPrimaryText: PropTypes.string,
  headerText: PropTypes.string,
  pageContentsGalleryItemImg: PropTypes.string,
  pageContentsText: PropTypes.string,
  pageContentsGalleryItemImg1: PropTypes.string,
  pageContentsGalleryItemImg2: PropTypes.string,
  pageContentsGalleryItemImg3: PropTypes.string,
  pageContentsGalleryItemImg4: PropTypes.string,
  pageContentsText1: PropTypes.string,
  pageContentsGalleryItemImg5: PropTypes.string,
  pageContentsGalleryItemImg6: PropTypes.string,
  pageContentsText2: PropTypes.string,
  pageContentsGalleryItemImg7: PropTypes.string,
  pageContentsGalleryItemImg8: PropTypes.string,
  pageContentsText3: PropTypes.string,
  pageContentsGalleryItemImg9: PropTypes.string,
};
