import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  background-color: rgb(42, 181, 211, 1);
  padding: 20px 10px 50px 10px;
  color: #fff;
  margin-bottom: 20%;
  max-width: 1280px;

  &::after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: rgb(42, 181, 211, 1);
    transform-origin: bottom right;
    transform: skew(0, -10deg);

    @media all and (min-width: ${TABLET_WIDTH}) {
      display: none;    
      transform: none;
    }

    @media all and (min-width: ${TABLET_WIDTH}) {
      display: none;
    }
  }

  @media all and (min-width: ${TABLET_WIDTH}) {
      transform: none;
      border-radius: 0 0 5vw 5vw;
    }


  @media all and (min-width: ${DESKTOP_WIDTH}) {
    flex-direction: row;
    margin-right: 10%;
    border-radius: 0 60px 60px 0;
    padding: 100px 50px 25px 25px;
    margin-bottom: 25px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-family: MADE TOMMY;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const TitleDesktop = styled.h2`
  display: none;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    font-family: MADE TOMMY;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    color: #ffff;
    display: block;
    text-align: left;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 780px;
  max-height: 522px;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    padding-left: 30px;
    width: 780px;
    height: 522px;
    margin-right: 25px;
  }
`;

export const Description = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  padding: 0 10px;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    align-self: center;
    max-width: 1244px;
    margin-top: 43px;
    padding: 0 0;
  }
`;
