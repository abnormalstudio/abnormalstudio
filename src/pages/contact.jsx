import React from 'react';
import { Helmet } from 'react-helmet';
import { Contactcontent, Para, Linking } from '../elements/content';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Abnormal Studio</title>
        </Helmet>

        <Contactcontent>
          <Para>Would you like to get in touch?</Para>

          <Para>
            Drop us a line at{' '}
            <Linking
              href="mailto:studio@abnormal.com.com"
              target="_blank"
              style={{ color: `#FFF` }}
            >
              STUDIO@ABNORMALSTUDIO.COM
            </Linking>
          </Para>
        </Contactcontent>
      </div>
    );
  }
}
