import styled from "styled-components";
import { DESKTOP_WIDTH, SMALL_DESKTOP_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  font-family: MADE TOMMY;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1a407d;
  text-align: center;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  padding: 44px 0;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    background-color: rgb(255, 255, 255);
  }
`;

export const Title = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  padding-bottom: 20px;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
  }
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 30px;

  @media all and (min-width: ${SMALL_DESKTOP_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (min-width: ${DESKTOP_WIDTH}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
