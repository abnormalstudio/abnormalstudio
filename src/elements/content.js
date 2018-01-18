import styled from 'styled-components';
import { padding, margin, fonts, colors } from '../elements/settings';

const Shader = styled.div`
  width: 100%;
  height: 100%;
`;

const Aboutcontent = styled.section`
  width: 60%;
  height: 55vh;
  display: block;
  margin: 0 auto;
  font-family: ${fonts.body};
  font-size: 1.2rem;
  line-height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-y: scroll;
`;

const Para = styled.p`
  width: 50%;
  text-align: justify;
  margin-bottom: ${margin.small};
`;

export { Aboutcontent, Para, Shader };
