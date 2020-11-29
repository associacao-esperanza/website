import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(
      rgba(200, 101, 18, 0.5),
      rgba(200, 101, 18, 0.5)
    ),
    url("/img/woman.png");
  background-size: cover;

  color: #ffffff;
  text-align: center;

  padding: 29px 14px 57px 14px;
`;

export const Title = styled.h2`
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 0;
  margin-bottom: 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px

  margin-top: 33px;
  margin-bottom: 190px;
`;
