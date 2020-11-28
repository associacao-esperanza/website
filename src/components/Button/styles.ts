import styled from "styled-components";
import { ButtonType } from ".";

interface ButtonProps {
  buttonType: ButtonType;
}

export const Wrapper = styled.button<ButtonProps>`
  color: #fff;
  padding-top: 12px;
  padding-bottom: 12px;

  background: ${(props) =>
    props.buttonType === ButtonType.SECONDARY ? "#2AB5D3" : "#EF7916"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 7px;

  font-family: MADE TOMMY;
  font-style: normal;
  font-weight: 500;
  font-size: 1.375rem; // 22px
  line-height: 1.227272727; // 27px
`;
