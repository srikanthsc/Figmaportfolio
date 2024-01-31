import React from "react";
import { Page } from "../../components/Page";
import "./style.css";

export const PageScreen = () => {
  return (
    <Page
      backgroundImage="../../img/background-image-1.png"
      contentCardClassName="page-instance"
      headerHeaderClassName="page-2"
      headerLinkPrimaryText="Skills"
      headerText="Srikanth"
      pageContentsGalleryItemImg="/img/img-51.png"
      pageContentsGalleryItemImg1="/img/img-51.png"
      pageContentsGalleryItemImg2="/img/img-51.png"
      pageContentsGalleryItemImg3="/img/img-51.png"
      pageContentsGalleryItemImg4="/img/img-51.png"
      pageContentsGalleryItemImg5="/img/img-51.png"
      pageContentsGalleryItemImg6="/img/img-51.png"
      pageContentsGalleryItemImg7="/img/img-51.png"
      pageContentsGalleryItemImg8="/img/img-51.png"
      pageContentsGalleryItemImg9="/img/img-51.png"
      pageContentsGalleryItemImgClassName="page-3"
      pageContentsGalleryItemImgClassName1="page-4"
      pageContentsGalleryItemImgClassName2="page-5"
      pageContentsGalleryItemImgClassName3="page-5"
      pageContentsGalleryItemImgClassName4="page-6"
      pageContentsGalleryItemImgClassName5="page-6"
      pageContentsGalleryItemImgClassName6="page-4"
      pageContentsGalleryItemImgClassName7="page-7"
      pageContentsGalleryItemImgClassName8="page-8"
      pageContentsGalleryItemImgClassNameOverride="page-3"
      pageContentsText={
        <>
          I am Srikanth Collaty, I have recently graduated, I am a Tech enthusiast.
          <br />I am always open to collaborating on projects and innovative/disruptive ideas.
          <br />
          When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff.
        </>
      }
      pageContentsText1="IT Engineer - Full Stack Engineer - SAP&nbsp;&nbsp;Software Engineer"
      pageContentsText2=""
      pageContentsText3="Srikanth"
    />
  );
};
