import React from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AmbassadorProgram from "components/AmbassadorProgram";

import * as S from "./styles";
import AmbassadorCharacteristics from "components/AmbassadorCharacteristics";
import Partners from "components/Partners";

const Main = () => (
  <S.Wrapper>
    <NavBar />
    <AmbassadorProgram />
    <AmbassadorCharacteristics />
    <Partners />
    <Footer />
  </S.Wrapper>
);

export default Main;
