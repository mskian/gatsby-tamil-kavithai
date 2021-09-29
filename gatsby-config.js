/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Tamil Kavithaigal - படித்ததில் பிடித்தது - Kavithai Forum`,
    description: `Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories.`,
    siteUrl: "https://kavithaiforum.com",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              loading: `lazy`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/kavithai`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kavithai Forum`,
        short_name: `Kavithai Forum`,
        description: `Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories.`,
        start_url: `/`,
        background_color: `#d35400`,
        theme_color: `#d35400`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        legacy: true,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
          `https://www.googletagmanager.com`,
          `https://analytics.google.com`,
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "./",
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  category: edge.node.frontmatter.categories,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { frontmatter: { published: { eq: true } } }
                ) {
                  edges {
                    node {
                      excerpt
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                        categories
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Kavithai Forum RSS Feed",
            match: "^/kavithai/",
          },
        ],
      },
    },
  ],
}
