import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Blogindex = ({ data }) => {
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet>
          <title>{`${data.site.siteMetadata.title}`}</title>
          <meta
            name="description"
            content={`${data.site.siteMetadata.description}`}
          />
          <meta
            property="og:title"
            content={`${data.site.siteMetadata.title}`}
          />
          <meta
            property="og:site_name"
            content={`${data.site.siteMetadata.title}`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`${data.site.siteMetadata.description}`}
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
            content={`${data.site.siteMetadata.title}`}
          />
          <meta
            name="twitter:description"
            content={`${data.site.siteMetadata.description}`}
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
                "name": "${data.site.siteMetadata.title}",
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
              "description": "${data.site.siteMetadata.description}"
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
                'page_title' : '${data.site.siteMetadata.title}',
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
            <br />
            <h1 className="title is-size-4 has-text-danger has-text-centered">
              படித்ததில் பிடித்தது 📕{" "}
              <span role="img" aria-label="Growing Heart">
                💚
              </span>
            </h1>
            <div className="subscribe-form">
              <p className="has-text-dark has-text-weight-medium has-text-left">
                Tamil SMS and Tamil Kavithai - Collect and Copied from Social
                Profiles and Favourite blogs.{" "}
                <span role="img" aria-label="heart">
                  💜
                </span>
              </p>
              <p className="has-text-dark has-text-weight-medium has-text-left">
                ➡️ Tamil Kavithai <br />
                ➡️ Tamil Motivational Quotes <br />
                ➡️ Tamil Life Quotes <br />
                ➡️ Kadhal kavithai <br />
                ➡️ Tamil Anbu kavithai <br />
                ➡️ Tamil Sad Quotes <br />
                ➡️ Tamil Song Lyrics <br />
                ➡️ Tamil Stories <br />
                ➡️ Tamil Movies updates and Review's <br />
                ➡️ Tamil Status for Social Stories and Status. <br />
              </p>
              <br />
              <Link
                to="/kavithai/"
                className="button is-rounded is-link read-more"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span>📩 Open Kavithai</span>
              </Link>
              <br />
              <hr />
              <p className="has-text-dark has-text-weight-medium has-text-left">
                Tamil Kavithai Forum - 📝 Post your Tamil Kavithai and Tamil
                Kavithai Quotes 💚
              </p>
              <a
                href="/postkavithai/"
                title="Post Kavithai"
                className="button is-rounded is-danger read-more"
              >
                <span>💌 Post your Kavithai</span>
              </a>
            </div>
            <br />
            <br />
            <hr />
            <p
              style={{ color: "#22221d" }}
              className="has-text-weight-medium has-text-centered"
            >
              தமிழ் எஸ் எம் எஸ்{" "}
              <span role="img" aria-label="Yello Heart">
                💚
              </span>
              <br />
              Note: we are Collecting the Kavithai Around internet and Social
              Profiles. <br />
              All the Credits to the Content Author <br />
              PWA Web App - Built using GatsbyJS <br />
              <br />
              <img
                src="./react.png"
                loading="lazy"
                height="40"
                width="40"
                alt="Tamil SMS"
              />
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogindex

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
