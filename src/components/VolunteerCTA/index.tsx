import Button, { ButtonType } from "components/Button";
import React from "react";

import * as S from "./styles";

const VolunteerCTA = () => (
  <S.Wrapper>
    <S.Title> Já pensou em ser parte da solução?</S.Title>

    <S.Description>
      Se prepare para o mercado de trabalho e seja parte da mudança se
      voluntariando com o Esperanza.
    </S.Description>

    <S.Actions>
      <Button type={ButtonType.SECONDARY}>Seja voluntário</Button>
    </S.Actions>
  </S.Wrapper>
);

export default VolunteerCTA;
