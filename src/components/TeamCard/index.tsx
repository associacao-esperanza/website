import React from "react";

import * as S from "./styles";

interface cardProps {
  name: string;
  role: string;
  location: string;
  linkedin: string;
  picture: string;
  iconLocation: string;
  iconUser: string;
  iconRole: string;
  iconLinkedin: string;
}

const TeamCard: React.FC<cardProps> = ({
  name,
  role,
  location,
  linkedin,
  picture,
  iconLocation,
  iconUser,
  iconRole,
  iconLinkedin,
}) => (
  <S.Wrapper>
    <S.Img src={picture} />
    <S.InfoWrapper>
      <S.Icon src={iconUser} />
      <S.Span>{name}</S.Span>
      <S.Icon src={iconRole} />
      <S.Span>{role}</S.Span>
      <S.Icon src={iconLocation} />
      <S.Span>{location}</S.Span>
      <S.Icon src={iconLinkedin} />
      <S.Span>{linkedin}</S.Span>
    </S.InfoWrapper>
  </S.Wrapper>
);

export default TeamCard;
