import styled from "styled-components";
import Link from "gatsby-link";
import { padding, margin, fonts, colors } from "./settings";

const shared = `
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

const Btn = styled.a`
  ${shared};
`;

const GatsbyBtn = styled(Link)`
  ${shared};
`;

export { Btn, GatsbyBtn };
