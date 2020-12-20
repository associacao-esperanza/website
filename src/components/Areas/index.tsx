import React from "react";
import Button, { ButtonType } from "components/Button";

import * as S from "./styles";

const Areas = () => (
  <S.Wrapper>
    <S.Title>Áreas</S.Title>
    <S.Messages>
      <S.Profile>
        <S.Image src="/img/Areas/capa-area.png" alt="Foto de Rafaela Maehara" />
        <S.Area>Comunicação</S.Area>
        <S.Description>
          Para fazer com que você tenha acesso a inúmeros benefícios por ser
          voluntário Esperanza.
        </S.Description>
      </S.Profile>
    </S.Messages>

    <S.Actions>
      <Button type={ButtonType.SECONDARY}>Seja voluntário</Button>
    </S.Actions>
  </S.Wrapper>
);

export default Areas;
