import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  //   posts.filter(post => post.node.relativePath.startsWith("blog"))

  return (
    <Layout location={location} title={siteTitle}>
      <div className="about-header">
        <h1>Blog</h1>
        <span className="about-header-subtitle">
          All Posts
        </span>
      </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          showcaseImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                transformOptions: { cropFocus: CENTER }
                layout: FULL_WIDTH
                aspectRatio: 2
              )
            }
          }
        }
      }
    }
  }
`
