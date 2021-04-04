import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroWrapper = styled.div`
  display: flex;
  padding: 150px 0 100px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    width: 80%;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    flex-direction: column;
    width: 40%;
  }
`;

export const Img = styled.img`
  width: 244px;
  height: 350px;
  background-color: grey;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: MADE TOMMY;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
  width: 90%;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    width: 90%;
  }
`;

export const Description = styled.span`
  width: 90%;
  font-family: Work Sans;
  font-size: 23px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 50px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    width: 50%;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 480px;
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
  width: 90%;
  width: 90%;
  display: grid;
  grid-template-columns: 1 fr;
  grid-template-rows: auto;
  justify-items: center;
  gap: 10px;
  margin-bottom: 60px;

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
  background: rgba(42, 181, 211, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
