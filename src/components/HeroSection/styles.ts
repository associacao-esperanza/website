import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-image: linear-gradient(
      rgba(26, 64, 125, 0.5),
      rgba(26, 64, 125, 0.5)
    ),
    url("/img/group.png");
  background-size: cover;
`;

export const Title = styled.h1`
  color: #ffffff;
`;

export const Description = styled.p`
  color: #ffffff;
`;
