import React from 'react';
import Nav from '../components/Nav';

export default ({ children }) => (
  <div style={{ margin: `0 auto` }}>
    <h1>Abnormal Studio</h1>

    <main>
      <section
        style={{
          margin: `0 auto`,
          width: `75vw`,
          height: `60vh`,
          border: `1px solid #212121`,
          background: `#212121`,
          color: `#FFFFFF`
        }}
      >
        {children()}
      </section>
      <Nav />
    </main>
  </div>
);
