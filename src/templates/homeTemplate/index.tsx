import React from "react";
import Header from "../../components/molecules/Header";
import Footer from "../../components/organisms/Footer";
import BannerApresentation from "../../components/organisms/BannerApresentation";
import BannerDemostration from "../../components/organisms/BannerDemostration";
import * as S from './styled'
import SectionContent from "../../components/organisms/SectionContent";
const HomeTemplate = () => {
  return (
    <>
      <Header />
      <S.Main>
      <BannerApresentation />
      <SectionContent />
      <BannerDemostration />
      </S.Main>
      <Footer />
    </>
  );
};

export default HomeTemplate;
