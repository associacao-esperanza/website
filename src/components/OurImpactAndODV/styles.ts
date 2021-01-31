import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-items: center;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #000000;
  text-decoration: underline 10px #ff9900;

  @media all and (min-width: ${TABLET_WIDTH}) {
    width: 100%;
    background-color: rgb(42, 181, 211);
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  justify-content: center;

  @media all and (min-width: ${TABLET_WIDTH}) {
    width: 100%;
    background-color: rgb(42, 181, 211);
    flex-direction: row;
    padding: 20px 0;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding: 0 50px;
  }
`;

export const ImpactNumbers = styled.span`
  color: #ff9900;
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const ImpactDescription = styled.span`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 20px;
  max-width: 250px;
`;

export const ODVsTitle = styled.p`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  text-decoration: underline 10px #1a407d;
`;

export const ODVsDescription = styled.span`
  max-width: 1235px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.5%;
  padding: 0 10px 100px 10px;
`;

export const IconsWrapper = styled.div`
  display: none;
  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 1070px;
    display: grid;
    grid-template-columns: repeat(3, 175px);
    grid-auto-rows: 145px;
    grid-gap: 8vw 13vw;

    img {
      background: #ef7916;
      outline: solid 25px #ef7916;
      margin-bottom: 50px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
`;
