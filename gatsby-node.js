const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require(`slugify`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/kavithai${value}`,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const postcategories = await graphql(`
    query {
      rawcategories: allMdx {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/post-page-template.js`),
      context: { id: node.id },
    })
  })
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/kavithai` : `/kavithai/${i + 1}`,
      component: path.resolve("./src/components/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const data_categories = postcategories.data.rawcategories.group
  data_categories.forEach(({ fieldValue }) =>
    createPage({
      path: `category/${slugify(fieldValue, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: false,
      })}`,
      component: path.resolve("./src/components/category-layout.js"),
      context: {
        category: fieldValue,
      },
    })
  )
}
