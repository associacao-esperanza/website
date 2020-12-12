import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.footer`
  background: #2b2f34;
  color: #fff;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 45px;
    padding-right: 45px;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 1244px;
    margin: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin: 0 10px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 260px;
    text-align: justify;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-family: Work Sans, sans-serif;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px

  margin: 9px 10px 0 10px;

  max-width: 260px;
  @media all and (min-width: ${TABLET_WIDTH}) {
    text-align: justify;
  }
`;

export const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  margin-top: 22px;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem; // 24px
  line-height: 1.5; // 36px
  margin-top: 0;
  margin-bottom: 0;
`;

export const Link = styled.a`
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
`;
