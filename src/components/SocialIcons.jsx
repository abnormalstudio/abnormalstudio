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

const url = "https://www.abnormalstudio.com";
const title =
  "ABNORMAL studio is a small agency dedicated to making creative ideas accessible for everyone. We love challenges, no project is too small for us!";

export default () => (
  <SocialIcons>
    <FacebookShareButton
      aria-label="Facebook"
      className="btn btn-social"
      url={url}
      quote={title}
    >
      <SimpleLineIcon
        name="social-facebook"
        size="Large"
        color={colors.greyish}
      />
    </FacebookShareButton>
    <TwitterShareButton
      aria-label="Twitter"
      className="btn btn-social"
      url={url}
      title={title}
    >
      <SimpleLineIcon
        name="social-twitter"
        size="Large"
        color={colors.greyish}
      />
    </TwitterShareButton>
    <LinkedinShareButton
      aria-label="LinkedIn"
      className="btn btn-social"
      url={url}
      title={title}
    >
      <SimpleLineIcon
        name="social-linkedin"
        size="Large"
        color={colors.greyish}
      />
    </LinkedinShareButton>
  </SocialIcons>
);
