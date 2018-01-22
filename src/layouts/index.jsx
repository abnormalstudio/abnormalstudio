import React from "react";
import { Motion, spring } from "react-motion";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import "../styles/reset.css";
import "../styles/common.scss";
import { Abnormal, Main } from "../elements/main";
import { colors } from "../elements/settings";
import logoJpg from "../images/AbLogo.jpg";

const siteName = "ABNORMAL studio";
const keywords =
  "agency, studio, web development, javascript, react, ruby, ruby on rails, shopify, threejs, web animation";
const description =
  "ABNORMAL studio is a small agency dedicated to making creative ideas accessible for everyone. We love challenges, no project is too small for us!";
const siteUrl = "https://www.abnormalstudio.com";
const imageUrl = logoJpg;

export default ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      height: `100vh`,
      background: `${colors.white}`
    }}
  >
    <Helmet>
      <html lang="en" />
      <title>{siteName}</title>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={siteName} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="title" content={siteName} />

      <meta property="og:title" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:creator" content="@abnormalstudio" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>

    <Logo />
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: spring(1, { stiffness: 10, damping: 15 }) }}
    >
      {value => (
        <div style={{ opacity: value.opacity }}>
          <SocialIcons />
          <Main>{children()}</Main>
          <Nav />
        </div>
      )}
    </Motion>
  </div>
);
