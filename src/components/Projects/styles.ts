import styled from "styled-components";
import { TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 1.25; // 45px
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;

  @media all and (min-width: ${TABLET_WIDTH}) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
`;
