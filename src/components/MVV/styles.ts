import styled from "styled-components";

export const Wrapper = styled.section``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;

  border-radius: 50%;
  background: linear-gradient(
      180deg,
      rgba(158, 0, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ff9900;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 2.25rem; // 36px
  line-height: 0.888; // 32px
  margin-top: 14px;
  margin-bottom: 0;
`;

export const Description = styled.p`
  font-size: 1.125rem; // 18px
  line-height: 1.44; // 26px
`;
