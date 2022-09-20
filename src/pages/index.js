import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle} location={location}>
      <main>
        <h2 className="newsletter-header">
          Subscribe to my weekly newsletter!
        </h2>
        <div id="revue-embed">
          <form
            action="https://www.getrevue.co/profile/selberg_kris/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
            rel="noreferrer"
          >
            <div className="revue-form-group">
              <input
                className="revue-form-field"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div className="revue-form-actions">
              <input
                className="btn-subscribe"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div className="revue-form-footer">
              By subscribing, you agree with Revue’s{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.getrevue.co/terms"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.getrevue.co/privacy"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
        <div className="about-header">
          <h1>Me In 10 Seconds</h1>
        </div>
        <div className="about-body">
          <p>
            Born and raised in Florida. Computer Science student from Princeton
            University on a gap year, searching for software engineering roles
            in the startup world.
          </p>
          <p>
            Some of my favorite books are Atomic Habits by James Clear, Can't
            Hurt Me by David Goggins, and Deep Work by Cal Newport. See my book
            notes <Link to="/books">here</Link>.
          </p>
        </div>
        <div className="about-header">
          <h1>What Am I Doing Now?</h1>
          <span className="about-header-subtitle">
            (This is a{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noreferrer"
            >
              Now
            </a>{" "}
            page. Last updated: September 15, 2022)
          </span>
        </div>
        <div className="about-body">
          <div className="about-flex-box">
            <p>🌴</p>
            <p>Living in Sarasota, Florida, enjoying the weather.</p>
          </div>
          <div className="about-flex-box">
            <p>💻</p>
            <p>
              Interviewing for software-related positions at startups (on a gap
              year).
            </p>
          </div>
          <div className="about-flex-box">
            <p>🥊</p>
            <p>Boxing four days a week.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kris Selberg" />

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
