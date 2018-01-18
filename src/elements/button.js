import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const Btn = styled.button`
  font-family: ${fonts.body};
  font-size: 2.5rem;
  line-height: 2.7rem;
  color: ${colors.white};
  border: 1px solid ${colors.orange};
  background: transparent;
  transition: all 1s ease;

  &:hover {
    background: ${colors.orange};
  }
`;

export { Btn };
