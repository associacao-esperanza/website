import styled from "styled-components";

interface CardProps {
  bgPic: string;
}

export const Wrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 330px;
  width: 560px;
  border-radius: 4px;
  background-image: linear-gradient(
      rgb(26, 64, 125, 0.5),
      rgb(26, 64, 125, 0.5)
    ), url(${(props) => props.bgPic});
  background-size: cover;
  justify-content: flex-end;
  align-items: flex-start;
  color: #ffff;
  text-align: left;
`;

export const Span = styled.span`
padding: 0 0 40px 40px;
`;

export const Icon = styled.img`
  width: 2vw;
  height: 2vw;
  min-width: 20px;
  max-width: 25px;
  max-height: 25px;
  min-height: 20px;
`;
