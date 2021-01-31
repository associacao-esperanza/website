import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import * as S from "./styles";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <S.Wrapper>
      <S.Menu>
        <S.Logo>
          <S.Link href="/">
            <S.LogoDesktop src="/img/logo.png" alt="Logo Esperanza" />
            <S.LogoMobile src="/img/logoMobile.png" alt="Logo Esperanza" />
          </S.Link>
        </S.Logo>
        <S.Item active={isMenuOpened}>
          <S.Link href="/blog">Blog</S.Link>
        </S.Item>
        <S.Item active={isMenuOpened}>
          <S.Link href="/voluntariado">Voluntariado</S.Link>
        </S.Item>
        <S.Item active={isMenuOpened}>
          <S.Link href="/doacao">Doação</S.Link>
        </S.Item>
        <S.Item active={isMenuOpened}>
          <S.Link href="/equipe">Equipe</S.Link>
        </S.Item>
        <S.Item active={isMenuOpened}>
          <S.Link href="/iniciativas">
            Iniciativas
          </S.Link>
        </S.Item>
        <S.Item active={isMenuOpened}>
          <S.Link href="/embaixadores">Embaixadores</S.Link>
        </S.Item>
        <S.Toggle>
          <S.Link tabIndex={0}>
            <FontAwesomeIcon
              icon={isMenuOpened ? faTimes : faBars}
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            />
          </S.Link>
        </S.Toggle>
      </S.Menu>
    </S.Wrapper>
  );
};

export default NavBar;
