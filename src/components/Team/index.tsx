import React from "react";
import * as S from "./styles";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import KnowTheTeam from "components/KnowTheTeam";
import TeamSearch from "components/TeamSearch";

const Team = () => (
  <S.Wrapper>
    <NavBar />
    <KnowTheTeam />
    <TeamSearch />
    <Footer />
  </S.Wrapper>
);

export default Team;
