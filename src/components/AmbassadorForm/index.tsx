import Button, { ButtonType } from "components/Button";
import React from "react";

import * as S from "./styles";

export interface FormProps {
  name: string;
  email: string;
  phone: string;
  labelName: string;
  labelEmail: string;
  labelPhone: string;
}

const AmbassadorForm: React.FC<FormProps> = ({
  children,
  name,
  email,
  phone,
  labelName,
  labelEmail,
  labelPhone,
  ...props
}) => {
  const sendForm = () => {};

  return (
    <S.Wrapper onSubmit={sendForm}>
      <S.FormTitle>SE INSCREVA PARA SER EMBAIXADOR!</S.FormTitle>
      <S.FormLabel htmlFor={labelName}>{labelName}</S.FormLabel>
      <S.FormInput />
      <S.FormLabel htmlFor={labelEmail}>{labelEmail}</S.FormLabel>
      <S.FormInput />
      <S.FormLabel htmlFor={labelPhone}>{labelPhone}</S.FormLabel>
      <S.FormInput labelPhone={labelPhone}/>
      <Button type={ButtonType.PRIMARY} children={"Inscrever-se"} />
    </S.Wrapper>
  );
};

export default AmbassadorForm;
