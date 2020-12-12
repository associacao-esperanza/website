import HeroSection from "components/HeroSection";
import History from "components/History";
import Classes from "components/Classes";
import Projects from "components/Projects";
import MVV from "components/MVV";
import AboutUs from "components/AboutUs";
import Partners from "components/Partners";
import Footer from "components/Footer";
import React from "react";
import NavBar from "components/NavBar";

import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <NavBar />
    <HeroSection />
    <Projects />
    <Classes />
    <History />
    <MVV />
    <AboutUs />
    <Partners />
    <Footer />
  </S.Wrapper>
);

export default Main;
