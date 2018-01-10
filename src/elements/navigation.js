import styled from 'styled-components';
import Link from 'gatsby-link';

const Navigation = styled.nav`
  width: 100vw;
  margin-top: 100px;
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
`;

export { Navigation, NavList, NavItem, NavLink };
