import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

interface HeroStyleProps {
  background: string
}

export const Wrapper = styled.section<HeroStyleProps>`
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 115px 52px 27px 52px;
  color: #ffffff;
  text-align: left;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgb(42, 181, 211, 0.3),
      rgb(42, 181, 211, 0.3)
    ),
    url(${(props => props.background)});
  @media all and (min-width: ${DESKTOP_WIDTH}) {
    height: 75vh;
    padding: 10vh 0 77px 8vw;
    background-position: 50% 0;
  }

`;

export const Title = styled.h1`
  font-family: MADE TOMMY;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px 0;

  @media all and (min-width: ${TABLET_WIDTH}) {
    margin: 100px 0 50px 0;
    max-width: 600px;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    font-family: MADE TOMMY;
    font-size: 55px;
    font-style: normal;
    font-weight: 500;
    line-height: 57px;
    letter-spacing: 0em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Description = styled.p`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px 0;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 780px;
    font-family: MADE TOMMY;
    font-size: 23px;
    font-weight: 300;
    line-height: 33px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  > * + * {
    margin-top: 18px;
  }

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;

    > * + * {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`;
