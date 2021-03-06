import React, { Fragment } from "react";
import AmbassadorForm from "components/AmbassadorForm";

import * as S from "./styles";

const AmbassadorProgram = () => {
  const steps = [
    {
      src: "/img/passo1.png",
      title: "1º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      src: "/img/passo2.png",
      title: "2º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      src: "/img/passo3.png",
      title: "3º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
    {
      src: "/img/passo4.png",
      title: "4º Passo",
      description: `Matricule-se até 30/10/2020*, realize todos os cursos dentro do prazo de 60 dias e certifique o seu conhecimento.`,
    },
  ];
  return (
    <S.Wrapper>
      <S.HeroWrapper>
        <S.Img />
        <S.TitleWrapper>
          <S.Title> Programa Embaixadores Esperanza</S.Title>

          <S.Description>
            Se diferencie para o mercado de trabalho através do nosso plano de
            formação e desenvolvimento e faça sua parte na educação de
            populações que realmente precisam.
          </S.Description>
        </S.TitleWrapper>

        <AmbassadorForm
          labelName={"Nome completo"}
          labelEmail={"Seu melhor email"}
          labelPhone={"Telefone"}
        />
      </S.HeroWrapper>

      <S.StepsTitle>Como funciona?</S.StepsTitle>
      <S.StepsWrapper>
        {steps.map((step) => (
          <S.StepWrapper key={step.title}>
            <S.Sphere src={step.src} />
            <S.StepTitle>{step.title}</S.StepTitle>
            <S.StepDescription>{step.description}</S.StepDescription>
          </S.StepWrapper>
        ))}
      </S.StepsWrapper>
    </S.Wrapper>
  );
};

export default AmbassadorProgram;
