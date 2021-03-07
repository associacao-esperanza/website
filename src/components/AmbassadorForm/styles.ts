import styled from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";

interface InputProps {
  labelPhone?: string
}

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 7px;
  height: 451px;
  width: 389px;

  @media all and (min-width: ${TABLET_WIDTH}) {
  }
`;

export const FormTitle = styled.span`
  width: 80%;
  font-family: MADE TOMMY;
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  margin: 20px 0;
`;
export const FormLabel = styled.label`
  width: 80%;
  font-family: MADE TOMMY;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 10px;
`;

export const FormInput = styled.input<InputProps>`
  width: 80%;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  ${props => props.labelPhone ? "margin-bottom: 30px" : "  margin-bottom: 20px"}
`;
