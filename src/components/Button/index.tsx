import React from "react";

import * as S from "./styles";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export interface ButtonProps {
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = ButtonType.PRIMARY,
  ...props
}) => (
  <S.Wrapper {...props} buttonType={type}>
    {children}
  </S.Wrapper>
);

export default Button;
