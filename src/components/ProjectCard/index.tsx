import React from "react";

import * as S from "./styles";

interface cardProps {
  name: string;
  location: string;
  description: string;
  picture: string;
}

const ProjectCard: React.FC<cardProps> = ({
  name,
  location,
  description,
  picture
}) => (
  <S.Wrapper bgPic={picture}>
      <S.Span>{name}</S.Span>
      <S.Span>{description}</S.Span>
  </S.Wrapper>
);

export default ProjectCard;
