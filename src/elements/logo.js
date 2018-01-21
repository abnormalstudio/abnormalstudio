import styled from "styled-components";
import Link from "gatsby-link";
import { padding, margin, fonts, colors } from "./settings";

const LogoImage = styled.img`
  width: 180px;
`;

const LogoLink = styled(Link)`
  padding-top: 3%;
  padding-left: 13%;
  display: block;

  &:hover {
    background: transparent;
  }
`;

export { LogoImage, LogoLink };
