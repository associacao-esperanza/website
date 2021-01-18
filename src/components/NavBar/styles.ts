import styled from "styled-components";
import { DESKTOP_WIDTH } from "styles/constants";

export const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  padding: 8px 28px 8px 8px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    padding: 8px 24px;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    flex-wrap: nowrap;
    background: none;
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
export const Item = styled.li<ItemProps>`
  padding: 10px;
  order: 3;
  width: 100%;
  text-align: center;

  display: ${(props) => (props.active ? "block" : "none")};

  @media all and (min-width: ${DESKTOP_WIDTH}) {
    order: 1;
    /* position: relative; */
    /* display: block; */
    /* width: auto; */
    display: flex;
    justify-content: flex-end;
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
  &:focus {
    outline-style: none;
  }
`;
