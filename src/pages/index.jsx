import React from "react";

import HomeScene from "../HomeScene";
import { Shader } from "../elements/content";

export default class Index extends React.Component {
  componentDidMount() {
    this.homeScene = new HomeScene(this.div);
  }

  componentWillUnmount() {
    this.homeScene.stop();
  }

  render() {
    return <Shader innerRef={div => (this.div = div)} />;
  }
}
