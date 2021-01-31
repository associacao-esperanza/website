import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 360px;
  width: 280px;
  border-radius: 4px;
`;


export const Img = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 4px 4px 0 0;
  margin-bottom: 20px;
`;


export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto;
  gap: 20px 3px;
  text-align: left;
`;

export const Span = styled.span``;

export const Icon = styled.img`
  width: 2vw;
  height: 2vw;
  min-width: 20px;
  max-width: 25px;
  max-height: 25px;
  min-height: 20px;
`;
