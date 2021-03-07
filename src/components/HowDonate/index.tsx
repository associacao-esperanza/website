import Button, { ButtonType } from "components/Button";
import { PageWrapper } from "components/PageWrapper/style";
import React from "react";

import * as S from "./styles";

const HowDonate = () => (
  <S.Wrapper>
      <S.Title>Meios de doação</S.Title>
      <S.DonationWays>
        <S.Monthly>
          <S.DonationWaysTitle>Doar mensalmente:</S.DonationWaysTitle>

          <Button type={ButtonType.SECONDARY}>Doe no apoia.se</Button>
        </S.Monthly>
        <S.Transfer>
          <S.DonationWaysTitle>
            Transferência ou Depósito bancário
          </S.DonationWaysTitle>
          <S.DonationWaysDescription>
            Razão Social:
            <br />
            CNPJ
            <br />
            Banco
            <br />
            Agência
            <br />
            Conta
            <br />
            Operação
            <br />
          </S.DonationWaysDescription>
        </S.Transfer>
      </S.DonationWays>
  </S.Wrapper>
);

export default HowDonate;
