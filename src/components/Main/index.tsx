import HeroSection from "components/HeroSection";
import History from "components/History";
import Classes from "components/Classes";
import Projects from "components/Projects";
import React from "react";

import * as S from "./styles";

const Main = ({}) => (
  <S.Wrapper>
    <HeroSection />
    <Projects />
    <Classes />
    <History />
    <div>
      <div>
        <img src="" alt="Foguete subindo" />
        <h4>Missão</h4>
        <p>
          - Um cursinho popular que promove o acesso dos alunos a Universidade
          Pública através do ENEM.
        </p>
      </div>
      <div>
        <img src="" alt="Binóculo" />
        <h4>Visão</h4>
        <p>
          - Um cursinho popular que promove o acesso dos alunos a Universidade
          Pública através do ENEM.
        </p>
      </div>
      <div>
        <img src="" alt="Caneta escrevendo em bloco de notas" />
        <h4>Valores</h4>
        <p>
          - Um cursinho popular que promove o acesso dos alunos a Universidade
          Pública através do ENEM.
        </p>
      </div>
    </div>
    <div>
      <h2>O que estão falando do Esperanza?</h2>
      <div>
        <div>
          <img src="" alt="Foto de Rafaela Maehara" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <div>- Rafaela Maehara (Diretora de Comunicação)</div>
        </div>
        <div>
          <img src="" alt="Foto de Rafaela Maehara" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <div>- Rafaela Maehara (Diretora de Comunicação)</div>
        </div>
        <div>
          <img src="" alt="Foto de Rafaela Maehara" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <div>- Rafaela Maehara (Diretora de Comunicação)</div>
        </div>
      </div>
    </div>
    <div>
      <h2>Nossos parceiros</h2>
      <p>
        Quem apoia o Esperanza para continuar gerando impacto através das ações?
      </p>
      <div>
        <img src="" alt="Logo da empresa A" />
        <img src="" alt="Logo da empresa B" />
        <img src="" alt="Logo da empresa C" />
        <img src="" alt="Logo da empresa D" />
      </div>
    </div>
  </S.Wrapper>
);

export default Main;
