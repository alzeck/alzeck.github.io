import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResearchPage = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
	return (
		<Layout>
			<SEO title="Research" />
			<div>{Posts}</div>
		</Layout>
	)
}
export default ResearchPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
          }
        }
      }
    }
  }
`