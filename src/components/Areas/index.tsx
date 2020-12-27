import React from "react";
import Button, { ButtonType } from "components/Button";

import * as S from "./styles";

const Areas = () => (
  <S.Wrapper>
    <S.Title>Áreas</S.Title>
    <S.Card>
      <S.Profile>
        <S.Image
          src="/img/Volunteers/capa-area.png"
          alt="Foto mãos digitando em um latop envolto por ícones que remetem à web"
        />
        <div>
          <S.Area>Comunicação</S.Area>
          <S.Description>
            Para fazer com que você tenha acesso a inúmeros benefícios por ser
            voluntário Esperanza.
          </S.Description>
        </div>
      </S.Profile>
    </S.Card>

    <S.Actions>
      <Button type={ButtonType.SECONDARY}>Seja voluntário</Button>
    </S.Actions>
  </S.Wrapper>
);

export default Areas;
