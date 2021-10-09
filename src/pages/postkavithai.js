import * as React from "react"
import { graphql } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Blogposts = ({ data }) => {
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet>
          <title>Post your Tamil Kavithai - Kavithai Forum</title>
          <meta
            name="description"
            content={`${data.site.siteMetadata.description}`}
          />
          <meta
            property="og:title"
            content="Post your Tamil Kavithai - Kavithai Forum"
          />
          <meta
            property="og:site_name"
            content="Post your Tamil Kavithai - Kavithai Forum"
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
            content="Post your Tamil Kavithai - Kavithai Forum"
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
                "name": "Post your Tamil Kavithai - Kavithai Forum",
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
                'page_title' : 'Post your Tamil Kavithai - Kavithai Forum',
                'page_location': '${pathname}'
              });
             }
           `}
          </script>
          <script
            data-isso="https://isso.kavithaiforum.com/"
            data-isso-css="true"
            data-isso-require-author="false"
            data-isso-vote="true"
            data-isso-feed="false"
            src="https://isso.kavithaiforum.com/js/embed.min.js"
          ></script>
        </Helmet>
      </HelmetProvider>
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-half">
            <br />
            <h1 className="title is-size-4 has-text-danger has-text-centered">
              Post your Kavithai 📕{" "}
              <span role="img" aria-label="Growing Heart">
                💚
              </span>
            </h1>
            <div className="subscribe-form">
              <p className="has-text-dark has-text-weight-medium has-text-left">
                Post your Own Tamil Kavithai, Tamil Quotes and Kadhal Kavithai -
                Spread Around the World.{" "}
                <span role="img" aria-label="heart">
                  💜
                </span>
              </p>
              <p className="has-text-dark has-text-weight-medium has-text-left">
                ➡️ Kavithai Forum Discussions <br />
                ➡️ Avoid Spam <br />
                ➡️ Just Discuss the Things Related to Tamil Kavithai <br />
              </p>
            </div>
            <div
              id="isso-thread"
              data-title="Post your Tamil Kavithai - Kavithai Forum"
            ></div>
            <br />
            <hr />
            <p
              style={{ color: "#2c3e50" }}
              className="has-text-weight-bold has-text-centered"
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
                src="/react.png"
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

export default Blogposts

export const query = graphql`
  query SITE_PAGE_QUERY {
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
