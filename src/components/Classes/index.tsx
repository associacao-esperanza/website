import Button, { ButtonType } from "components/Button";
import React from "react";

import * as S from "./styles";

const Classes: React.FC = () => (
  <S.Wrapper>
    <S.Title>Cursinho Popular Esperanza</S.Title>
    <S.Description>
      Um cursinho popular que promove o acesso dos alunos a Universidade Pública
      através do ENEM.
    </S.Description>

    <Button type={ButtonType.TERTIARY}>Saiba mais</Button>
  </S.Wrapper>
);

export default Classes;
