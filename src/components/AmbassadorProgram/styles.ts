import styled from "styled-components";
import { DESKTOP_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 40px;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
  }
`;

export const Img = styled.img`
  width: 244px;
  height: 350px;
  background-color: grey;
`;

export const Title = styled.h1`
  font-family: MADE TOMMY;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
`;

export const Description = styled.p`
  font-family: Work Sans;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 480px;
    align-self: center;
    text-align: center;
  }
`;

export const StepsTitle = styled.span`
  font-family: MADE TOMMY;
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
  color: rgb(26,64,125.1);
  border: #ffa31a solid 4px;
`;
export const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1 fr;
  grid-template-rows: auto;
`;
