import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  background-color: #ffff;
  padding: 32px 10px 40px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  text-decoration: underline 10px #2ab5d3;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-bottom: 50px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 1250px;
    min-width: 700px;
    width: 70vw;
  }
`;

export const Profile = styled.div`
  background: #ffffff;
  color: #000;
  margin: 17px 13px;
  font-family: Roboto, sans-serif;
  max-width: 365px;
  display: flex;
  flex-direction: column;

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
  }

  div:first-child {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 144.5%;
  text-align: left;
  padding-left: 10px;
`;

export const Area = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 144.5%;
  text-align: left;
  padding: 10px 10px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  > * + * {
    margin-top: 18px;
  }

  @media all and (min-width: ${TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: center;
    margin-top: 87px;

    > * + * {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`;
