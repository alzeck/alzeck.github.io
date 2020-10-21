import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
require(`katex/dist/katex.min.css`)

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="d-flex flex-wrap">
            <h2>{frontmatter.title}</h2>
            <small className="text-muted ml-auto mt-auto">Posted on: {frontmatter.date}</small>
          </div>
          <hr className="mt-1" />
          <div
            className="blog-post-content mx-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight:200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
