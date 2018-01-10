import React from 'react';
import Link from 'gatsby-link';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
