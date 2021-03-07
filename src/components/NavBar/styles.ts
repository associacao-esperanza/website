import styled from "styled-components";
import { DESKTOP_WIDTH } from "styles/constants";

export const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  padding: 8px 28px 8px 8px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    padding: 12px 0;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    flex-wrap: nowrap;
    background: none;
    padding: 0 40px;
  }
`;

export const LogoDesktop = styled.img`
  display: none;
  width: 225px;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    display: block;
  }
`;

export const LogoMobile = styled.img`
  display: block;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const Logo = styled.li`
  display: flex;
  order: 2;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    order: 0;
  }
`;

export interface ItemProps {
  active?: boolean;
}

export const ItemWrapper = styled.div`
  display: none;
  @media all and (min-width: ${DESKTOP_WIDTH}) {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;
export const Item = styled.li<ItemProps>`
  width: 15%;
  order: 3;
  text-align: center;

  display: ${(props) => (props.active ? "block" : "none")};

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    order: 1;
    /* position: relative; */
    /* display: block; */
    /* width: auto; */
    display: flex;
    justify-content: center;
  }
`;

export const Toggle = styled.li`
  order: 1;
  font-size: 1.625rem; // 26px

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const Link = styled.a`
  display: flex;
  font-weight: bold;

  &:focus {
    outline-style: none;
  }
`;
