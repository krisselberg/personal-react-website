import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Books = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="about-header">
        <h1>Book Notes</h1>
        <span className="about-header-subtitle">
          (Sorted from most recent books to least)
        </span>
      </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const amazon = post.frontmatter.amazon
          const rating = post.frontmatter.rating
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <div className="flex-wrapper">
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      className="book-showcase-image"
                    >
                      <GatsbyImage
                        image={getImage(post.frontmatter.showcaseImage)}
                        alt={post.fields.slug}
                      />
                    </Link>
                    <div className="book-text">
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <div>
                        <small>Date read: {post.frontmatter.date}</small>
                        <div>
                          <small>
                            Check out my{" "}
                            <Link to={post.fields.slug} itemProp="url">
                              notes
                            </Link>{" "}
                            and the book on <a href={amazon}>Amazon</a>.
                          </small>
                        </div>
                        <div>
                          <small>
                            How strongly I recommend the book to others:{" "}
                            <strong>{rating}</strong>/10
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Books

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All books" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/Users/kselberg/Documents/personal-website/content/books/"
        }
      }
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
                layout: FIXED
                height: 200
              )
            }
          }
          amazon
          rating
        }
      }
    }
  }
`
