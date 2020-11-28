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
  padding: 115px 52px 27px 52px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 32px;

  text-align: center;
  color: #ffffff;
`;

export const Description = styled.p`
  font-weight: 100;
  font-size: 18px;
  line-height: 26px;

  text-align: center;
  color: #ffffff;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  > * + * {
    margin-top: 18px;
  }
`;
