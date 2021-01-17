import React, { Fragment } from "react";

import * as S from "./styles";

const AmbassadorProgram = () => {
  const steps = [
    {
      title: "1º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      title: "2º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      title: "3º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      title: "4º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
  ];
  return (
    <S.Wrapper>
      <S.Img />
      <S.Title> Programa Embaixadores Esperanza</S.Title>

      <S.Description>
        Se diferencie para o mercado de trabalho através do nosso plano de
        formação e desenvolvimento e faça sua parte na educação de populações
        que realmente precisam.
      </S.Description>
      <S.StepsTitle>Como funciona?</S.StepsTitle>
      <S.StepsWrapper>
        {steps.map((step) => (
          <S.StepWrapper key={step.title}>
            <S.Sphere />
            <S.StepTitle>{step.title}</S.StepTitle>
            <S.StepDescription>{step.description}</S.StepDescription>
          </S.StepWrapper>
        ))}
      </S.StepsWrapper>
    </S.Wrapper>
  );
};

export default AmbassadorProgram;
