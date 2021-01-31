import InputSearch from "components/InputSearch";
import TeamCard from "components/TeamCard";
import React, { useState } from "react";

import * as S from "./styles";

const TeamSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const teamMembers = [
    {
      name: "Rafaela Marhara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
    {
      name: "João Marhara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
    {
      name: "Joana Mahara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
    {
      name: "Ivo Marhara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
    {
      name: "Ivo Marhara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
    {
      name: "Ivo Marhara",
      role: "Diretora de Comunicação",
      location: "Viçosa-MG",
      linkedin: "/rafaelamaehara",
      profilePic: "/img/Team/foto.png",
    },
  ];

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toUpperCase().search(inputValue.toUpperCase()) !== -1
  );

  return (
    <S.Wrapper>
      <S.Title> Já sabe quem quer encontrar?</S.Title>
      <InputSearch
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setInputValue(e.currentTarget.value)
        }
        placeholder="Pesquise aqui..."
      />

      <S.Board>
        {filteredMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            location={member.location}
            linkedin={member.linkedin}
            picture={member.profilePic}
            iconLocation={"/img/Team/locationicon.png"}
            iconUser={"/img/Team/usericon.png"}
            iconRole={"/img/Team/roleicon.png"}
            iconLinkedin={"/img/Team/linkedinicon.png"}
          />
        ))}
      </S.Board>
    </S.Wrapper>
  );
};
export default TeamSearch;
