import styled from "styled-components";
import { TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 0 10px;
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
`;

export const Description = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.5%;
  color: #000000;
  padding: 0 20px 200px 20px;
  text-align: left;

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-self: center;
    max-width: 1244px;
    margin-top: 43px;
  }
`;
