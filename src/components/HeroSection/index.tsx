import Button from "components/Button";
import React from "react";

import * as S from "./styles";

const HeroSection = ({}) => (
  <S.Wrapper>
    <S.Title>Faça parte do Esperanza!</S.Title>

    <S.Description>
      Promovemos projetos populares que fornecem educação pública de qualidade
      para populações carentes.
    </S.Description>

    <Button>Seja aluno</Button>
    <Button>Seja voluntário</Button>
  </S.Wrapper>
);

export default HeroSection;
