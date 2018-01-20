import React from 'react';
import logo from '../images/AbLogo.svg';
import Nav from '../components/Nav';
import SocialIcons from '../components/SocialIcons';
import '../styles/reset.css';
import '../styles/common.scss';
import { Abnormal, Main } from '../elements/main';
import { Logo } from '../elements/logo';

import { padding, margin, fonts, colors } from '../elements/settings';

export default ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      height: `100vh`,
      background: `${colors.white}`
    }}
  >
    <Abnormal>
      <Logo src={logo} alt="abnormal logo" />
    </Abnormal>
    <SocialIcons />
    <Main>{children()}</Main>
    <Nav />
  </div>
);
