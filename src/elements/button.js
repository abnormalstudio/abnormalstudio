import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const Btn = styled.button`
  font-family: ${fonts.body};
  font-size: 1.2rem;
  line-height: 2.5rem;
  color: ${colors.black};
  background: transparent;
  transition: all 1s ease;

  &:hover {
    background: ${colors.orange};
  }
`;

export { Btn };
