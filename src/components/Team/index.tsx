import React from "react";
import * as S from "./styles";
import TeamSearch from "components/TeamSearch";
import HeroBlock from "components/HeroBlock";
import { TeamProps } from "pages/equipe";

const Team = ({hero} : TeamProps) => {

  return (
    <S.Wrapper>
      <HeroBlock
        title={hero.title}
        description={hero.description}
        background={hero.background}
      />
      <TeamSearch />
    </S.Wrapper>
  );
};

export default Team;
