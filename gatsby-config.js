module.exports = {
  siteMetadata: {
    siteUrl: `https://www.abnormalstudio.com`,
    title: `ABNORMAL studio`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-accessibilityjs`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`arapey`, `jura:300,400,400i,700`]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112963822-1"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ABNORMAL studio",
        lang: "en-US",
        short_name: "ABNORMAL",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "rgba(221,36,118,1)",
        display: "browser"
      }
    }
  ]
};
