import React from "react"
import ProjectLink from "../components/project-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardDeck from "react-bootstrap/CardDeck"
const ProjectsPage = ({
  data: {
    allProjectsJson: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => edge.node.name !== "alzeck.github.io")
    .map(edge => <ProjectLink project={edge.node} />)
  return (
    <Layout>
      <SEO title="Projects" />
      <h5>Take a look at some of my Open Source projects: </h5>
      <hr className="mt-1" />
      <CardDeck>{Projects}</CardDeck>
    </Layout>
  )
}
export default ProjectsPage


export const pageQuery = graphql`
  query {
    allProjectsJson(sort: {order: ASC, fields: [name]}) {
      edges {
        node {
          id
          name
          html_url
          description
          updated_at (formatString: "MMMM DD, YYYY")
          pushed_at (formatString: "MMMM DD, YYYY")
          created_at (formatString: "MMMM DD, YYYY")
          language
        }
      }
    }
  }  
`
