import styled from "styled-components";
import { InputSearchType } from ".";

interface InputSearchProps {
  inputSearchType: InputSearchType;
}

const backgroundColor = (type: InputSearchType) => {
  switch (type) {
    case InputSearchType.PRIMARY:
      return "#fffff";

    default:
      return "#fffff";
  }
};

export const Wrapper = styled.input<InputSearchProps>`
  max-width: 700px;
  color: black;
  background: ${(props) => backgroundColor(props.inputSearchType)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 90%;
  height: 46px;
  padding: 0 20px;
  margin-bottom: 40px;
`;
