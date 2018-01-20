import styled from "styled-components";
import Link from "gatsby-link";
import { padding, margin, fonts, colors } from "./settings";

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
`;

const Btn = styled.a`
  ${shared};
`;

const GatsbyBtn = styled(Link)`
  ${shared};
`;

export { Btn, GatsbyBtn };
