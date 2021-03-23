import React, {lazy} from "react";

import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="../icons/diapers.png"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="../icons/baby_diaper.png"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="../icons/charcoal_insert.png"
        id="mission"
      />
    </Container>
  );
};

export default Home;
