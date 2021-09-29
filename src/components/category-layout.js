import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

const CategoryPage = ({ data, pageContext }) => {
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet defer={false}>
          <title>{pageContext.category} Page</title>
          <meta
            name="description"
            content="Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories."
          />
          <meta property="og:title" content={`${pageContext.category}`} />
          <meta property="og:site_name" content={`${pageContext.category}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories."
          />
          <meta
            property="og:image"
            content="https://kavithaiforum.com/kavithai-cover.png"
          />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/tamilsmsblog"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${pageContext.category}`} />
          <meta
            name="twitter:description"
            content="Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories."
          />
          <meta
            name="twitter:image"
            content="https://kavithaiforum.com/kavithai-cover.png"
          />
          <meta name="twitter:site" content="@tamilsmsblog" />
          <link rel="canonical" href={pathname} />
          <meta name="twitter:url" content={pathname} />
          <meta property="og:url" content={pathname} />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "publisher": {
                "@type": "Organization",
                "name": "${pageContext.category}",
                "url": "${pathname}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kavithaiforum.com/logo.png",
                  "width": 60,
                  "height": 60
                }
              },
              "url": "${pathname}",
              "image": {
                "@type": "ImageObject",
                "url": "https://kavithaiforum.com/kavithai-cover.png",
                "width": 1280,
                "height": 720
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${pathname}"
              },
              "description": "Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories."
            }
            `}</script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-67506568-28"
          ></script>
          <script>
            {`
            if(true) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
          
              gtag('config', 'UA-67506568-28', {
                'page_title' : '${pageContext.category}',
                'page_location': '${pathname}'
              });
             }
           `}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-half">
            <h2 className="title is-4 has-text-warning has-text-centered">
              {pageContext.category}
            </h2>
            <p className="has-text-centered">
              There are <b>{data.allMdx.totalCount}</b> posts in the{" "}
              <b>{pageContext.category}</b> category.
            </p>
            <br />
            <ul>
              {data.allMdx.nodes.map(post => (
                <li key={post.id} className="title is-6">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query CategoryPageQuery($category: String) {
    allMdx(
      filter: { frontmatter: { categories: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      totalCount
    }
  }
`
