import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(26, 64, 125, 0.5),
      rgba(26, 64, 125, 0.5)
    ),
    url("/img/group.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 115px 52px 27px 52px;
  color: #ffffff;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 32px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    margin: 100px 0 0 0;
    margin-bottom: 0;
  }

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    margin: 200px 0 0 0;
  }
`;

export const Description = styled.p`
  font-weight: 100;
  font-size: 18px;
  line-height: 26px;

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
