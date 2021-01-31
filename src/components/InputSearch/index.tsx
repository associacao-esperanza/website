import React from "react";

import * as S from "./styles";

export enum InputSearchType {
  PRIMARY,
}

export interface InputSearchProps {
  type?: InputSearchType;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  children,
  onChange,
  value,
  type = InputSearchType.PRIMARY,
  ...props
}) => (
  <S.Wrapper
    {...props}
    value={value}
    onChange={onChange}
    inputSearchType={type}
    placeholder={placeholder}
  >
    {children}
  </S.Wrapper>
);

export default InputSearch;
