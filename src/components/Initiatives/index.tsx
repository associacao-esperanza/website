import React from "react";
import * as S from "./styles";
import ProjectSearch from "components/ProjectSearch";
import { PageWrapper } from "components/PageWrapper/style";
import HeroBlock from "components/HeroBlock";
import { InitiativesProps } from "pages/iniciativas";

const Initiatives = ({ hero }: InitiativesProps) => (
  <S.Wrapper>
    <PageWrapper>
      <HeroBlock
        background={hero.background}
        title={hero.title}
        description={hero.description}
      />
      <ProjectSearch />
    </PageWrapper>
  </S.Wrapper>
);

export default Initiatives;
