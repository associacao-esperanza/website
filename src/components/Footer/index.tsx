import { PageWrapper } from "components/PageWrapper/style";
import React from "react";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper>
      <PageWrapper>
        <S.Info>
          <S.SubSection>
            <S.Title>Associação Esperanza</S.Title>
            <S.Description>
              Uma iniciativa que busca dar acesso a educação pública de
              qualidade para todos.
            </S.Description>
          </S.SubSection>
          <S.SubSection>
            <S.SubTitle>Quer ajudar?</S.SubTitle>
            <S.Link href="">Seja doador</S.Link>
            <S.Link href="">Seja um parceiro</S.Link>
            <S.Link href="">Seja voluntário</S.Link>
          </S.SubSection>
          <S.SubSection>
            <S.SubTitle>Redes sociais</S.SubTitle>
            <S.Link href="https://www.facebook.com/associacaoesperanza">
              Facebook
            </S.Link>
            <S.Link href="https://www.instagram.com/associacao_esperanza">
              Instagram
            </S.Link>
            <S.Link href="">Linkedin</S.Link>
          </S.SubSection>
        </S.Info>
      </PageWrapper>
    </S.Wrapper>
  );
};

export default Footer;
