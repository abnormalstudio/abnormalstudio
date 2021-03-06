import React from 'react';
import { Helmet } from 'react-helmet';
import { Contactcontent, Para, Linking } from '../elements/content';

export default class Contact extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>Contact | ABNORMAL studio</title>
          <meta property="og:title" content="Contact | ABNORMAL studio" />
          <meta name="twitter:title" content="Contact | ABNORMAL studio" />
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
