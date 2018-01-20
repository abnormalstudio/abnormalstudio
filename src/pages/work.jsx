import React from "react";
import { Helmet } from "react-helmet";

import { Aboutcontent, Para } from "../elements/content";
import { Btn } from "../elements/button";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Work | Abnormal Studio</title>
        </Helmet>

        <Aboutcontent>
          <Para>We ❤️ working with the following technologies!</Para>
          <Para>
            React<br />
            Ruby on Rails<br />
            Gatsby<br />
            Shopify
          </Para>

          <Btn
            style={{ width: "125px" }}
            href="mailto:studio@abnormalstudio.com"
          >
            Lets talk!
          </Btn>
        </Aboutcontent>
      </div>
    );
  }
}
