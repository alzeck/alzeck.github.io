import React from "react"
// import { Link } from "gatsby"
// import Card from "react-bootstrap/Card"
// import Img from "gatsby-image"

const ProjectLink = ({ project }) => (
  <div>
    <h5> {project.name} </h5>
    <a href={project.html_url}> {project.html_url} </a>
    <br/>{project.description} <br/>
    last updated: {project.updated_at}
    <p>Made in: {project.language}</p>
  </div>
)
export default ProjectLink
