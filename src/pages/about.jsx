import React from "react";
import { Helmet } from "react-helmet";

import { Aboutcontent, Para } from "../elements/content";
import { Btn, GatsbyBtn } from "../elements/button";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Abnormal Studio</title>
        </Helmet>

        <Aboutcontent>
          <Para>
            ABNORMAL is a small agency dedicated to making creative ideas
            accessible for everyone. We love challenges and no project is too
            small for us!
          </Para>

          <Para>Do you have an idea?</Para>

          <Para centered>
            <GatsbyBtn to="/work" style={{ width: "125px" }}>
              What we do
            </GatsbyBtn>
            <Btn
              style={{ width: "125px" }}
              href="mailto:studio@abnormalstudio.com"
            >
              Lets talk!
            </Btn>
          </Para>
        </Aboutcontent>
      </div>
    );
  }
}
