import styled from "styled-components";
import { padding, margin, fonts, colors } from "./settings";

const Main = styled.main`
  margin: 0 auto;
  margin-top: 3%;
  width: 75vw;
  height: 55vh;
  color: #000;
  background: #ff512f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dd2476,
    #ff512f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #dd2476,
    #ff512f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const SocialIcons = styled.section`
  position: absolute;
  left: ${padding.small};
  top: 50%;
  transform: translateY(-50%);
`;

export { Main, SocialIcons };
