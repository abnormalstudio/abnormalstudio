import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const Abnormal = styled.h1`
  font-family: ${fonts.headings};
  font-size: 2.5rem;
  line-height: 2.7rem;
  padding-top: 3%;
  padding-left: 10%;
  color: ${colors.bluish};
`;

const Main = styled.main`
  margin: 0 auto;
  margin-top: 3%;
  width: 75vw;
  height: 55vh;
  background: ${colors.strongPurple};
  color: #ffffff;
`;

export { Abnormal, Main };
