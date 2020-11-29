import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(26, 64, 125, 0.5),
      rgba(26, 64, 125, 0.5)
    ),
    url("/img/group.png");
  background-size: cover;

  padding: 115px 52px 27px 52px;
  color: #ffffff;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 32px;
`;

export const Description = styled.p`
  font-weight: 100;
  font-size: 18px;
  line-height: 26px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
    margin-top: 18px;
  }
`;
