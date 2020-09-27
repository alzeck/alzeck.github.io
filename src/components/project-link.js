import React from "react"
// import { Link } from "gatsby"
// import Card from "react-bootstrap/Card"
// import Img from "gatsby-image"

const ProjectLink = ({ project }) => (
  <div>
    <h3> {project.name} </h3>
    <p> Description: {project.description} </p>
    <a href={project.html_url}> {project.html_url} </a>
    <p>{project.updated_at}</p>
    <p>{project.pushed_at}</p>
    <p>{project.created_at}</p>
    <p>{project.language}</p>
  </div>
)
export default ProjectLink
