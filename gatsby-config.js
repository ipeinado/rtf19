module.exports = {
  siteMetadata: {
    title: `Raising the Floor`,
    description: `Raising the Floor is an organization that is working to ensure that people who face barriers due to disability, literacy, digital-literacy, and aging are able to fully understand, access, and use the digital world.`,
    author: `@ipeinadom`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raising the floor`,
        short_name: `rtf`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f7c022`,
        display: `minimal-ui`,
        icon: `src/images/rtf-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
