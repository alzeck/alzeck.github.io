import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbotron } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron fluid style={{ background: "white"}}>
      <h1>Hello World!</h1>

      Just some words to say 

    </Jumbotron>
  </Layout>
)

export default IndexPage
