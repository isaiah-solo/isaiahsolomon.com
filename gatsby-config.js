module.exports = {
  siteMetadata: {
    title: 'Isaiah Solomon',
    description: 'Hey, my name is Isaiah. I am a software developer and I like to build cool things.',
    author: 'Isaiah Solomon',
  },
  plugins: [
    'gatsby-plugin-aphrodite',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-isaiah.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGE_SENDER_ID,
          appId: process.env.APP_ID
        }
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/admin/*`] },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-firebase-collections`,
      options: {
        appConfig: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGE_SENDER_ID,
          appId: process.env.APP_ID
        },
        types: [
          {
            type: "BlogArticles",
            collection: `blog_articles`,
            map: doc => ({
              content: doc.content,
              createdDate: doc.created_date.seconds,
              lastUpdatedDate: doc.last_updated_date.seconds,
              title: doc.title
            }),
          },
        ]
      }
    }
  ],
}
