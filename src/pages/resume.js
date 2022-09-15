import * as React from "react"
import resume from "../../content/resume/Kristoffer_Selberg_Software_Engineering_Resume.pdf"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <a
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        href={resume}
        target="_blank"
        rel="noreferrer"
        id="email"
      >
        Download PDF
      </a>
      <StaticImage
        src="../images/resume.jpg"
        alt="resume"
        placeholder="tracedSVG"
      />
    </Layout>
  )
}

export default Resume

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
