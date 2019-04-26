module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: `/foobar`,
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        mdPlugins: [],
        hastPlugins: [],
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
  ],
}
