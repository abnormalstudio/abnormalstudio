import styled from "styled-components";
import Link from "gatsby-link";

import { padding, margin, fonts, colors } from "./settings";

const Navigation = styled.nav`
  width: 100vw;
  margin-top: ${margin.medium};

  @media (max-width: 810px) {
    margin-top: calc(${margin.small} - 10px);
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  height: 5vh;
`;

const NavItem = styled.li`
  width: 33.33%;
  text-align: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${fonts.nav};
  font-size: 1.2rem;
  color: ${colors.greyish};
  transition: all 1s ease;

  &:hover {
    color: ${colors.white};
  }

  @media (max-width: 520px) {
    font-size: 0.85rem;
  }
`;

export { Navigation, NavList, NavItem, NavLink };
