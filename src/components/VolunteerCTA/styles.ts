import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(200, 101, 18, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 115px 52px 27px 52px;
  color: #ffffff;
  text-align: left;
  box-sizing: border-box;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    padding: 170px 0 27px 0;
    align-items: center;
    background: url(/img/Volunteers/capa-voluntariado.png),
      rgba(200, 101, 18, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Title = styled.h1`
  font-family: MADE TOMMY;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${TABLET_WIDTH}) {
    margin: 100px 0 0 0;
    margin-bottom: 0;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    font-family: MADE TOMMY;
    font-size: 55px;
    font-style: normal;
    font-weight: 500;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Description = styled.p`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  padding-bottom: 62px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 480px;
    align-self: center;
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  > * + * {
    margin-top: 18px;
  }

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: center;
    margin-top: 87px;

    > * + * {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`;
