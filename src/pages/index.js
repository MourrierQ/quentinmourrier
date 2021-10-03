import * as React from "react"
import Mail from "../components/Mail"
import Nav from "../components/Nav"
import Socials from "../components/Socials"
import About from "../content/About"
import Experience from "../content/Experience"
import Landing from "../content/Landing"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <Nav/>
      <div className="container">
        <Landing/>
        <About/>
        <Experience/>
      </div>
      <Socials/>
      <Mail/>
    </main>
  )
}

export default IndexPage
