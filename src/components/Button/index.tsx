import React from "react";

import * as S from "./styles";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export interface ButtonProps {
  type?: ButtonType;
  inactive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = ButtonType.PRIMARY,
  inactive = false,
  ...props
}) => (
  <S.Wrapper {...props} buttonType={type} inactive={inactive}>
    {children}
  </S.Wrapper>
);

export default Button;
