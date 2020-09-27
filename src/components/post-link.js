import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Img from "gatsby-image"

const PostLink = ({ post }) => (
  <Card
    style={{
      maxWidth: 300
    }}
  >
    <div className="mt-2 mx-2">
      <Img
        className="card-img-top"
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
      />
    </div>
    <Card.Body>
      <Link to={post.frontmatter.slug}>
        <Card.Title> {post.frontmatter.title} </Card.Title>
      </Link>
      {post.frontmatter.description}
    </Card.Body>
    <Card.Footer className="text-muted" >Posted on {post.frontmatter.date}</Card.Footer>
  </Card>
)
export default PostLink
