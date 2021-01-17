import React from "react";

import * as S from "./styles";

const OurImpactAndODV = () => (
  <S.Wrapper>
    <S.Title>Nosso Impacto</S.Title>
    <S.NumbersWrapper>
      <div>
        <S.ImpactNumbers>3 mil</S.ImpactNumbers>
        <S.ImpactDescription>
          voluntários foram impactados por nossas ações
        </S.ImpactDescription>
      </div>
      <div>
        <S.ImpactNumbers>340</S.ImpactNumbers>
        <S.ImpactDescription>coisas feitas somente hoje</S.ImpactDescription>
      </div>
      <div>
        <S.ImpactNumbers>+ de 14</S.ImpactNumbers>
        <S.ImpactDescription>
          cidades que apoiam nossa iniciativa{" "}
        </S.ImpactDescription>
      </div>
    </S.NumbersWrapper>

    <S.ODVsTitle>
      ODVs (Objetivos de desenvolvimento de voluntariado)
    </S.ODVsTitle>
    <S.ODVsDescription>
      Os ODV são os objetivos que nós almejamos entregar durante a sua
      experiência dentro do Esperanza. A partir do momento que você se tornar um
      voluntário Esperanza, nós iremos fazer diversar atividades que tenham como
      propósito satisfazer esses objetivos e desenvolvê-lo ainda mais.
    </S.ODVsDescription>
    <S.IconsWrapper>
      <div>
        <img
          src="/img/Volunteers/book.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Consciência</span>
        <span>Educacional</span>
      </div>
      <div>
        <img
          src="/img/Volunteers/network.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Networking</span>
      </div>
      <div>
        <img
          src="/img/Volunteers/team.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Liderança</span>
      </div>
      <div>
        <img
          src="/img/Volunteers/brain.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Conhecimento</span>
      </div>
      <div>
        <img
          src="/img/Volunteers/light-bulb.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Inovação</span>
      </div>
      <div>
        <img
          src="/img/Volunteers/mirror.png"
          alt="Foto abaixo do título de dois amigos rindo ao olhar para um celular"
        />
        <span>Autoconhecimento</span>
      </div>
    </S.IconsWrapper>
  </S.Wrapper>
);

export default OurImpactAndODV;
