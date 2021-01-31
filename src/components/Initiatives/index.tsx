import React from "react";
import * as S from "./styles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import BeAStudent from "components/BeAStudent";
import ProjectSearch from "components/ProjectSearch";

const Team = () => (
  <S.Wrapper>
    <NavBar />
    <BeAStudent />
    <ProjectSearch />
    <Footer />
  </S.Wrapper>
);

export default Team;
