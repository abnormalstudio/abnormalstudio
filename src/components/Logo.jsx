import React from "react";
import { LogoImage, LogoLink } from "../elements/logo";
import logo from "../images/AbLogo.svg";

export default class Logo extends React.Component {
  render() {
    return (
      <LogoLink to="/">
        <LogoImage src={logo} alt="abnormal studio logo" />
      </LogoLink>
    );
  }
}
