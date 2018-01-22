import React from "react";
import SimpleLineIcon from "react-simple-line-icons";
import { SocialIcons } from "../elements/main";
import { colors } from "../elements/settings";

import { ShareButtons } from "react-share";
const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;

export default () => (
  <SocialIcons>
    <FacebookShareButton
      aria-label="Facebook"
      className="btn btn-social"
      url={"https://www.abnormalstudio.com"}
    >
      <SimpleLineIcon
        name="social-facebook"
        size="Large"
        color={colors.greyish}
      />
    </FacebookShareButton>
    <TwitterShareButton aria-label="Twitter" className="btn btn-social">
      <SimpleLineIcon
        name="social-twitter"
        size="Large"
        color={colors.greyish}
      />
    </TwitterShareButton>
    <LinkedinShareButton aria-label="LinkedIn" className="btn btn-social">
      <SimpleLineIcon
        name="social-linkedin"
        size="Large"
        color={colors.greyish}
      />
    </LinkedinShareButton>
  </SocialIcons>
);
