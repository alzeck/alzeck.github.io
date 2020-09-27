import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Img from "gatsby-image"

const PostLink = ({ post }) => (
    <div>
        <Card>
            <Card.Body>
                <Img className="card-img-top" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                <Link to={post.frontmatter.slug}>
                    <Card.Title> {post.frontmatter.title} </Card.Title>
                </Link>
                {post.frontmatter.description}
            </Card.Body>
            <Card.Footer>
                Posted on {post.frontmatter.date}
            </Card.Footer>

        </Card>
    </div>
)
export default PostLink