import HeroSection from "components/HeroSection";
import History from "components/History";
import Classes from "components/Classes";
import Projects from "components/Projects";
import MVV from "components/MVV";
import React from "react";

import * as S from "./styles";
import AboutUs from "components/AboutUs";

const Main = ({}) => (
  <S.Wrapper>
    <HeroSection />
    <Projects />
    <Classes />
    <History />
    <MVV />
    <AboutUs />

    <div>
      <h2>Nossos parceiros</h2>
      <p>
        Quem apoia o Esperanza para continuar gerando impacto através das ações?
      </p>
      <div>
        <img src="/img/logoSkore.png" alt="Logo da empresa Skore" />
        <img src="/img/logoEduqo.png" alt="Logo da empresa Eduqo" />
        <img
          src="/img/logoFundacaoEstudar.png"
          alt="Logo da empresa Fundação Estudar"
        />
        <img src="/img/logoLearni.png" alt="Logo da empresa Learni" />
      </div>
    </div>
  </S.Wrapper>
);

export default Main;
