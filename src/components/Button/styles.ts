import styled from "styled-components";
import { ButtonType } from ".";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "styles/constants";


interface ButtonProps {
  buttonType: ButtonType;
  inactive: boolean;
}

const backgroundColor = (type: ButtonType) => {
  switch (type) {
    case ButtonType.SECONDARY:
      return "#2AB5D3";
    case ButtonType.TERTIARY:
      return "#1A407D";
    default:
      return "#EF7916";
  }
};

export const Wrapper = styled.button<ButtonProps>`
  display: ${(props) => (props.inactive ? "none" : "block")};
  color: #fff;
  padding-top: 12px;
  padding-bottom: 12px;

  background: ${(props) => backgroundColor(props.buttonType)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 7px;

  font-weight: 400;
  font-size: 1.375rem; // 22px
  line-height: 1.227272727; // 27px

  width: 16.9375rem; // 271px


  @media all and (min-width: ${TABLET_WIDTH}) {
    display: ${(props) => (props.inactive ? "block" : "block")};
  }

`;
