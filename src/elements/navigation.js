import styled from 'styled-components';
import Link from 'gatsby-link';

import { padding, margin, fonts, colors } from './settings';

const Navigation = styled.nav`
  width: 100vw;
  margin-top: ${margin.medium};
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
  color: ${colors.black};
  transition: text-decoration 1s ease;

  &:hover {
    text-decoration: line-through;
    color: ${colors.hover};
  }
`;

export { Navigation, NavList, NavItem, NavLink };
