import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../../styles/constants";

export const Wrapper = styled.section`
  text-align: center;
  margin-top: 18px;
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
  margin-bottom: 9px;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(42, 181, 211, 0.7);
  padding: 20px 0;
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 45px;
    padding-bottom: 45px;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    max-width: 1244px;
    margin: auto;
  }
`;

export const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  border-radius: 50%;

  background: #fff;

  margin: 12px;
`;
