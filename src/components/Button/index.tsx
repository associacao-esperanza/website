import React from "react";

import * as S from "./styles";

const Button: React.FC = ({ children, ...props }) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);

export default Button;
