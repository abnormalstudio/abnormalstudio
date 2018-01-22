import styled, { css } from 'styled-components';
import { padding, margin, fonts, colors } from '../elements/settings';

const Shader = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e5008d,
    #ff070b,
    #f28a79
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e5008d,
    #ff070b,
    #f28a79
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

  @media (max-width: 810px) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.5rem;
  }
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

  @media (max-width: 810px) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Para = styled.p`
  text-align: left;
  width: 80%;
  margin-bottom: ${margin.small};

  ${props =>
    props.centered &&
    css`
      text-align: center;
    `};
`;

const Linking = styled.a`
  text-decoration: none;
  font-family: ${fonts.nav};
  font-size: 1.2rem;
  color: ${colors.greyish};
  transition: all 1s ease;

  &:hover {
    color: ${colors.white};
  }

  @media (max-width: 520px) {
    display: block;
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.8rem;
    padding-left: 0px;
  }
`;

export { Aboutcontent, Contactcontent, Para, Shader, Linking };
