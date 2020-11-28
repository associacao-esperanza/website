import Button from "components/Button";
import HeroSection from "components/HeroSection";
import React from "react";

import * as S from "./styles";

const Main = ({}) => (
  <S.Wrapper>
    <HeroSection />
    <div>
      <h2>Nosso projeto</h2>
      <p>O que estamos fazendo para gerar impacto na educação?</p>
    </div>
    <div>
      <h3>Cursinho Popular Esperanza</h3>
      <p>
        Um cursinho popular que promove o acesso dos alunos a Universidade
        Pública através do ENEM.
      </p>
      <button>Saiba mais</button>
    </div>
    <div>
      <h2>Nossa História</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
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
    {/* Remove footer from here */}
    <footer>
      <div>
        <h2>Associação Esperanza</h2>
        <p>
          Uma iniciativa que busca dar acesso a educação pública de qualidade
          para todos.
        </p>
      </div>
      <div>
        <h4>Quer ajudar?</h4>
        <a href="">Seja doador</a>
        <a href="">Seja um parceiro</a>
        <a href="">Seja voluntário</a>
      </div>
      <div>
        <h4>Redes sociais</h4>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Linkedin</a>
      </div>
    </footer>
  </S.Wrapper>
);

export default Main;
