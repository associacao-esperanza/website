import React from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AmbassadorProgram from "components/AmbassadorProgram";

import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <NavBar />
    <AmbassadorProgram />
    <Footer />
  </S.Wrapper>
);

export default Main;
