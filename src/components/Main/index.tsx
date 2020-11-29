import HeroSection from "components/HeroSection";
import History from "components/History";
import Classes from "components/Classes";
import Projects from "components/Projects";
import MVV from "components/MVV";
import React from "react";

import * as S from "./styles";
import AboutUs from "components/AboutUs";
import Partners from "components/Partners";

const Main = ({}) => (
  <S.Wrapper>
    <HeroSection />
    <Projects />
    <Classes />
    <History />
    <MVV />
    <AboutUs />
    <Partners />
  </S.Wrapper>
);

export default Main;
