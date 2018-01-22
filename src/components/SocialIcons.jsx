import React from "react";
import { FacebookButton, LinkedInButton, TwitterButton } from "react-social";
import SimpleLineIcon from "react-simple-line-icons";
import { SocialIcons } from "../elements/main";
import { colors } from "../elements/settings";

export default () => (
  <SocialIcons>
    <FacebookButton
      aria-label="Facebook"
      className="btn btn-social"
      appId="144478576347781"
    >
      <SimpleLineIcon
        name="social-facebook"
        size="Large"
        color={colors.naranja}
      />
    </FacebookButton>
    <TwitterButton aria-label="Twitter" className="btn btn-social">
      <SimpleLineIcon
        name="social-twitter"
        size="Large"
        color={colors.naranja}
      />
    </TwitterButton>
    <LinkedInButton aria-label="LinkedIn" className="btn btn-social">
      <SimpleLineIcon
        name="social-linkedin"
        size="Large"
        color={colors.naranja}
      />
    </LinkedInButton>
  </SocialIcons>
);
