import React from "react";

import * as S from "./styles";

const Partners: React.FC = () => (
  <S.Wrapper>
    <S.Title>Nossos parceiros</S.Title>
    <S.Description>
      Quem apoia o Esperanza para continuar gerando impacto através das ações?
    </S.Description>
    <S.Panel>
      <S.Partner>
        <img src="/img/logoSkore.png" alt="Logo da empresa Skore" />
      </S.Partner>
      <S.Partner>
        <img src="/img/logoEduqo.png" alt="Logo da empresa Eduqo" />
      </S.Partner>
      <S.Partner>
        <img
          src="/img/logoFundacaoEstudar.png"
          alt="Logo da empresa Fundação Estudar"
        />
      </S.Partner>
      <S.Partner>
        <img src="/img/logoLearni.png" alt="Logo da empresa Learni" />
      </S.Partner>
    </S.Panel>
  </S.Wrapper>
);

export default Partners;
