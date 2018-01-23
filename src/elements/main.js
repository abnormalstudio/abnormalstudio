import styled from "styled-components";
import { padding, margin, fonts, colors } from "./settings";

const Main = styled.main`
  display: flex;
  margin: 0 auto;
  margin-top: 3%;
  width: 75vw;
  height: 55vh;
  color: #000;
  background: rgba(221, 36, 118, 1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgba(221, 36, 118, 0.9),
    rgba(255, 81, 47, 0.7)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgba(221, 36, 118, 0.9),
    rgba(255, 81, 47, 0.7)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow-y: scroll;

  @media (max-width: 810px) {
    width: 90vw;
  }

  @media (max-height: 700px) {
    height: 50vh;
  }
`;

const SocialIcons = styled.section`
  position: absolute;
  left: ${padding.small};
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 810px) {
    display: flex;
    max-width: 100vw;
    justify-content: flex-end;
    top: 95%;
    left: 70%;
  }

  @media (max-width: 520px) {
    left: auto;
    right: 11%;
  }
`;

export { Main, SocialIcons };
