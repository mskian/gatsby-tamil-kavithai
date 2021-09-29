import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    const pathname = typeof window !== "undefined" ? window.location.href : ""
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <section className="section">
        <HelmetProvider>
          <Helmet defer={false}>
            <title>Blog - Kavithai Forum - படித்ததில் பிடித்தது</title>
            <meta
              name="description"
              content="Kavithai Forum - Latest Collectios of Tamil kavithai, Tamil Quotes and Kadhal Kavithai for Social Status and Stories."
            />
            <meta
              property="og:title"
              content="Blog - Kavithai Forum - படித்ததில் பிடித்தது"
            />
            <meta
              property="og:site_name"
              content="Blog - Kavithai Forum - படித்ததில் பிடித்தது"
            />
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
            <meta
              name="twitter:title"
              content="Blog - Kavithai Forum - படித்ததில் பிடித்தது"
            />
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
                "name": "Blog - Kavithai Forum - படித்ததில் பிடித்தது",
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
                'page_title' : 'Blog - Kavithai Forum - படித்ததில் பிடித்தது',
                'page_location': '${pathname}'
              });
             }
           `}
            </script>
          </Helmet>
        </HelmetProvider>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <br />
              <h1 className="title is-4 has-text-warning has-text-centered">
                படித்தால் பிடித்தது...!{" "}
                <span role="img" aria-label="Growing Heart">
                  📕
                </span>
              </h1>
              <p className="has-text-centered">
                Tamil Kavithaigal - Tamil Quotes - kadhal kavithai.
                <br />
                Share the Kavithai Which Collected Around the internet.
              </p>
              <br />
              <hr />

              {posts.map(({ node }) => (
                <h1 key={node.id} className="is-size-6">
                  ➡ <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  <hr />
                </h1>
              ))}

              <br />
              {!isFirst && (
                <Link
                  style={{ margin: "20px" }}
                  to={`../${prevPage}`}
                  rel="prev"
                >
                  <span role="img" aria-label="Growing Heart">
                    ◀
                  </span>{" "}
                  Previous
                </Link>
              )}
              {!isLast && (
                <Link
                  style={{ margin: "20px" }}
                  to={`/kavithai/${nextPage}`}
                  rel="next"
                >
                  <span role="img" aria-label="Growing Heart">
                    ▶
                  </span>{" "}
                  Next
                </Link>
              )}
              <br />
              <br />
              <hr />
              <p
                style={{ color: "#9dad7f" }}
                className="has-text-weight-bold has-text-centered"
              >
                தமிழ் எஸ் எம் எஸ்{" "}
                <span role="img" aria-label="Yello Heart">
                  💛
                </span>
                <br />
                Note: we are Collecting the Kavithai Around internet and Social
                Profiles. <br />
                All the Credits to the Content Author <br />
                PWA Web App - Built using GatsbyJS <br />
                <br />
                <img
                  src="../react.png"
                  loading="lazy"
                  height="40"
                  width="40"
                  alt="Tamil SMS"
                />
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
