import styled from "styled-components";
import { TABLET_WIDTH } from "../../styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  background-color: #1a407d;
  color: #fff;
  padding: 32px 10px 40px 10px;

  &::after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #1a407d;
    transform-origin: bottom right;
    transform: skew(0, -10deg);
    

    @media all and (min-width: ${TABLET_WIDTH}) {
      height: 200%;
      transform: skew(0, -6deg);
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
  font-family: MADE TOMMY;
  font-weight: 500;
  text-align: left;
  padding: 0 10px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding: 0 0;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
  margin-top: 9px;
  margin-bottom: 0;
  text-align: left;
  font-family: Work Sans;
  padding: 0 10px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-self: center;
    text-align: center;
    max-width: 1244px;
    margin-top: 43px;
  }
`;
