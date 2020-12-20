import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(200, 101, 18, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 115px 52px 27px 52px;
  color: #ffffff;
  text-align: left;
`;

export const Title = styled.h1`
  font-family: MADE TOMMY;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${TABLET_WIDTH}) {
    margin: 100px 0 0 0;
    margin-bottom: 0;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    margin: 200px 0 0 0;
  }
`;

export const Description = styled.p`
  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  padding-bottom: 62px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 480px;
    align-self: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
