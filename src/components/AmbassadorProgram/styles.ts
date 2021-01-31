import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 40px;

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
  padding-bottom: 50px;

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
  line-height: 20px;
  text-align: center;
  color: rgb(26, 64, 125.1);
  border-bottom: #ffa31a solid 12px;
`;

export const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1 fr;
  grid-template-rows: auto;
  justify-items: center;
  gap: 10px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Sphere = styled.img`
  width: 160px;
  height: 160px;
  background-color: grey;
  border-radius: 50%;
  margin: 30px 0;
`;

export const StepTitle = styled.span`
  color: rgb(239, 121, 22, 1);
  font-family: MADE TOMMY;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
`;

export const StepDescription = styled.span`
  font-family: MADE TOMMY;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`;
