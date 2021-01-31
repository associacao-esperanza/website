import { Description } from "components/AboutUs/styles";
import React, { Fragment } from "react";

import * as S from "./styles";

const AmbassadorCharacteristics = () => {
  const characteristics = [
    {
      icon: "/img/Ambassadors/clock.svg",
      description: "120 horas de experiência",
    },
    {
      icon: "/img/Ambassadors/book.svg",
      description: "7 Cursos",
    },
    {
      icon: "/img/Ambassadors/mentor.svg",
      description: "Mentorias",
    },
    {
      icon: "/img/Ambassadors/learn.svg",
      description: "Guias de aprendizagem",
    },
    {
      icon: "/img/Ambassadors/certificate.svg",
      description: "Certificado de conclusão",
    },
  ];
  return (
    <S.Wrapper>
      <S.Title>O programa de embaixadores Esperanza</S.Title>
      <S.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </S.Description>
      <S.Title>Características do programa</S.Title>
      <S.CharacteristicsWrapper>
        {characteristics.map((characteristic) => (
          <S.CharacteristicWrapper key={characteristic.description}>
            <S.Icon src={characteristic.icon} />
            <S.CharacteristicDescription>
              {characteristic.description}
            </S.CharacteristicDescription>
          </S.CharacteristicWrapper>
        ))}
      </S.CharacteristicsWrapper>
    </S.Wrapper>
  );
};

export default AmbassadorCharacteristics;
