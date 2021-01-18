import styled from "styled-components";
import { TABLET_WIDTH } from "../../styles/constants";

export const Wrapper = styled.section`
  margin: 34px 20px 0 20px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem; // 24px
  line-height: 1.25; // 30px

  color: #1a407d;

  @media all and (min-width: ${TABLET_WIDTH}) {
    text-align: center;
    font-size: 3.4375rem; // 55px
  }
`;

export const DonationWays = styled.div`
  display: flex;
  justify-content: center;
`;

export const DonationWaysTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 2.25rem; // 36px
  line-height: 1.445; // 52.02px
`;

export const Monthly = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Transfer = styled.div`
  margin-left: 50px;
`;

export const DonationWaysDescription = styled.div``;
