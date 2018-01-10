import React from 'react';

import { Navigation, NavList, NavItem, NavLink } from '../elements/navigation';

export default class Nav extends React.Component {
  render() {
    return (
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">CONTACT</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    );
  }
}
