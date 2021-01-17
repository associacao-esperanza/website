import styled from "styled-components";
import {
  DESKTOP_WIDTH,
  SMALL_DESKTOP_WIDTH,
  TABLET_WIDTH,
} from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  background-color: #1a407d;
  padding: 52px 20px;
  color: #fff;
  margin-bottom: 20%;
  text-align: left;

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
      transform: skew(0, -6deg);
    }
  }

  @media all and (min-width: ${TABLET_WIDTH}) {
    padding: 52px 40px 0 40px;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
  margin-top: 9px;
  margin-bottom: 20px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    align-self: left;
    max-width: 1244px;
    margin-top: 43px;
  }
`;

export const CharacteristicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  @media all and (min-width: ${SMALL_DESKTOP_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CharacteristicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 10px 10px 0;
`;

export const CharacteristicDescription = styled.span`
  font-family: MADE TOMMY;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  max-width: 160px;
`;
