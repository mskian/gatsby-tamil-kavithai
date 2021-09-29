import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import useClipboard from "react-use-clipboard"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        date(formatString: "YYYY MMMM Do")
        categories
        copied
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const pathname = typeof window !== "undefined" ? window.location.href : ""
  const [isCopied, setCopied] = useClipboard(frontmatter.copied)
  return (
    <section className="section">
      <HelmetProvider>
        <Helmet defer={false}>
          <title>{`${frontmatter.title}`}</title>
          <meta name="description" content={`${frontmatter.description}`} />
          <meta property="og:title" content={`${frontmatter.title}`} />
          <meta property="og:site_name" content={`${frontmatter.title}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`${frontmatter.description}`}
          />
          <meta
            property="og:image"
            content="https://kavithaiforum.com/kavithai-cover.png"
          />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/tamilsmsblog"
          />
          <meta
            property="article:author"
            content="https://www.facebook.com/tamilsmsblog"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${frontmatter.title}`} />
          <meta
            name="twitter:description"
            content={`${frontmatter.description}`}
          />
          <meta
            name="twitter:image"
            content="https://kavithaiforum.com/kavithai-cover.png"
          />
          <meta name="twitter:site" content="@tamilsmsblog" />
          <meta name="twitter:creator" content="@tamilsmsblog" />
          <link rel="canonical" href={pathname} />
          <meta name="twitter:url" content={pathname} />
          <meta property="og:url" content={pathname} />
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "publisher": {
                "@type": "Organization",
                "name": "Tamil Kavithaigal",
                "url": "${pathname}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kavithaiforum.com/logo.png",
                  "width": 60,
                  "height": 60
                }
              },
              "author": {
                "@type": "Person",
                "name": "Editorial Staff",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://www.gravatar.com/avatar/a3425a2c334972ab5dde3c218307cbdd?s=250&d=mm&r=x",
                    "width": 250,
                    "height": 250
                },
                "sameAs": [
                    "https://www.facebook.com/tamilsmsblog",
                    "https://twitter.com/tamilsmsblog"
                ]
            },
            "headline": "${frontmatter.title}",
              "url": "${pathname}",
              "datePublished": "${frontmatter.date}",
              "dateModified": "${frontmatter.date}",
              "image": {
                "@type": "ImageObject",
                "url": "https://kavithaiforum.com/kavithai-cover.png",
                "width": 1280,
                "height": 720
              },
              "keywords": "${frontmatter.categories}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${pathname}"
              },
              "description": "${frontmatter.description}"
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
                'page_title' : '${frontmatter.title}',
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
            <h1>{frontmatter.title}</h1>
            <hr />
            <p className="post-date">Updated at: {frontmatter.date}</p>
            <br />
            <MDXRenderer>{body}</MDXRenderer>
            <hr />
            <button
              className="button is-rounded is-danger read-random"
              onClick={setCopied}
            >
              Kavithai {isCopied ? "Copied 😀" : "Copied? 😟"}
            </button>
            <br />
            <p className="post-tags">
              Category :{" "}
              <Link
                to={`/category/${frontmatter.categories}`
                  .toLowerCase()
                  .split(" ")
                  .join("-")}
              >
                {frontmatter.categories}
              </Link>
            </p>
            <br />
            <Link to="/kavithai">
              <span role="img" aria-label="Growing Heart">
                🏠
              </span>{" "}
              Back to Blog
            </Link>
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

export default BlogPost
