import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 1244px;
    margin: auto;
  }
`;

export const Title = styled.h3`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  align-items: center;
  text-align: center;
  color: #000000;
  text-decoration: underline 10px #ff9900;
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
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.5%;
  padding: 0 10px 100px 10px;
`;
