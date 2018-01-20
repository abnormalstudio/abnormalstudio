import React from 'react';
import { Helmet } from 'react-helmet';
import { Contactcontent, Para } from '../elements/content';

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
            <a href="mailto:studio@abnormal.com.com">studio@abnormal.com</a>.
          </Para>
        </Contactcontent>
      </div>
    );
  }
}
