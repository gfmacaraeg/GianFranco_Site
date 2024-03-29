module.exports = {
  siteMetadata: {
    title: "GianFranco's Website",
    author: "GianFranco Macaaraeg",
    description: "A website to showcase my projects"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/avatar.jpg',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
