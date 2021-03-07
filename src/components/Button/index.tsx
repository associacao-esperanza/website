import React from "react";

import * as S from "./styles";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export interface ButtonProps {
  type?: ButtonType;
  isButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = ButtonType.PRIMARY,
  isButton = true,
  ...props
}) => (
  <S.Wrapper {...props} buttonType={type} isButton={isButton}>
    {children}
  </S.Wrapper>
);

export default Button;
