import Button, { ButtonType } from "components/Button";
import React from "react";

import * as S from "./styles";

export interface HeroProps {
  title: string;
  description: string;
  background: string;
  isButton?: boolean;
  buttonType?: ButtonType;
  buttonName?: string;
}

const HeroBlock: React.FC<HeroProps> = ({
  children,
  title,
  description,
  isButton = false,
  buttonType = ButtonType.SECONDARY,
  buttonName = "BOTÃO",
  background,
  ...props
}) => {
  return (
    <S.Wrapper {...props} background={background}>
      <S.Title> {title} </S.Title>

      <S.Description>{description}</S.Description>

      <S.Actions>
        <Button isButton={isButton} type={buttonType}>
            {buttonName}
          </Button>
      </S.Actions>
    </S.Wrapper>
  );
};

export default HeroBlock;
