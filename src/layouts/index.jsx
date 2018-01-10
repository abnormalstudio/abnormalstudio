import React from "react";
import Nav from "../components/Nav";
import { Main } from "../elements/main";

export default ({ children }) => (
  <div style={{ margin: `0 auto` }}>
    <h1>Abnormal Studio</h1>
    <Main>{children()}</Main>
    <Nav />
  </div>
);
