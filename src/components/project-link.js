import React from "react"
// import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
// import Img from "gatsby-image"

const ProjectLink = ({ project }) => (
  <Card>
    <Card.Body>
    <h5> <a href={project.html_url}> {project.name} </a> </h5>
    {project.description} <br/>
    last updated: {project.updated_at}
    <p>Made in: <strong className={project.language }>{project.language}</strong></p>
    </Card.Body>
  </Card>
)
export default ProjectLink
