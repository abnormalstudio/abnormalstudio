import styled from 'styled-components';
import Link from 'gatsby-link';
import { padding, margin, fonts, colors } from './settings';

const shared = `
  font-family: ${fonts.body};
  font-size: 1.2rem;
  color: ${colors.white};
  background: transparent;
  border: 1px solid ${colors.white};
  transition: all 1s ease;
  margin: ${padding.mini};
  padding: ${padding.mini} ${padding.superSmall};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);  
  transition: box-shadow 1s ease;

  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

const Btn = styled.a`
  ${shared};
`;

const GatsbyBtn = styled(Link)`
  ${shared};
`;

export { Btn, GatsbyBtn };
