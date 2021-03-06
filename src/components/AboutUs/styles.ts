import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

export const Wrapper = styled.section`
  background-color: #ef7916;
  color: #fff;
  padding: 32px 10px 40px 10px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Messages = styled.div`
  margin: auto;
  max-width: 390px;

  @media all and (min-width: ${TABLET_WIDTH}) {
    max-width: 1200px;
  }
`;

export const Profile = styled.div`
  background: #ffffff;
  color: #000;
  font-family: Roboto, sans-serif;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  &::before {
    content: url("/img/leftQuote.png");
    float: left;
    margin-right: 10px;
  }

  font-size: 1.125rem; // 18px
  line-height: 1.166666667; // 21px
  margin: 13px 10px;

  text-align: center;

  &::after {
    content: url("/img/rightQuote.png");
    float: right;
    margin-left: 10px;
  }
`;

export const ClearFix = styled.div`
  &::before,
  &::after {
    content: " ";
    display: table;
    clear: both;
  }
`;

export const Author = styled.div`
  font-size: 1.1875rem; // 19px
  line-height: 1.157894737; // 22px
  padding: 10px 10px 23px 10px;
`;
