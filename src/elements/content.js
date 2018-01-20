import styled, { css } from "styled-components";
import { padding, margin, fonts, colors } from "../elements/settings";

const Shader = styled.div`
  width: 100%;
  height: 100%;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff070b,
    #e5008d,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff070b,
    #e5008d,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Aboutcontent = styled.section`
  width: 60%;
  height: 55vh;
  display: block;
  margin: 0 auto;
  font-family: ${fonts.body};
  font-size: 1.5rem;
  line-height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-y: scroll;
`;

const Contactcontent = styled.section`
  width: 60%;
  height: 55vh;
  display: block;
  margin: 0 auto;
  font-family: ${fonts.body};
  font-size: 1.5rem;
  line-height: 2.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-y: scroll;
`;

const Para = styled.p`
  width: 80%;
  margin-bottom: ${margin.small};

  ${props =>
    props.centered &&
    css`
      text-align: center;
    `};
`;

export { Aboutcontent, Contactcontent, Para, Shader };
