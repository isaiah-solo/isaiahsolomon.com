/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogArticleTemplate = path.resolve('src/templates/BlogArticle.tsx')
    const result = await graphql(`
      query {
        allBlogArticles {
          nodes {
            content
            id
            title
          }
        }
      }
    `)

    result.data.allBlogArticles.nodes.forEach(node => {
        createPage({
            path: `/blog/${node.id}`,
            component: blogArticleTemplate,
            context: { ...node },
        })
    })
};
