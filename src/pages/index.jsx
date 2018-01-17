import React from 'react';

import HomeScene from '../HomeScene';
import { Shader } from '../elements/home';

export default class Index extends React.Component {
  componentDidMount() {
    this.homeScene = new HomeScene(this.div);
  }

  render() {
    return <Shader innerRef={div => (this.div = div)} />;
  }
}
