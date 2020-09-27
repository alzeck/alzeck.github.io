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
      <h1>Site under construction</h1>

      but you are welcome to look around.

    </Jumbotron>
  </Layout>
)

export default IndexPage
