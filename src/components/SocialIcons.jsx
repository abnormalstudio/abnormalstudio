import React from 'react';
import { FacebookButton, LinkedInButton, TwitterButton } from 'react-social';
import SimpleLineIcon from 'react-simple-line-icons';
import { SocialIcons } from '../elements/main';
import { colors } from '../elements/settings';

export default () => (
  <SocialIcons>
    <FacebookButton aria-label="Facebook" className="btn btn-social">
      <SimpleLineIcon
        name="social-facebook"
        size="Large"
        color={colors.greyish}
      />
    </FacebookButton>
    <TwitterButton aria-label="Twitter" className="btn btn-social">
      <SimpleLineIcon
        name="social-twitter"
        size="Large"
        color={colors.greyish}
      />
    </TwitterButton>
    <LinkedInButton aria-label="LinkedIn" className="btn btn-social">
      <SimpleLineIcon
        name="social-linkedin"
        size="Large"
        color={colors.greyish}
      />
    </LinkedInButton>
  </SocialIcons>
);
