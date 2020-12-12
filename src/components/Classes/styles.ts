import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  padding: 29px 14px 57px 14px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding: 57px 14px;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    padding-top: 97px;
    background-position: initial;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px

  margin-top: 2rem;
  margin-bottom: 11.875rem;

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 450px;

    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
