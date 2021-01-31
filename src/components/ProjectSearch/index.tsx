import InputSearch from "components/InputSearch";
import ProjectCard from "components/ProjectCard";
import React, { useState } from "react";

import * as S from "./styles";

const TeamSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const projects = [
    {
      name: "Cursinho Popular Online Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
    {
      name: "Cursinho Popular Presencial Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
    {
      name: "Cursinho Popular Online Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
    {
      name: "Cursinho Popular Presencial Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
    {
      name: "Cursinho Popular Online Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
    {
      name: "Cursinho Popular Presencial Pre-vest",
      description: "Não sei bem o que escrever sobre mas o cursinho é bem legal, aulas online etc.",
      location: "Viçosa-MG",
      picture: '/img/Initiatives/bgPic.png'
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toUpperCase().search(inputValue.toUpperCase()) !== -1
  );

  return (
    <S.Wrapper>
      <S.Title> Confira os projetos apoiados</S.Title>
      <InputSearch
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setInputValue(e.currentTarget.value)
        }
        placeholder="Pesquise aqui..."
      />

      <S.Board>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            picture={project.picture}
            location={project.location}
          />
        ))}
      </S.Board>
    </S.Wrapper>
  );
};
export default TeamSearch;
