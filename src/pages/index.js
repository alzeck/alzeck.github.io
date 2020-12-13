import React from "react"
//import { Link } from "gatsby"
import TextLoop from "react-text-loop"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { Card, Container, Jumbotron, Media } from "react-bootstrap"

//Icons
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { BsChevronCompactUp } from "react-icons/all"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container className={"main d-flex align-items-center justify-content-center px-0"}>
      <Card className={"profile-card glass"}>
      <Card.Body>
        <Media>
          <Media.Body>
            <h3>Juan S. Arboleda</h3>

            <p>I'm a <TextLoop
              children={["Software Engineer", "Fullstack Developer", "Graphical Designer"]} />
              <br />
              based in Newcastle UK
            </p>
            <h3>
              <a aria-label={"linkedin"} style={{ color: "black" }}
                 href={"https://www.linkedin.com/in/juan-arboleda-8305801ba"}><AiFillLinkedin /></a>
              <a aria-label={"github"} style={{ color: "black" }}
                 href={"https://github.com/AlZeck"}><AiFillGithub /></a>
              <a aria-label={"email"} style={{ color: "black" }} href={"mailto:4lzeck@gmail.com"}><AiOutlineMail /></a>
            </h3>
          </Media.Body>
          <img aria-label={"Profile Picture"} className="ml-3" src={require("../images/pp.jpg")} />
        </Media>
      </Card.Body>
    </Card>
    </Container>


    <span className={"arrow d-flex align-items-end justify-content-center"} > <h3 className={"text-light"}><BsChevronCompactUp /></h3> </span>
    <Card className={"glass"}>
      <Card.Body>
        <h3>Skills</h3>

        Some stuff i like working on

      </Card.Body>
    </Card>

  </Layout>
)

export default IndexPage
