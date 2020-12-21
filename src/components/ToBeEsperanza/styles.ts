import styled from "styled-components";
import { TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  background-color: rgb(42, 181, 211, 1);
  padding: 20px 10px 50px 10px;
  color: #fff;
  margin-bottom: 20%;

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
      height: 250%;
      transform: skew(0, -6deg);
    }
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-family: MADE TOMMY;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 780px;
  max-height: 522px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding-left: 30px
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

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-self: center;
    max-width: 1244px;
    margin-top: 43px;
  }
`;
