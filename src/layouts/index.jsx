import React from "react";
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
    <SocialIcons />
    <Main>{children()}</Main>
    <Nav />
  </div>
);
