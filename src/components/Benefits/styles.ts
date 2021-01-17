import styled from "styled-components";
import { TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  text-decoration: underline 10px #1a407d;
  margin: 0;
`;

export const Description = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.5%;
  color: #000000;
  padding: 0 20px 50px 20px;
  text-align: left;

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-self: center;
    max-width: 1244px;
    margin-top: 43px;
  }
`;

export const IconsWrapper = styled.div`
  display: none;
  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 1270px;
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-auto-rows: 100px;
    grid-gap: 8vw;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
