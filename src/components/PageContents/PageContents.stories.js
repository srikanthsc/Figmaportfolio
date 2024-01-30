import { PageContents } from ".";

export default {
  title: "Components/PageContents",
  component: PageContents,
  argTypes: {
    page: {
      options: ["about", "gallery", "resume", "certificates"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    page: "about",
    className: {},
    text: "Chief",
    text1: "AI-UI<br/>Architect",
    text2: "Design &amp; Development",
    text3:
      "An AI wizard, possesses a keen intellect and a natural affinity for technology. Constantly seeking out new ways to merge artificial intelligence with user interface design, they are a true innovator in their field. <br/> <br/>Leading a team of skilled designers and developers, they use their powers for good, striving to make the world a better place through exceptional user experiences. Whether it&#39;s crafting beautiful apps or designing seamless websites, no challenge is too great for them to tackle. <br/> <br/>With a deep understanding of the mystical arts of tech and design, always on the cutting-edge, seeking out new ways to improve and evolve. Join them on their journey to make a lasting impact on the world, one user at a time.",
    galleryItemImgClassName: {},
    galleryItemImg: "/img/img-30.png",
    galleryItemImgClassNameOverride: {},
    galleryItemImg1: "/img/img-31.png",
    galleryItemImgClassName1: {},
    galleryItemImg2: "/img/img-32.png",
    galleryItemImgClassName2: {},
    galleryItemImg3: "/img/img-13.png",
    galleryItemImgClassName3: {},
    galleryItemImg4: "/img/img-14.png",
    galleryItemImgClassName4: {},
    galleryItemImg5: "/img/img-15.png",
    galleryItemImgClassName5: {},
    galleryItemImg6: "/img/img-45.png",
    galleryItemImgClassName6: {},
    galleryItemImg7: "/img/img-45.png",
    galleryItemImgClassName7: {},
    galleryItemImg8: "/img/img-45.png",
    galleryItemImgClassName8: {},
    galleryItemImg9: "/img/img-45.png",
  },
};
