import React from "react";
import { Motion, spring } from "react-motion";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import "../styles/reset.css";
import "../styles/common.scss";
import { Abnormal, Main } from "../elements/main";
import { colors } from "../elements/settings";

export default ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      height: `100vh`,
      background: `${colors.white}`
    }}
  >
    <Logo />
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: spring(1, { stiffness: 10, damping: 15 }) }}
    >
      {value => (
        <div style={{ opacity: value.opacity }}>
          <SocialIcons />
          <Main>{children()}</Main>
          <Nav />
        </div>
      )}
    </Motion>
  </div>
);
