import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;

  background-image: linear-gradient(
      rgba(200, 101, 18, 0.5),
      rgba(200, 101, 18, 0.5)
    ),
    url("/img/woman.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  text-align: center;
  padding-top: 10vw;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    min-height: 450px;
    background-position: initial;
    padding-top: 5rem;
  }
`;

export const Title = styled.h2`
  width: 90%;
  font-size: 2.3rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
`;

export const Description = styled.p`
  width: 80%;
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
  margin-top: 2rem;
  margin-bottom: 11.875rem;
  font-family: Work Sans;
  margin: 0;
  margin: 8vw 0 22vw 0;

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 450px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;
