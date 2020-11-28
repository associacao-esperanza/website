import Button, { ButtonType } from "components/Button";
import React from "react";

import * as S from "./styles";

const HeroSection = ({}) => (
  <S.Wrapper>
    <S.Title>Faça parte do Esperanza!</S.Title>

    <S.Description>
      Promovemos projetos populares que fornecem educação pública de qualidade
      para populações carentes.
    </S.Description>

    <S.Actions>
      <Button>Seja aluno</Button>
      <Button type={ButtonType.SECONDARY}>Seja voluntário</Button>
    </S.Actions>
  </S.Wrapper>
);

export default HeroSection;
