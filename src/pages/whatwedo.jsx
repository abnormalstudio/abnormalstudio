import React from "react";
import { Helmet } from "react-helmet";

import { Aboutcontent, Para } from "../elements/content";
import { Btn } from "../elements/button";

export default class Whatwedo extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>What We Do | ABNORMAL studio</title>
          <meta property="og:title" content="What We Do | ABNORMAL studio" />
          <meta name="twitter:title" content="What We Do | ABNORMAL studio" />
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
