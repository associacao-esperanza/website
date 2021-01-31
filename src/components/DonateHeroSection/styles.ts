import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../../styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(26, 64, 125, 0.5),
      rgba(26, 64, 125, 0.5)
    ),
    url("/img/groupDonate.png");
  background-size: cover;
  background-repeat: no-repeat;

  color: #ffffff;
  padding: 75px 20px 200px 20px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding: 115px 60px 60px 60px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2.25rem; // 36px
  line-height: 1.045; // 37.62px
  max-width: 500px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    font-size: 3.4375; // 55px
  }
`;

export const Description = styled.p`
  font-weight: 100;
  font-size: 1.125; // 18px
  line-height: 1.045; // 18.81px

  @media all and (min-width: ${TABLET_WIDTH}) {
    font-size: 1.4375rem; // 23px
    line-height: 1.434782609; // 33.23px
    max-width: 700px;
  }
`;
