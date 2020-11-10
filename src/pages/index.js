import React from "react"
//import { Link } from "gatsby"
import TextLoop from "react-text-loop";
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbotron } from "react-bootstrap"

//Icons
import { AiFillLinkedin,AiFillGithub,AiOutlineMail } from "react-icons/ai";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron fluid style={{ background: "white"}}>
      <h3>Juan Sebastian Arboleda Polo</h3>

      <p>I'm a <TextLoop children={["Software Engineer", "Developer", "Graphical Designer", "Cybersecurity Enthusiast"]} /></p>
      
      <h3>
        <a style={{ color: "black"}} href={"https://www.linkedin.com/in/juan-arboleda-8305801ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BPp7i7l5VTuK0HygVdXihJw%3D%3D"}><AiFillLinkedin/></a>
        <a style={{ color: "black"}} href={"https://github.com/AlZeck"}><AiFillGithub/></a>
        <a style={{ color: "black"}}  href={"mailto:4lzeck@gmail.com"}><AiOutlineMail/></a>
      </h3>

    </Jumbotron>
  </Layout>
)

export default IndexPage
