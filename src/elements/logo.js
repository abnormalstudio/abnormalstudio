import styled from "styled-components";
import Link from "gatsby-link";
import { padding, margin, fonts, colors } from "./settings";

const LogoImage = styled.img`
  width: 180px;
`;

const LogoLink = styled(Link)`
  padding-top: 3%;
  padding-left: 13%;
  display: inline-block;

  &:hover {
    background: transparent;
  }

  @media (max-width: 810px) {
    padding-top: 10%;
  }
`;

export { LogoImage, LogoLink };
