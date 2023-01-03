import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle} location={location}>
      <main>
        <div className="about-header">
          <h1>Me In 10 Minutes</h1>
          <span className="about-header-subtitle">
            (Too long? Check out <Link to="/">Me in 10 Seconds</Link>. Last
            updated: October 31, 2022)
          </span>
        </div>
        <div className="about-body">
          <h3>My life timeline</h3>
          <div className="about-flex-box">
            <p>🌴</p>
            <p>2001: Born in Florida</p>
          </div>
          <div className="about-flex-box">
            <p>⚽</p>
            <p>2004: Started playing soccer</p>
          </div>
          <div className="about-flex-box">
            <p>🇧🇷</p>
            <p>
              2008: Started learning{" "}
              <a
                href="https://en.wikipedia.org/wiki/Capoeira"
                target="_blank"
                rel="noreferrer"
              >
                Capoeira
              </a>
            </p>
          </div>
          <div className="about-flex-box">
            <p>♨️</p>
            <p>2019: Started coding in Java</p>
          </div>
          <div className="about-flex-box">
            <p>🐯</p>
            <p>
              2020: Started studying at Princeton, found my love for coding,
              read a book a week, won an{" "}
              <a
                href="https://m3challenge.siam.org/archives/2020"
                target="_blank"
                rel="noreferrer"
              >
                applied math competition
              </a>{" "}
            </p>
          </div>
          <div className="about-flex-box">
            <p>🎶</p>
            <p>
              2021: Grew{" "}
              <a
                href="https://www.tiktok.com/@kris.selberg"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>{" "}
              to 160k+ followers, worked on{" "}
              <a
                href="https://www.theguardian.com/technology/2020/jan/13/what-are-deepfakes-and-how-can-you-spot-them"
                target="_blank"
                rel="noreferrer"
              >
                deepfake
              </a>{" "}
              detection at the{" "}
              <a
                href="https://www.hbku.edu.qa/en/qcri/about"
                target="_blank"
                rel="noreferrer"
              >
                Qatar Computing Research Institute
              </a>
            </p>
          </div>
          <div className="about-flex-box">
            <p>🇨🇴</p>
            <p>
              2022: Lived in Colombia for three months, Flavrs, web dev, and boxing
            </p>
          </div>
          <div className="about-flex-box">
            <p>❓</p>
            <p>
              2023: TBD
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Kris Selberg" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
