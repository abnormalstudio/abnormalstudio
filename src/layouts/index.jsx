import React from 'react';
import Nav from '../components/Nav';
import '../styles/reset.css';
import '../styles/common.scss';
import { Abnormal, Main } from '../elements/main';
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
      ABNORMAL<br />studio
    </Abnormal>
    <Main>{children()}</Main>
    <Nav />
  </div>
);
