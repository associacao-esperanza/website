import styled from "styled-components";
import { TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  margin: 34px 20px 0 20px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem; // 24px
  line-height: 1.25; // 30px

  color: #1a407d;

  @media all and (min-width: ${TABLET_WIDTH}) {
    text-align: center;
    font-size: 3.4375rem; // 55px
  }
`;

export const Highlight = styled.span`
  position: relative;
  font-weight: bold;
  color: #1a407d;
  background-color: #ff9900;

  &:after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: #ffffff;
  }
`;

export const Description = styled.p`
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px

  @media all and (min-width: ${TABLET_WIDTH}) {
    text-align: center;
    margin: auto;
    padding: 35px;
    font-size: 1.5rem; // 24px
    max-width: 1244px;
  }
`;
