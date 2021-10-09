import React, { Component } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

class ErroPage extends Component {
  render() {
    const pathname = typeof window !== "undefined" ? window.location.href : ""
    return (
      <section className="section">
        <HelmetProvider>
          <Helmet defer={false}>
            <title>404 not Found</title>
            <meta
              name="description"
              content="Tamil Kavithaigal - 404 not Found."
            />
            <link rel="canonical" href={pathname} />
          </Helmet>
        </HelmetProvider>
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <br />
              <h1
                style={{ color: "#d63031" }}
                className="title has-text-centered"
              >
                Oops Error page or Something went Wrong
              </h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default ErroPage
